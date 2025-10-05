# 🚀 Rassooq Production Deployment Checklist

## Pre-Deployment Status

### ✅ Completed
- [x] Complete GraphQL schema (22 models)
- [x] Authorization rules configured
- [x] Automation scripts created
- [x] Documentation written
- [x] Schema deployed to AWS (in progress)

### ⏳ In Progress
- [ ] Schema deployment to AppSync
- [ ] DynamoDB table creation

### 📋 Pending
- [ ] Cognito user groups setup
- [ ] Test users creation
- [ ] Database seeding
- [ ] Frontend build
- [ ] CloudFront deployment
- [ ] Cache invalidation

---

## Deployment Steps

### Step 1: Wait for Schema Deployment ⏳
**Status**: Currently deploying
**ETA**: 10-15 minutes
**Action**: Monitor with `amplify status`

```bash
# Check deployment status
amplify status

# View CloudFormation progress (optional)
# AWS Console → CloudFormation → amplify-rassooqjourney2-dev-*
```

**Expected Output:**
```
Current Environment: dev

┌──────────┬─────────────────────────┬───────────┬───────────────────┐
│ Category │ Resource name           │ Operation │ Provider plugin   │
├──────────┼─────────────────────────┼───────────┼───────────────────┤
│ Api      │ rassooqjourney2         │ No Change │ awscloudformation │
│ Auth     │ rassooqjourney258f5624e │ No Change │ awscloudformation │
│ Hosting  │ S3AndCloudFront         │ No Change │ awscloudformation │
└──────────┴─────────────────────────┴───────────┴───────────────────┘
```

---

### Step 2: Set Up Cognito User Groups
**Estimated Time**: 1 minute

```bash
node scripts/setup-cognito-groups.mjs
```

**Expected Output:**
```
🔐 Setting up Cognito User Groups...

✅ Created group: admin
✅ Created group: seller
✅ Created group: buyer

✨ Cognito groups setup complete!
```

---

### Step 3: Create Test Users
**Estimated Time**: 1 minute

```bash
node scripts/create-test-users.mjs
```

**Expected Output:**
```
👥 Creating test users in Cognito...

✅ Created user: admin@rassooq.com
   → Set password
   → Added to admin group

✅ Created user: seller@rassooq.com
   → Set password
   → Added to seller group

✅ Created user: buyer@rassooq.com
   → Set password
   → Added to buyer group

✨ Test users created successfully!
```

---

### Step 4: Seed Database
**Estimated Time**: 2-3 minutes

```bash
node scripts/seed-database.mjs
```

**Expected Output:**
```
🌱 Starting Rassooq Database Seeding...

📁 Seeding Categories...
✅ Created category: Electronics
✅ Created category: Fashion
... (8 categories total)

🏪 Seeding Sellers...
✅ Created seller: TechMart Morocco
... (3 sellers total)

📦 Seeding Products...
✅ Created product: iPhone 15 Pro Max 256GB
... (7 products total)

🎟️  Seeding Promo Codes...
✅ Created promo code: WELCOME2024
... (3 promo codes total)

✨ Database seeding completed successfully!
```

---

### Step 5: Build Frontend
**Estimated Time**: 2-3 minutes

```bash
npm run build
```

**Expected Output:**
```
vite v5.4.19 building for production...
✓ 3881 modules transformed.
dist/index.html                    2.18 kB
dist/assets/style-*.css          104.96 kB
dist/assets/app-*.js             992.71 kB
✓ built in 1m 4s
```

---

### Step 6: Deploy to Amplify Hosting
**Estimated Time**: 3-5 minutes

```bash
amplify publish --yes
```

**Expected Output:**
```
✔ Successfully pulled backend environment dev from the cloud.
- Building resources...
✓ Build succeeded!
- Deploying resources...
✓ All resources are updated in the cloud

Hosting endpoint: https://d31xohey4h3wuv.cloudfront.net
```

---

### Step 7: Invalidate CloudFront Cache
**Estimated Time**: 1-2 minutes

```bash
# Get CloudFront distribution ID
aws cloudfront list-distributions \
  --query "DistributionList.Items[?Comment=='Amplify'].Id" \
  --output text

# Invalidate cache
aws cloudfront create-invalidation \
  --distribution-id E1XRYRQLA5JF66 \
  --paths "/*"
```

**Expected Output:**
```
{
    "Invalidation": {
        "Id": "I...",
        "Status": "InProgress",
        "CreateTime": "2025-10-05T13:00:00.000Z"
    }
}
```

---

## Post-Deployment Verification

### 1. Test API Access

```bash
# Test AppSync API
curl -X POST \
  -H "x-api-key: da2-kskohvb56zcotiycb56xqpvkje" \
  -H "Content-Type: application/json" \
  -d '{"query":"query { listCategories { items { id name } } }"}' \
  https://rrzmp62guvf6tajwvvgcvqayxa.appsync-api.eu-central-1.amazonaws.com/graphql
```

**Expected**: JSON response with categories

### 2. Test Authentication

**URLs to Test:**
- Homepage: `https://d31xohey4h3wuv.cloudfront.net/`
- Admin Login: `https://d31xohey4h3wuv.cloudfront.net/login/admin`
- Seller Login: `https://d31xohey4h3wuv.cloudfront.net/login/seller`
- Buyer Login: `https://d31xohey4h3wuv.cloudfront.net/login`

**Test Credentials:**

**Admin:**
- Email: `admin@rassooq.com`
- Password: `AdminPass123!`

**Seller:**
- Email: `seller@rassooq.com`
- Password: `SellerPass123!`

**Buyer:**
- Email: `buyer@rassooq.com`
- Password: `BuyerPass123!`

### 3. Test Core Features

- [ ] Browse products
- [ ] Add to cart
- [ ] View cart
- [ ] Search products
- [ ] Filter by category
- [ ] View product details
- [ ] Seller dashboard access (seller login)
- [ ] Admin panel access (admin login)

---

## Rollback Plan

If issues occur:

```bash
# Rollback to previous version
amplify env checkout <previous-env>

# Or restore from backup
amplify pull --appId dgz3pf16qs31t --envName dev
```

---

## Monitoring

### CloudWatch Dashboards
- AppSync API metrics
- DynamoDB read/write capacity
- Lambda execution (when added)
- CloudFront requests

### Key Metrics to Watch
- API error rate (should be < 1%)
- DynamoDB throttling (should be 0)
- CloudFront cache hit ratio (target > 80%)
- User registration rate
- Order creation rate

---

## Performance Optimization

### After Launch
1. Enable DynamoDB auto-scaling
2. Set up CloudWatch alarms
3. Configure API caching
4. Implement CDN strategies
5. Add monitoring for slow queries

---

## Security Checklist

- [x] API authentication configured
- [x] Authorization rules in place
- [x] Owner-based access control
- [x] Public read access limited
- [ ] API rate limiting (configure later)
- [ ] DDoS protection via WAF (optional)
- [ ] Rotate API keys regularly

---

## Cost Management

### Expected Monthly Costs (Low Traffic)
- AppSync: ~$20-50
- DynamoDB: ~$10-30
- Lambda: ~$10-25
- S3 + CloudFront: ~$10-20
- **Total: ~$50-125/month**

### Cost Optimization Tips
1. Use DynamoDB on-demand for variable traffic
2. Enable S3 lifecycle policies
3. Optimize image sizes
4. Use CloudFront efficiently
5. Monitor unused resources

---

## Support Resources

### Documentation
- [Amplify Docs](https://docs.amplify.aws/)
- [AppSync Docs](https://docs.aws.amazon.com/appsync/)
- [DynamoDB Best Practices](https://docs.aws.amazon.com/dynamodb/)

### AWS Console Links
- [AppSync Console](https://console.aws.amazon.com/appsync/)
- [DynamoDB Console](https://console.aws.amazon.com/dynamodb/)
- [Cognito Console](https://console.aws.amazon.com/cognito/)
- [CloudFront Console](https://console.aws.amazon.com/cloudfront/)

---

## Emergency Contacts

### AWS Support
- Basic: Community forums
- Developer: 12-24 hour response
- Business: 1-hour response for urgent issues

### Amplify Status
https://status.aws.amazon.com/

---

## Success Criteria

✅ **Go-Live Ready When:**
- [ ] All schema deployed successfully
- [ ] Test users can log in
- [ ] Products display correctly
- [ ] Cart functionality works
- [ ] Orders can be created
- [ ] All test credentials work
- [ ] CloudFront cache invalidated
- [ ] No console errors
- [ ] API response time < 500ms
- [ ] Error rate < 1%

---

**Last Updated**: October 5, 2025
**Environment**: Production (dev)
**Region**: eu-central-1 (Frankfurt)
