#!/usr/bin/env node

/**
 * Rassooq Database Seeder
 * Populates all tables with realistic test data for Morocco e-commerce platform
 */

import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import awsconfig from '../src/aws-exports.js';

Amplify.configure(awsconfig);
const client = generateClient();

// ========================================
// DATA GENERATORS
// ========================================

const moroccanCities = ['Casablanca', 'Rabat', 'Marrakech', 'Fes', 'Tangier', 'Agadir', 'Meknes', 'Oujda', 'Kenitra', 'Tetouan'];

const categories = [
  { id: 'cat-electronics', name: 'Electronics', slug: 'electronics', description: 'Latest gadgets and tech', icon: '📱', isActive: true, displayOrder: 1 },
  { id: 'cat-fashion', name: 'Fashion', slug: 'fashion', description: 'Trending clothes and accessories', icon: '👗', isActive: true, displayOrder: 2 },
  { id: 'cat-home', name: 'Home & Living', slug: 'home-living', description: 'Furniture and home decor', icon: '🏠', isActive: true, displayOrder: 3 },
  { id: 'cat-beauty', name: 'Beauty & Health', slug: 'beauty-health', description: 'Skincare and wellness products', icon: '💄', isActive: true, displayOrder: 4 },
  { id: 'cat-sports', name: 'Sports & Outdoors', slug: 'sports-outdoors', description: 'Fitness and outdoor gear', icon: '⚽', isActive: true, displayOrder: 5 },
  { id: 'cat-books', name: 'Books & Media', slug: 'books-media', description: 'Books, music, and movies', icon: '📚', isActive: true, displayOrder: 6 },
  { id: 'cat-toys', name: 'Toys & Kids', slug: 'toys-kids', description: 'Toys and children products', icon: '🧸', isActive: true, displayOrder: 7 },
  { id: 'cat-groceries', name: 'Groceries', slug: 'groceries', description: 'Food and daily essentials', icon: '🛒', isActive: true, displayOrder: 8 }
];

const sellers = [
  {
    id: 'seller-techmart',
    name: 'TechMart Morocco',
    slug: 'techmart-morocco',
    description: 'Your trusted electronics store',
    businessEmail: 'contact@techmart.ma',
    businessPhone: '+212-522-123456',
    rating: 4.7,
    reviewCount: 245,
    isVerified: true,
    userId: 'user-seller1',
    status: 'active'
  },
  {
    id: 'seller-fashionhub',
    name: 'Fashion Hub',
    slug: 'fashion-hub',
    description: 'Latest fashion trends',
    businessEmail: 'hello@fashionhub.ma',
    businessPhone: '+212-522-789012',
    rating: 4.5,
    reviewCount: 189,
    isVerified: true,
    userId: 'user-seller2',
    status: 'active'
  },
  {
    id: 'seller-homecomfort',
    name: 'Home Comfort',
    slug: 'home-comfort',
    description: 'Quality home furnishings',
    businessEmail: 'info@homecomfort.ma',
    businessPhone: '+212-522-345678',
    rating: 4.8,
    reviewCount: 156,
    isVerified: true,
    userId: 'user-seller3',
    status: 'active'
  }
];

const products = [
  // Electronics
  {
    id: 'prod-iphone-15',
    sku: 'TECH-001',
    title: 'iPhone 15 Pro Max 256GB',
    slug: 'iphone-15-pro-max-256gb',
    description: 'Latest iPhone with advanced features',
    brand: 'Apple',
    price: 14999,
    originalPrice: 15999,
    discount: 6.25,
    stock: 25,
    rating: 4.8,
    reviewCount: 45,
    categoryId: 'cat-electronics',
    sellerId: 'seller-techmart',
    isActive: true,
    isFeatured: true,
    imageUrls: ['https://picsum.photos/seed/iphone15/600/400'],
    tags: ['smartphone', 'apple', 'premium'],
    minOrderQuantity: 1,
    maxOrderQuantity: 3
  },
  {
    id: 'prod-samsung-tv',
    sku: 'TECH-002',
    title: 'Samsung 55" 4K Smart TV',
    slug: 'samsung-55-4k-smart-tv',
    description: 'Crystal clear 4K display',
    brand: 'Samsung',
    price: 6499,
    originalPrice: 7499,
    discount: 13.33,
    stock: 15,
    rating: 4.6,
    reviewCount: 32,
    categoryId: 'cat-electronics',
    sellerId: 'seller-techmart',
    isActive: true,
    imageUrls: ['https://picsum.photos/seed/samsungtv/600/400'],
    tags: ['tv', 'samsung', '4k']
  },
  {
    id: 'prod-laptop-dell',
    sku: 'TECH-003',
    title: 'Dell XPS 13 Laptop',
    slug: 'dell-xps-13-laptop',
    description: 'Powerful ultrabook for professionals',
    brand: 'Dell',
    price: 12999,
    stock: 8,
    rating: 4.7,
    reviewCount: 28,
    categoryId: 'cat-electronics',
    sellerId: 'seller-techmart',
    isActive: true,
    imageUrls: ['https://picsum.photos/seed/dellxps/600/400'],
    tags: ['laptop', 'dell', 'professional']
  },
  // Fashion
  {
    id: 'prod-leather-jacket',
    sku: 'FASH-001',
    title: 'Premium Leather Jacket',
    slug: 'premium-leather-jacket',
    description: 'Genuine leather, stylish design',
    brand: 'Zara',
    price: 1299,
    originalPrice: 1699,
    discount: 23.54,
    stock: 30,
    rating: 4.5,
    reviewCount: 67,
    categoryId: 'cat-fashion',
    sellerId: 'seller-fashionhub',
    isActive: true,
    isFeatured: true,
    imageUrls: ['https://picsum.photos/seed/jacket/600/400'],
    tags: ['jacket', 'leather', 'fashion']
  },
  {
    id: 'prod-sneakers',
    sku: 'FASH-002',
    title: 'Nike Air Max Sneakers',
    slug: 'nike-air-max-sneakers',
    description: 'Comfortable sports shoes',
    brand: 'Nike',
    price: 899,
    stock: 50,
    rating: 4.7,
    reviewCount: 89,
    categoryId: 'cat-fashion',
    sellerId: 'seller-fashionhub',
    isActive: true,
    imageUrls: ['https://picsum.photos/seed/nike/600/400'],
    tags: ['shoes', 'nike', 'sports']
  },
  // Home & Living
  {
    id: 'prod-sofa',
    sku: 'HOME-001',
    title: 'Modern 3-Seater Sofa',
    slug: 'modern-3-seater-sofa',
    description: 'Comfortable fabric sofa',
    brand: 'IKEA',
    price: 4999,
    originalPrice: 5999,
    discount: 16.67,
    stock: 12,
    rating: 4.6,
    reviewCount: 34,
    categoryId: 'cat-home',
    sellerId: 'seller-homecomfort',
    isActive: true,
    imageUrls: ['https://picsum.photos/seed/sofa/600/400'],
    tags: ['furniture', 'sofa', 'living-room']
  }
];

const users = [
  {
    id: 'user-buyer1',
    cognitoId: 'cognito-buyer-1',
    email: 'buyer@rassooq.com',
    name: 'Ahmed El Fassi',
    role: 'buyer',
    phone: '+212-600-111222',
    isPlusSubscriber: true,
    plusSubscriptionExpiry: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
    language: 'ar',
    totalOrders: 12,
    joinedAt: new Date(Date.now() - 180 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 'user-seller1',
    cognitoId: 'cognito-seller-1',
    email: 'seller@rassooq.com',
    name: 'Fatima Zahra',
    role: 'seller',
    phone: '+212-600-333444',
    language: 'fr',
    totalOrders: 0,
    joinedAt: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 'user-admin1',
    cognitoId: 'cognito-admin-1',
    email: 'admin@rassooq.com',
    name: 'Youssef Admin',
    role: 'admin',
    phone: '+212-600-555666',
    language: 'en',
    totalOrders: 0,
    joinedAt: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString()
  }
];

const addresses = [
  {
    id: 'addr-1',
    userId: 'user-buyer1',
    type: 'home',
    label: 'Home',
    recipientName: 'Ahmed El Fassi',
    phone: '+212-600-111222',
    street: '45 Rue Mohammed V',
    area: 'Maarif',
    city: 'Casablanca',
    country: 'Morocco',
    postalCode: '20250',
    isDefault: true
  },
  {
    id: 'addr-2',
    userId: 'user-buyer1',
    type: 'work',
    label: 'Office',
    recipientName: 'Ahmed El Fassi',
    phone: '+212-600-111222',
    street: '12 Boulevard Zerktouni',
    area: 'Centre Ville',
    city: 'Casablanca',
    country: 'Morocco',
    postalCode: '20100',
    isDefault: false
  }
];

const promoCodes = [
  {
    id: 'promo-welcome',
    code: 'WELCOME2024',
    description: 'Welcome discount for new users',
    type: 'percentage',
    value: 15,
    minOrderAmount: 500,
    maxDiscountAmount: 200,
    usageLimit: 1000,
    usageCount: 234,
    perUserLimit: 1,
    validFrom: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    validUntil: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString(),
    firstOrderOnly: true,
    isActive: true
  },
  {
    id: 'promo-flash',
    code: 'FLASH50',
    description: 'Flash sale - 50 MAD off',
    type: 'fixed_amount',
    value: 50,
    minOrderAmount: 300,
    usageLimit: 500,
    usageCount: 178,
    validFrom: new Date().toISOString(),
    validUntil: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    isActive: true
  },
  {
    id: 'promo-freeship',
    code: 'FREESHIP',
    description: 'Free shipping on all orders',
    type: 'free_shipping',
    value: 0,
    minOrderAmount: 200,
    usageLimit: null,
    usageCount: 567,
    validFrom: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
    validUntil: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000).toISOString(),
    plusMembersOnly: true,
    isActive: true
  }
];

// ========================================
// SEED FUNCTIONS
// ========================================

async function seedCategories() {
  console.log('\n📁 Seeding Categories...');
  const createCategory = `
    mutation CreateCategory($input: CreateCategoryInput!) {
      createCategory(input: $input) {
        id name slug
      }
    }
  `;

  for (const category of categories) {
    try {
      const result = await client.graphql({
        query: createCategory,
        variables: { input: category }
      });
      console.log(`✅ Created category: ${category.name}`);
    } catch (error) {
      if (error.errors?.[0]?.message?.includes('already exists')) {
        console.log(`⏭️  Category ${category.name} already exists`);
      } else {
        console.error(`❌ Error creating ${category.name}:`, error.errors?.[0]?.message || error.message);
      }
    }
  }
}

async function seedSellers() {
  console.log('\n🏪 Seeding Sellers...');
  const createSeller = `
    mutation CreateSeller($input: CreateSellerInput!) {
      createSeller(input: $input) {
        id name slug
      }
    }
  `;

  for (const seller of sellers) {
    try {
      const result = await client.graphql({
        query: createSeller,
        variables: { input: seller }
      });
      console.log(`✅ Created seller: ${seller.name}`);
    } catch (error) {
      if (error.errors?.[0]?.message?.includes('already exists')) {
        console.log(`⏭️  Seller ${seller.name} already exists`);
      } else {
        console.error(`❌ Error creating ${seller.name}:`, error.errors?.[0]?.message || error.message);
      }
    }
  }
}

async function seedProducts() {
  console.log('\n📦 Seeding Products...');
  const createProduct = `
    mutation CreateProduct($input: CreateProductInput!) {
      createProduct(input: $input) {
        id title sku
      }
    }
  `;

  for (const product of products) {
    try {
      const productInput = {
        ...product,
        searchTitle: product.title.toLowerCase()
      };

      const result = await client.graphql({
        query: createProduct,
        variables: { input: productInput }
      });
      console.log(`✅ Created product: ${product.title}`);
    } catch (error) {
      if (error.errors?.[0]?.message?.includes('already exists')) {
        console.log(`⏭️  Product ${product.title} already exists`);
      } else {
        console.error(`❌ Error creating ${product.title}:`, error.errors?.[0]?.message || error.message);
      }
    }
  }
}

async function seedPromoCodes() {
  console.log('\n🎟️  Seeding Promo Codes...');
  const createPromoCode = `
    mutation CreatePromoCode($input: CreatePromoCodeInput!) {
      createPromoCode(input: $input) {
        id code
      }
    }
  `;

  for (const promo of promoCodes) {
    try {
      const result = await client.graphql({
        query: createPromoCode,
        variables: { input: promo }
      });
      console.log(`✅ Created promo code: ${promo.code}`);
    } catch (error) {
      if (error.errors?.[0]?.message?.includes('already exists')) {
        console.log(`⏭️  Promo code ${promo.code} already exists`);
      } else {
        console.error(`❌ Error creating ${promo.code}:`, error.errors?.[0]?.message || error.message);
      }
    }
  }
}

// ========================================
// MAIN SEEDER
// ========================================

async function seedDatabase() {
  console.log('🌱 Starting Rassooq Database Seeding...\n');
  console.log('=' + '='.repeat(50));

  try {
    await seedCategories();
    await seedSellers();
    await seedProducts();
    await seedPromoCodes();

    console.log('\n' + '=' + '='.repeat(50));
    console.log('\n✨ Database seeding completed successfully!');
    console.log('\n📊 Summary:');
    console.log(`   • ${categories.length} categories`);
    console.log(`   • ${sellers.length} sellers`);
    console.log(`   • ${products.length} products`);
    console.log(`   • ${promoCodes.length} promo codes`);
    console.log('\n🎉 Your Rassooq marketplace is ready for testing!\n');

  } catch (error) {
    console.error('\n❌ Seeding failed:', error);
    process.exit(1);
  }
}

// Run seeder
seedDatabase();
