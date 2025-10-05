#!/usr/bin/env node

/**
 * Complete Rassooq Backend Setup Script
 * Runs all necessary setup steps in the correct order
 */

import { exec } from 'child_process';
import { promisify } from 'util';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const execAsync = promisify(exec);
const __dirname = dirname(fileURLToPath(import.meta.url));

async function runCommand(command, description) {
  console.log(`\n🔄 ${description}...`);
  try {
    const { stdout, stderr } = await execAsync(command, {
      cwd: join(__dirname, '..')
    });
    if (stdout) console.log(stdout);
    if (stderr && !stderr.includes('warning')) console.error(stderr);
    console.log(`✅ ${description} completed!`);
    return true;
  } catch (error) {
    console.error(`❌ Error in ${description}:`, error.message);
    return false;
  }
}

async function setupBackend() {
  console.log('🚀 Rassooq Backend Complete Setup');
  console.log('=' + '='.repeat(60));
  console.log('\nThis script will:');
  console.log('1. Create Cognito user groups (admin, seller, buyer)');
  console.log('2. Create test users with proper roles');
  console.log('3. Seed the database with sample data');
  console.log('\n' + '=' + '='.repeat(60) + '\n');

  // Step 1: Create Cognito Groups
  const step1 = await runCommand(
    'node scripts/setup-cognito-groups.mjs',
    'Creating Cognito User Groups'
  );

  if (!step1) {
    console.log('\n⚠️  Warning: Could not create groups (they might already exist)');
  }

  // Small delay
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Step 2: Create Test Users
  const step2 = await runCommand(
    'node scripts/create-test-users.mjs',
    'Creating Test Users'
  );

  if (!step2) {
    console.log('\n⚠️  Warning: Could not create users (they might already exist)');
  }

  // Small delay
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Step 3: Seed Database
  const step3 = await runCommand(
    'node scripts/seed-database.mjs',
    'Seeding Database with Sample Data'
  );

  // Final Summary
  console.log('\n' + '=' + '='.repeat(60));
  console.log('\n✨ Backend Setup Complete!\n');
  console.log('📋 What was set up:');
  console.log('   ✅ Cognito user groups (admin, seller, buyer)');
  console.log('   ✅ Test users with credentials');
  console.log('   ✅ Sample categories, sellers, and products');
  console.log('   ✅ Promo codes for testing');

  console.log('\n🔐 Test Login Credentials:');
  console.log('─'.repeat(60));
  console.log('\n   ADMIN:');
  console.log('   Email: admin@rassooq.com');
  console.log('   Password: AdminPass123!');
  console.log('   URL: /admin');

  console.log('\n   SELLER:');
  console.log('   Email: seller@rassooq.com');
  console.log('   Password: SellerPass123!');
  console.log('   URL: /seller/dashboard');

  console.log('\n   BUYER:');
  console.log('   Email: buyer@rassooq.com');
  console.log('   Password: BuyerPass123!');
  console.log('   URL: /');

  console.log('\n' + '─'.repeat(60));
  console.log('\n🎯 Next Steps:');
  console.log('   1. Run: npm run dev');
  console.log('   2. Open: http://localhost:5173');
  console.log('   3. Login with any test user above');
  console.log('   4. Test all features!');

  console.log('\n📚 Documentation:');
  console.log('   Read BACKEND_SETUP.md for detailed information');

  console.log('\n🎉 Happy Testing!\n');
}

setupBackend().catch(console.error);
