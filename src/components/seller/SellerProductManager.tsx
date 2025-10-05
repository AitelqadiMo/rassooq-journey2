import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/api';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { Plus, Edit, Trash2, Package } from 'lucide-react';

const client = generateClient();

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  stock: number;
  imageUrls?: string[];
  categoryId: string;
  sellerId: string;
  createdAt: string;
  updatedAt: string;
}

interface Category {
  id: string;
  name: string;
  slug: string;
}

export const SellerProductManager = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    stock: '',
    categoryId: '',
    imageUrls: ''
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      
      // Load categories
      const categoriesResponse = await client.graphql({
        query: `
          query ListCategories {
            listCategories {
              items {
                id
                name
                slug
              }
            }
          }
        `
      }) as any;
      
      setCategories(categoriesResponse.data.listCategories.items || []);

      // Load seller's products
      const productsResponse = await client.graphql({
        query: `
          query ListProducts($filter: ModelProductFilterInput) {
            listProducts(filter: $filter) {
              items {
                id
                title
                description
                price
                stock
                imageUrls
                categoryId
                sellerId
                createdAt
                updatedAt
              }
            }
          }
        `,
        variables: {
          filter: {
            sellerId: { eq: user?.userId || 'current-seller' }
          }
        }
      }) as any;

      setProducts(productsResponse.data.listProducts.items || []);
    } catch (error) {
      console.error('Error loading data:', error);
      toast({
        title: 'Error',
        description: 'Failed to load data',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const productData = {
        title: formData.title,
        description: formData.description,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock),
        categoryId: formData.categoryId,
        sellerId: user?.userId || 'current-seller',
        imageUrls: formData.imageUrls ? formData.imageUrls.split(',').map(url => url.trim()) : [],
        searchTitle: formData.title // For search functionality
      };

      if (editingProduct) {
        // Update existing product
        await client.graphql({
          query: `
            mutation UpdateProduct($input: UpdateProductInput!) {
              updateProduct(input: $input) {
                id
                title
                description
                price
                stock
              }
            }
          `,
          variables: {
            input: {
              id: editingProduct.id,
              ...productData
            }
          }
        });
        
        toast({
          title: 'Success',
          description: 'Product updated successfully!'
        });
      } else {
        // Create new product
        await client.graphql({
          query: `
            mutation CreateProduct($input: CreateProductInput!) {
              createProduct(input: $input) {
                id
                title
                description
                price
                stock
              }
            }
          `,
          variables: {
            input: productData
          }
        });
        
        toast({
          title: 'Success',
          description: 'Product created successfully!'
        });
      }

      // Reset form and reload data
      setFormData({
        title: '',
        description: '',
        price: '',
        stock: '',
        categoryId: '',
        imageUrls: ''
      });
      setEditingProduct(null);
      setShowForm(false);
      loadData();
      
    } catch (error) {
      console.error('Error saving product:', error);
      toast({
        title: 'Error',
        description: 'Failed to save product',
        variant: 'destructive'
      });
    }
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      title: product.title,
      description: product.description,
      price: product.price.toString(),
      stock: product.stock.toString(),
      categoryId: product.categoryId,
      imageUrls: product.imageUrls?.join(', ') || ''
    });
    setShowForm(true);
  };

  const handleDelete = async (productId: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return;

    try {
      await client.graphql({
        query: `
          mutation DeleteProduct($input: DeleteProductInput!) {
            deleteProduct(input: $input) {
              id
            }
          }
        `,
        variables: {
          input: { id: productId }
        }
      });

      toast({
        title: 'Success',
        description: 'Product deleted successfully!'
      });
      
      loadData();
    } catch (error) {
      console.error('Error deleting product:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete product',
        variant: 'destructive'
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Product Management</h1>
          <p className="text-muted-foreground">Manage your product catalog</p>
        </div>
        <Button onClick={() => {
          setEditingProduct(null);
          setFormData({
            title: '',
            description: '',
            price: '',
            stock: '',
            categoryId: '',
            imageUrls: ''
          });
          setShowForm(true);
        }}>
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </Button>
      </div>

      {/* Product Form */}
      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>
              {editingProduct ? 'Edit Product' : 'Add New Product'}
            </CardTitle>
            <CardDescription>
              Fill in the product details below
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Product Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="categoryId">Category *</Label>
                  <select
                    id="categoryId"
                    value={formData.categoryId}
                    onChange={(e) => setFormData({...formData, categoryId: e.target.value})}
                    className="w-full px-3 py-2 border border-input bg-background rounded-md"
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  rows={3}
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="price">Price ($) *</Label>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="stock">Stock Quantity *</Label>
                  <Input
                    id="stock"
                    type="number"
                    value={formData.stock}
                    onChange={(e) => setFormData({...formData, stock: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="imageUrls">Image URLs (comma-separated)</Label>
                <Input
                  id="imageUrls"
                  value={formData.imageUrls}
                  onChange={(e) => setFormData({...formData, imageUrls: e.target.value})}
                  placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg"
                />
              </div>

              <div className="flex gap-2">
                <Button type="submit">
                  {editingProduct ? 'Update Product' : 'Create Product'}
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Products List */}
      <div className="grid gap-4">
        {products.length === 0 ? (
          <Card>
            <CardContent className="flex items-center justify-center py-8">
              <div className="text-center">
                <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No products yet</h3>
                <p className="text-muted-foreground mb-4">
                  Start by adding your first product to the catalog
                </p>
                <Button onClick={() => setShowForm(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Your First Product
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          products.map(product => (
            <Card key={product.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                    <p className="text-muted-foreground mb-2">{product.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>Price: ${product.price}</span>
                      <span>Stock: {product.stock}</span>
                      <span>Category: {categories.find(c => c.id === product.categoryId)?.name || 'Unknown'}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={() => handleEdit(product)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => handleDelete(product.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};


