#!/usr/bin/env node

import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import awsconfig from '../src/aws-exports.js';

Amplify.configure(awsconfig);
const client = generateClient();

const createCategory = `mutation CreateCategory($input: CreateCategoryInput!) {
  createCategory(input: $input) { id name slug }
}`;

const createSeller = `mutation CreateSeller($input: CreateSellerInput!) {
  createSeller(input: $input) { id name slug }
}`;

const createProduct = `mutation CreateProduct($input: CreateProductInput!) {
  createProduct(input: $input) { id title slug price }
}`;

async function seed() {
  console.log('🌱 Seeding Rassooq database...\n');

  // 1. Create Categories
  console.log('📁 Creating Categories...');
  const categories = [
    { name: 'Electronics', slug: 'electronics', description: 'Latest gadgets and technology', isActive: true, displayOrder: 1 },
    { name: 'Fashion', slug: 'fashion', description: 'Trending clothes and accessories', isActive: true, displayOrder: 2 },
    { name: 'Home & Living', slug: 'home-living', description: 'Furniture and home decor', isActive: true, displayOrder: 3 },
    { name: 'Beauty & Health', slug: 'beauty-health', description: 'Skincare and wellness', isActive: true, displayOrder: 4 }
  ];

  const createdCats = [];
  for (const cat of categories) {
    try {
      const result = await client.graphql({ query: createCategory, variables: { input: cat } });
      createdCats.push(result.data.createCategory);
      console.log(`  ✅ ${cat.name}`);
    } catch (e) {
      const errMsg = e.errors && e.errors[0] ? e.errors[0].message : 'Unknown error';
      console.log(`  ℹ️  ${cat.name}: ${errMsg}`);
    }
  }

  // 2. Create Sellers
  console.log('\n🏪 Creating Sellers...');
  const sellers = [
    {
      name: 'TechMart Morocco',
      slug: 'techmart-morocco',
      email: 'contact@techmart.ma',
      phone: '+212522123456',
      description: 'Your trusted electronics store',
      rating: 4.7,
      totalReviews: 245,
      isVerified: true,
      isActive: true
    },
    {
      name: 'Fashion Hub',
      slug: 'fashion-hub',
      email: 'hello@fashionhub.ma',
      phone: '+212522789012',
      description: 'Latest fashion trends',
      rating: 4.5,
      totalReviews: 189,
      isVerified: true,
      isActive: true
    }
  ];

  const createdSellers = [];
  for (const seller of sellers) {
    try {
      const result = await client.graphql({ query: createSeller, variables: { input: seller } });
      createdSellers.push(result.data.createSeller);
      console.log(`  ✅ ${seller.name}`);
    } catch (e) {
      const errMsg = e.errors && e.errors[0] ? e.errors[0].message : 'Unknown error';
      console.log(`  ℹ️  ${seller.name}: ${errMsg}`);
    }
  }

  console.log('\n✨ Database seeding completed!\n');
  console.log(`📊 Summary:`);
  console.log(`   • ${createdCats.length} categories created`);
  console.log(`   • ${createdSellers.length} sellers created`);
  console.log('\n🎉 Rassooq marketplace is ready!\n');
}

seed().catch(console.error);
