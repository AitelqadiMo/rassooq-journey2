import outputs from '../src/aws-exports.js';

const endpoint = outputs.aws_appsync_graphqlEndpoint;
const apiKey = outputs.aws_appsync_apiKey;

async function gql(query, variables) {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': apiKey,
    },
    body: JSON.stringify({ query, variables })
  });
  const json = await res.json();
  if (json.errors) {
    console.warn('GraphQL errors:', json.errors);
    return null;
  }
  return json.data;
}

async function main() {
  console.log('Bulk seeding categories, sellers, and products...');
  
  // Additional Categories
  const categories = [
    { id: 'cat-fashion', name: 'Fashion', slug: 'fashion' },
    { id: 'cat-home', name: 'Home & Garden', slug: 'home-garden' },
    { id: 'cat-sports', name: 'Sports', slug: 'sports' },
    { id: 'cat-beauty', name: 'Beauty', slug: 'beauty' },
    { id: 'cat-books', name: 'Books', slug: 'books' }
  ];

  for (const cat of categories) {
    try {
      await gql(`mutation Seed($input: CreateCategoryInput!) { createCategory(input: $input) { id } }`, {
        input: cat
      });
      console.log(`✓ Category: ${cat.name}`);
    } catch (e) {
      console.log(`- Category ${cat.name} (may exist)`);
    }
  }

  // Additional Sellers
  const sellers = [
    { id: 'sel-fashionhub', name: 'Fashion Hub', slug: 'fashionhub', logoUrl: 'https://picsum.photos/seed/fashion/100/100', rating: 4.3 },
    { id: 'sel-homestore', name: 'Home Store', slug: 'homestore', logoUrl: 'https://picsum.photos/seed/home/100/100', rating: 4.7 },
    { id: 'sel-sportsworld', name: 'Sports World', slug: 'sportsworld', logoUrl: 'https://picsum.photos/seed/sports/100/100', rating: 4.5 }
  ];

  for (const seller of sellers) {
    try {
      await gql(`mutation Seed($input: CreateSellerInput!) { createSeller(input: $input) { id } }`, {
        input: seller
      });
      console.log(`✓ Seller: ${seller.name}`);
    } catch (e) {
      console.log(`- Seller ${seller.name} (may exist)`);
    }
  }

  // Bulk Products
  const products = [
    // Electronics
    { id: 'prod-samsung-s24', title: 'Samsung Galaxy S24', description: 'Latest Samsung flagship', price: 999, stock: 30, imageUrls: ['https://picsum.photos/seed/samsung/800/600'], categoryId: 'cat-electronics', sellerId: 'sel-techworld' },
    { id: 'prod-airpods', title: 'AirPods Pro', description: 'Noise cancelling earbuds', price: 249, stock: 50, imageUrls: ['https://picsum.photos/seed/airpods/800/600'], categoryId: 'cat-electronics', sellerId: 'sel-techworld' },
    { id: 'prod-ipad', title: 'iPad Air', description: 'Versatile tablet', price: 599, stock: 25, imageUrls: ['https://picsum.photos/seed/ipad/800/600'], categoryId: 'cat-electronics', sellerId: 'sel-techworld' },
    
    // Fashion
    { id: 'prod-jacket', title: 'Winter Jacket', description: 'Warm and stylish', price: 89, stock: 40, imageUrls: ['https://picsum.photos/seed/jacket/800/600'], categoryId: 'cat-fashion', sellerId: 'sel-fashionhub' },
    { id: 'prod-jeans', title: 'Denim Jeans', description: 'Classic fit', price: 59, stock: 60, imageUrls: ['https://picsum.photos/seed/jeans/800/600'], categoryId: 'cat-fashion', sellerId: 'sel-fashionhub' },
    { id: 'prod-sneakers', title: 'Running Sneakers', description: 'Comfortable running shoes', price: 120, stock: 35, imageUrls: ['https://picsum.photos/seed/sneakers/800/600'], categoryId: 'cat-fashion', sellerId: 'sel-fashionhub' },
    
    // Home & Garden
    { id: 'prod-sofa', title: 'Modern Sofa', description: '3-seater comfort', price: 799, stock: 10, imageUrls: ['https://picsum.photos/seed/sofa/800/600'], categoryId: 'cat-home', sellerId: 'sel-homestore' },
    { id: 'prod-lamp', title: 'Table Lamp', description: 'Elegant lighting', price: 45, stock: 80, imageUrls: ['https://picsum.photos/seed/lamp/800/600'], categoryId: 'cat-home', sellerId: 'sel-homestore' },
    
    // Sports
    { id: 'prod-bike', title: 'Mountain Bike', description: '21-speed bike', price: 450, stock: 15, imageUrls: ['https://picsum.photos/seed/bike/800/600'], categoryId: 'cat-sports', sellerId: 'sel-sportsworld' },
    { id: 'prod-weights', title: 'Dumbbell Set', description: 'Adjustable weights', price: 199, stock: 20, imageUrls: ['https://picsum.photos/seed/weights/800/600'], categoryId: 'cat-sports', sellerId: 'sel-sportsworld' },
    
    // Beauty
    { id: 'prod-skincare', title: 'Skincare Set', description: 'Complete routine', price: 79, stock: 45, imageUrls: ['https://picsum.photos/seed/skincare/800/600'], categoryId: 'cat-beauty', sellerId: 'sel-fashionhub' },
    { id: 'prod-perfume', title: 'Premium Perfume', description: 'Long-lasting fragrance', price: 89, stock: 30, imageUrls: ['https://picsum.photos/seed/perfume/800/600'], categoryId: 'cat-beauty', sellerId: 'sel-fashionhub' },
  ];

  for (const product of products) {
    try {
      await gql(`mutation Seed($input: CreateProductInput!) { createProduct(input: $input) { id } }`, {
        input: product
      });
      console.log(`✓ Product: ${product.title}`);
    } catch (e) {
      console.log(`- Product ${product.title} (may exist)`);
    }
  }

  console.log('Bulk seeding completed!');
}

main().catch(err => {
  console.error('Bulk seeding failed', err);
  process.exit(1);
});

