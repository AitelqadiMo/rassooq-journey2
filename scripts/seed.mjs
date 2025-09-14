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
    throw new Error(JSON.stringify(json.errors));
  }
  return json.data;
}

async function main() {
  // Categories
  await gql(`mutation Seed($input: CreateCategoryInput!) { createCategory(input: $input) { id } }`, {
    input: { id: 'cat-electronics', name: 'Electronics', slug: 'electronics' }
  });
  await gql(`mutation Seed($input: CreateCategoryInput!) { createCategory(input: $input) { id } }`, {
    input: { id: 'cat-fashion', name: 'Fashion', slug: 'fashion' }
  });

  // Seller
  await gql(`mutation Seed($input: CreateSellerInput!) { createSeller(input: $input) { id } }`, {
    input: { id: 'sel-techworld', name: 'TechWorld', slug: 'techworld', logoUrl: 'https://picsum.photos/seed/tech/100/100', rating: 4.6 }
  });

  // Products
  await gql(`mutation Seed($input: CreateProductInput!) { createProduct(input: $input) { id } }`, {
    input: {
      id: 'prod-iphone',
      title: 'iPhone 15 Pro',
      description: 'Latest iPhone',
      price: 1199,
      stock: 25,
      imageUrls: ['https://picsum.photos/seed/iphone/800/600'],
      categoryId: 'cat-electronics',
      sellerId: 'sel-techworld'
    }
  });
  await gql(`mutation Seed($input: CreateProductInput!) { createProduct(input: $input) { id } }`, {
    input: {
      id: 'prod-macbook',
      title: 'MacBook Air M3',
      description: 'Thin and light',
      price: 1499,
      stock: 18,
      imageUrls: ['https://picsum.photos/seed/mac/800/600'],
      categoryId: 'cat-electronics',
      sellerId: 'sel-techworld'
    }
  });

  console.log('Seeding complete');
}

main().catch(err => {
  console.error('Seeding failed', err);
  process.exit(1);
});



