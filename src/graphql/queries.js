/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      slug
      description
      imageUrl
      parentId
      isActive
      displayOrder
      products {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        slug
        description
        imageUrl
        parentId
        isActive
        displayOrder
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSeller = /* GraphQL */ `
  query GetSeller($id: ID!) {
    getSeller(id: $id) {
      id
      name
      slug
      email
      phone
      logoUrl
      bannerUrl
      description
      rating
      totalReviews
      isVerified
      isActive
      businessName
      taxId
      businessAddress
      products {
        nextToken
        __typename
      }
      orders {
        nextToken
        __typename
      }
      orderItems {
        nextToken
        __typename
      }
      returns {
        nextToken
        __typename
      }
      sellerProfile {
        id
        sellerId
        bankAccountNumber
        bankName
        bankRoutingNumber
        taxIdNumber
        totalSales
        totalOrders
        averageOrderValue
        returnRate
        responseTime
        fulfillmentRate
        onTimeShippingRate
        autoApproveReturns
        autoRefundReturns
        notificationPreferences
        createdAt
        updatedAt
        __typename
      }
      payouts {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listSellers = /* GraphQL */ `
  query ListSellers(
    $filter: ModelSellerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSellers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        slug
        email
        phone
        logoUrl
        bannerUrl
        description
        rating
        totalReviews
        isVerified
        isActive
        businessName
        taxId
        businessAddress
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      title
      slug
      description
      shortDescription
      price
      compareAtPrice
      cost
      sku
      barcode
      stock
      lowStockThreshold
      imageUrls
      videoUrl
      categoryId
      category {
        id
        name
        slug
        description
        imageUrl
        parentId
        isActive
        displayOrder
        createdAt
        updatedAt
        __typename
      }
      sellerId
      seller {
        id
        name
        slug
        email
        phone
        logoUrl
        bannerUrl
        description
        rating
        totalReviews
        isVerified
        isActive
        businessName
        taxId
        businessAddress
        createdAt
        updatedAt
        owner
        __typename
      }
      brand
      weight
      dimensions
      tags
      metaTitle
      metaDescription
      searchTitle
      isActive
      isFeatured
      isOnSale
      viewCount
      soldCount
      rating
      reviewCount
      cartItems {
        nextToken
        __typename
      }
      wishlistItems {
        nextToken
        __typename
      }
      orderItems {
        nextToken
        __typename
      }
      reviews {
        nextToken
        __typename
      }
      returnItems {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        slug
        description
        shortDescription
        price
        compareAtPrice
        cost
        sku
        barcode
        stock
        lowStockThreshold
        imageUrls
        videoUrl
        categoryId
        sellerId
        brand
        weight
        dimensions
        tags
        metaTitle
        metaDescription
        searchTitle
        isActive
        isFeatured
        isOnSale
        viewCount
        soldCount
        rating
        reviewCount
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const categoryBySlug = /* GraphQL */ `
  query CategoryBySlug(
    $slug: String!
    $sortDirection: ModelSortDirection
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    categoryBySlug(
      slug: $slug
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        slug
        description
        imageUrl
        parentId
        isActive
        displayOrder
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const sellerBySlug = /* GraphQL */ `
  query SellerBySlug(
    $slug: String!
    $sortDirection: ModelSortDirection
    $filter: ModelSellerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sellerBySlug(
      slug: $slug
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        slug
        email
        phone
        logoUrl
        bannerUrl
        description
        rating
        totalReviews
        isVerified
        isActive
        businessName
        taxId
        businessAddress
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const productBySlug = /* GraphQL */ `
  query ProductBySlug(
    $slug: String!
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productBySlug(
      slug: $slug
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        slug
        description
        shortDescription
        price
        compareAtPrice
        cost
        sku
        barcode
        stock
        lowStockThreshold
        imageUrls
        videoUrl
        categoryId
        sellerId
        brand
        weight
        dimensions
        tags
        metaTitle
        metaDescription
        searchTitle
        isActive
        isFeatured
        isOnSale
        viewCount
        soldCount
        rating
        reviewCount
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const productsByCategoryIdAndCreatedAt = /* GraphQL */ `
  query ProductsByCategoryIdAndCreatedAt(
    $categoryId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productsByCategoryIdAndCreatedAt(
      categoryId: $categoryId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        slug
        description
        shortDescription
        price
        compareAtPrice
        cost
        sku
        barcode
        stock
        lowStockThreshold
        imageUrls
        videoUrl
        categoryId
        sellerId
        brand
        weight
        dimensions
        tags
        metaTitle
        metaDescription
        searchTitle
        isActive
        isFeatured
        isOnSale
        viewCount
        soldCount
        rating
        reviewCount
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const productsBySellerIdAndCreatedAt = /* GraphQL */ `
  query ProductsBySellerIdAndCreatedAt(
    $sellerId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productsBySellerIdAndCreatedAt(
      sellerId: $sellerId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        slug
        description
        shortDescription
        price
        compareAtPrice
        cost
        sku
        barcode
        stock
        lowStockThreshold
        imageUrls
        videoUrl
        categoryId
        sellerId
        brand
        weight
        dimensions
        tags
        metaTitle
        metaDescription
        searchTitle
        isActive
        isFeatured
        isOnSale
        viewCount
        soldCount
        rating
        reviewCount
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const searchProducts = /* GraphQL */ `
  query SearchProducts(
    $searchTitle: String!
    $title: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    searchProducts(
      searchTitle: $searchTitle
      title: $title
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        slug
        description
        shortDescription
        price
        compareAtPrice
        cost
        sku
        barcode
        stock
        lowStockThreshold
        imageUrls
        videoUrl
        categoryId
        sellerId
        brand
        weight
        dimensions
        tags
        metaTitle
        metaDescription
        searchTitle
        isActive
        isFeatured
        isOnSale
        viewCount
        soldCount
        rating
        reviewCount
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      cognitoId
      email
      name
      phone
      role
      isActive
      isPlusMember
      profilePictureUrl
      addresses {
        nextToken
        __typename
      }
      cart {
        id
        userId
        createdAt
        updatedAt
        owner
        __typename
      }
      wishlistItems {
        nextToken
        __typename
      }
      orders {
        nextToken
        __typename
      }
      reviews {
        nextToken
        __typename
      }
      returns {
        nextToken
        __typename
      }
      notifications {
        nextToken
        __typename
      }
      paymentMethods {
        nextToken
        __typename
      }
      promoCodeUsages {
        nextToken
        __typename
      }
      plusSubscription {
        id
        userId
        status
        startDate
        endDate
        price
        billingCycle
        nextBillingDate
        stripeSubscriptionId
        stripeCustomerId
        cancelAtPeriodEnd
        canceledAt
        cancellationReason
        freeShippingUsed
        earlyAccessUsed
        exclusiveDealsUsed
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cognitoId
        email
        name
        phone
        role
        isActive
        isPlusMember
        profilePictureUrl
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const userByCognitoId = /* GraphQL */ `
  query UserByCognitoId(
    $cognitoId: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByCognitoId(
      cognitoId: $cognitoId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cognitoId
        email
        name
        phone
        role
        isActive
        isPlusMember
        profilePictureUrl
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
    getAddress(id: $id) {
      id
      userId
      user {
        id
        cognitoId
        email
        name
        phone
        role
        isActive
        isPlusMember
        profilePictureUrl
        createdAt
        updatedAt
        owner
        __typename
      }
      label
      fullName
      addressLine1
      addressLine2
      city
      state
      postalCode
      country
      phone
      isDefault
      shippingOrders {
        nextToken
        __typename
      }
      billingPaymentMethods {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listAddresses = /* GraphQL */ `
  query ListAddresses(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddresses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        label
        fullName
        addressLine1
        addressLine2
        city
        state
        postalCode
        country
        phone
        isDefault
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const addressesByUserIdAndCreatedAt = /* GraphQL */ `
  query AddressesByUserIdAndCreatedAt(
    $userId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    addressesByUserIdAndCreatedAt(
      userId: $userId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        label
        fullName
        addressLine1
        addressLine2
        city
        state
        postalCode
        country
        phone
        isDefault
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCart = /* GraphQL */ `
  query GetCart($id: ID!) {
    getCart(id: $id) {
      id
      userId
      user {
        id
        cognitoId
        email
        name
        phone
        role
        isActive
        isPlusMember
        profilePictureUrl
        createdAt
        updatedAt
        owner
        __typename
      }
      items {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listCarts = /* GraphQL */ `
  query ListCarts(
    $filter: ModelCartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCartItem = /* GraphQL */ `
  query GetCartItem($id: ID!) {
    getCartItem(id: $id) {
      id
      cartId
      cart {
        id
        userId
        createdAt
        updatedAt
        owner
        __typename
      }
      productId
      product {
        id
        title
        slug
        description
        shortDescription
        price
        compareAtPrice
        cost
        sku
        barcode
        stock
        lowStockThreshold
        imageUrls
        videoUrl
        categoryId
        sellerId
        brand
        weight
        dimensions
        tags
        metaTitle
        metaDescription
        searchTitle
        isActive
        isFeatured
        isOnSale
        viewCount
        soldCount
        rating
        reviewCount
        createdAt
        updatedAt
        owner
        __typename
      }
      quantity
      priceAtAdd
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listCartItems = /* GraphQL */ `
  query ListCartItems(
    $filter: ModelCartItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCartItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cartId
        productId
        quantity
        priceAtAdd
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const cartItemsByCartIdAndCreatedAt = /* GraphQL */ `
  query CartItemsByCartIdAndCreatedAt(
    $cartId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCartItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cartItemsByCartIdAndCreatedAt(
      cartId: $cartId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cartId
        productId
        quantity
        priceAtAdd
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const cartItemsByProductIdAndCreatedAt = /* GraphQL */ `
  query CartItemsByProductIdAndCreatedAt(
    $productId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCartItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cartItemsByProductIdAndCreatedAt(
      productId: $productId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cartId
        productId
        quantity
        priceAtAdd
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getWishlistItem = /* GraphQL */ `
  query GetWishlistItem($id: ID!) {
    getWishlistItem(id: $id) {
      id
      userId
      user {
        id
        cognitoId
        email
        name
        phone
        role
        isActive
        isPlusMember
        profilePictureUrl
        createdAt
        updatedAt
        owner
        __typename
      }
      productId
      product {
        id
        title
        slug
        description
        shortDescription
        price
        compareAtPrice
        cost
        sku
        barcode
        stock
        lowStockThreshold
        imageUrls
        videoUrl
        categoryId
        sellerId
        brand
        weight
        dimensions
        tags
        metaTitle
        metaDescription
        searchTitle
        isActive
        isFeatured
        isOnSale
        viewCount
        soldCount
        rating
        reviewCount
        createdAt
        updatedAt
        owner
        __typename
      }
      notes
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listWishlistItems = /* GraphQL */ `
  query ListWishlistItems(
    $filter: ModelWishlistItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWishlistItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        productId
        notes
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const wishlistItemsByUserIdAndCreatedAt = /* GraphQL */ `
  query WishlistItemsByUserIdAndCreatedAt(
    $userId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelWishlistItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    wishlistItemsByUserIdAndCreatedAt(
      userId: $userId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        productId
        notes
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const wishlistItemsByProductIdAndCreatedAt = /* GraphQL */ `
  query WishlistItemsByProductIdAndCreatedAt(
    $productId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelWishlistItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    wishlistItemsByProductIdAndCreatedAt(
      productId: $productId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        productId
        notes
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      orderNumber
      userId
      user {
        id
        cognitoId
        email
        name
        phone
        role
        isActive
        isPlusMember
        profilePictureUrl
        createdAt
        updatedAt
        owner
        __typename
      }
      sellerId
      seller {
        id
        name
        slug
        email
        phone
        logoUrl
        bannerUrl
        description
        rating
        totalReviews
        isVerified
        isActive
        businessName
        taxId
        businessAddress
        createdAt
        updatedAt
        owner
        __typename
      }
      status
      paymentStatus
      subtotal
      tax
      shippingCost
      discount
      total
      shippingAddressId
      shippingAddress {
        id
        userId
        label
        fullName
        addressLine1
        addressLine2
        city
        state
        postalCode
        country
        phone
        isDefault
        createdAt
        updatedAt
        owner
        __typename
      }
      shippingAddressSnapshot
      trackingNumber
      estimatedDeliveryDate
      deliveredAt
      paymentMethodId
      transactionId
      promoCodeId
      customerNotes
      internalNotes
      items {
        nextToken
        __typename
      }
      statusHistory {
        nextToken
        __typename
      }
      returns {
        nextToken
        __typename
      }
      reviews {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        orderNumber
        userId
        sellerId
        status
        paymentStatus
        subtotal
        tax
        shippingCost
        discount
        total
        shippingAddressId
        shippingAddressSnapshot
        trackingNumber
        estimatedDeliveryDate
        deliveredAt
        paymentMethodId
        transactionId
        promoCodeId
        customerNotes
        internalNotes
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const orderByNumber = /* GraphQL */ `
  query OrderByNumber(
    $orderNumber: String!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderByNumber(
      orderNumber: $orderNumber
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderNumber
        userId
        sellerId
        status
        paymentStatus
        subtotal
        tax
        shippingCost
        discount
        total
        shippingAddressId
        shippingAddressSnapshot
        trackingNumber
        estimatedDeliveryDate
        deliveredAt
        paymentMethodId
        transactionId
        promoCodeId
        customerNotes
        internalNotes
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const ordersByUserIdAndCreatedAt = /* GraphQL */ `
  query OrdersByUserIdAndCreatedAt(
    $userId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByUserIdAndCreatedAt(
      userId: $userId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderNumber
        userId
        sellerId
        status
        paymentStatus
        subtotal
        tax
        shippingCost
        discount
        total
        shippingAddressId
        shippingAddressSnapshot
        trackingNumber
        estimatedDeliveryDate
        deliveredAt
        paymentMethodId
        transactionId
        promoCodeId
        customerNotes
        internalNotes
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const ordersBySellerIdAndCreatedAt = /* GraphQL */ `
  query OrdersBySellerIdAndCreatedAt(
    $sellerId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersBySellerIdAndCreatedAt(
      sellerId: $sellerId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderNumber
        userId
        sellerId
        status
        paymentStatus
        subtotal
        tax
        shippingCost
        discount
        total
        shippingAddressId
        shippingAddressSnapshot
        trackingNumber
        estimatedDeliveryDate
        deliveredAt
        paymentMethodId
        transactionId
        promoCodeId
        customerNotes
        internalNotes
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const ordersByShippingAddressIdAndCreatedAt = /* GraphQL */ `
  query OrdersByShippingAddressIdAndCreatedAt(
    $shippingAddressId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByShippingAddressIdAndCreatedAt(
      shippingAddressId: $shippingAddressId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderNumber
        userId
        sellerId
        status
        paymentStatus
        subtotal
        tax
        shippingCost
        discount
        total
        shippingAddressId
        shippingAddressSnapshot
        trackingNumber
        estimatedDeliveryDate
        deliveredAt
        paymentMethodId
        transactionId
        promoCodeId
        customerNotes
        internalNotes
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOrderItem = /* GraphQL */ `
  query GetOrderItem($id: ID!) {
    getOrderItem(id: $id) {
      id
      orderId
      order {
        id
        orderNumber
        userId
        sellerId
        status
        paymentStatus
        subtotal
        tax
        shippingCost
        discount
        total
        shippingAddressId
        shippingAddressSnapshot
        trackingNumber
        estimatedDeliveryDate
        deliveredAt
        paymentMethodId
        transactionId
        promoCodeId
        customerNotes
        internalNotes
        createdAt
        updatedAt
        owner
        __typename
      }
      productId
      product {
        id
        title
        slug
        description
        shortDescription
        price
        compareAtPrice
        cost
        sku
        barcode
        stock
        lowStockThreshold
        imageUrls
        videoUrl
        categoryId
        sellerId
        brand
        weight
        dimensions
        tags
        metaTitle
        metaDescription
        searchTitle
        isActive
        isFeatured
        isOnSale
        viewCount
        soldCount
        rating
        reviewCount
        createdAt
        updatedAt
        owner
        __typename
      }
      sellerId
      seller {
        id
        name
        slug
        email
        phone
        logoUrl
        bannerUrl
        description
        rating
        totalReviews
        isVerified
        isActive
        businessName
        taxId
        businessAddress
        createdAt
        updatedAt
        owner
        __typename
      }
      productSnapshot
      quantity
      pricePerUnit
      subtotal
      tax
      total
      returnItems {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listOrderItems = /* GraphQL */ `
  query ListOrderItems(
    $filter: ModelOrderItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        orderId
        productId
        sellerId
        productSnapshot
        quantity
        pricePerUnit
        subtotal
        tax
        total
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const orderItemsByOrderIdAndCreatedAt = /* GraphQL */ `
  query OrderItemsByOrderIdAndCreatedAt(
    $orderId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOrderItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderItemsByOrderIdAndCreatedAt(
      orderId: $orderId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderId
        productId
        sellerId
        productSnapshot
        quantity
        pricePerUnit
        subtotal
        tax
        total
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const orderItemsByProductIdAndCreatedAt = /* GraphQL */ `
  query OrderItemsByProductIdAndCreatedAt(
    $productId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOrderItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderItemsByProductIdAndCreatedAt(
      productId: $productId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderId
        productId
        sellerId
        productSnapshot
        quantity
        pricePerUnit
        subtotal
        tax
        total
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const orderItemsBySellerIdAndCreatedAt = /* GraphQL */ `
  query OrderItemsBySellerIdAndCreatedAt(
    $sellerId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOrderItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderItemsBySellerIdAndCreatedAt(
      sellerId: $sellerId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderId
        productId
        sellerId
        productSnapshot
        quantity
        pricePerUnit
        subtotal
        tax
        total
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOrderStatusHistory = /* GraphQL */ `
  query GetOrderStatusHistory($id: ID!) {
    getOrderStatusHistory(id: $id) {
      id
      orderId
      order {
        id
        orderNumber
        userId
        sellerId
        status
        paymentStatus
        subtotal
        tax
        shippingCost
        discount
        total
        shippingAddressId
        shippingAddressSnapshot
        trackingNumber
        estimatedDeliveryDate
        deliveredAt
        paymentMethodId
        transactionId
        promoCodeId
        customerNotes
        internalNotes
        createdAt
        updatedAt
        owner
        __typename
      }
      status
      notes
      createdBy
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listOrderStatusHistories = /* GraphQL */ `
  query ListOrderStatusHistories(
    $filter: ModelOrderStatusHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderStatusHistories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderId
        status
        notes
        createdBy
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const orderStatusHistoriesByOrderIdAndCreatedAt = /* GraphQL */ `
  query OrderStatusHistoriesByOrderIdAndCreatedAt(
    $orderId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOrderStatusHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderStatusHistoriesByOrderIdAndCreatedAt(
      orderId: $orderId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderId
        status
        notes
        createdBy
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPaymentMethod = /* GraphQL */ `
  query GetPaymentMethod($id: ID!) {
    getPaymentMethod(id: $id) {
      id
      userId
      user {
        id
        cognitoId
        email
        name
        phone
        role
        isActive
        isPlusMember
        profilePictureUrl
        createdAt
        updatedAt
        owner
        __typename
      }
      type
      isDefault
      cardLast4
      cardBrand
      cardExpMonth
      cardExpYear
      billingAddressId
      billingAddress {
        id
        userId
        label
        fullName
        addressLine1
        addressLine2
        city
        state
        postalCode
        country
        phone
        isDefault
        createdAt
        updatedAt
        owner
        __typename
      }
      stripePaymentMethodId
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listPaymentMethods = /* GraphQL */ `
  query ListPaymentMethods(
    $filter: ModelPaymentMethodFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPaymentMethods(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        type
        isDefault
        cardLast4
        cardBrand
        cardExpMonth
        cardExpYear
        billingAddressId
        stripePaymentMethodId
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const paymentMethodsByUserIdAndCreatedAt = /* GraphQL */ `
  query PaymentMethodsByUserIdAndCreatedAt(
    $userId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPaymentMethodFilterInput
    $limit: Int
    $nextToken: String
  ) {
    paymentMethodsByUserIdAndCreatedAt(
      userId: $userId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        type
        isDefault
        cardLast4
        cardBrand
        cardExpMonth
        cardExpYear
        billingAddressId
        stripePaymentMethodId
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const paymentMethodsByBillingAddressIdAndCreatedAt = /* GraphQL */ `
  query PaymentMethodsByBillingAddressIdAndCreatedAt(
    $billingAddressId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPaymentMethodFilterInput
    $limit: Int
    $nextToken: String
  ) {
    paymentMethodsByBillingAddressIdAndCreatedAt(
      billingAddressId: $billingAddressId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        type
        isDefault
        cardLast4
        cardBrand
        cardExpMonth
        cardExpYear
        billingAddressId
        stripePaymentMethodId
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getReview = /* GraphQL */ `
  query GetReview($id: ID!) {
    getReview(id: $id) {
      id
      productId
      product {
        id
        title
        slug
        description
        shortDescription
        price
        compareAtPrice
        cost
        sku
        barcode
        stock
        lowStockThreshold
        imageUrls
        videoUrl
        categoryId
        sellerId
        brand
        weight
        dimensions
        tags
        metaTitle
        metaDescription
        searchTitle
        isActive
        isFeatured
        isOnSale
        viewCount
        soldCount
        rating
        reviewCount
        createdAt
        updatedAt
        owner
        __typename
      }
      userId
      user {
        id
        cognitoId
        email
        name
        phone
        role
        isActive
        isPlusMember
        profilePictureUrl
        createdAt
        updatedAt
        owner
        __typename
      }
      orderId
      order {
        id
        orderNumber
        userId
        sellerId
        status
        paymentStatus
        subtotal
        tax
        shippingCost
        discount
        total
        shippingAddressId
        shippingAddressSnapshot
        trackingNumber
        estimatedDeliveryDate
        deliveredAt
        paymentMethodId
        transactionId
        promoCodeId
        customerNotes
        internalNotes
        createdAt
        updatedAt
        owner
        __typename
      }
      rating
      title
      comment
      imageUrls
      isVerifiedPurchase
      isApproved
      sellerResponse
      sellerResponseAt
      helpfulCount
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        productId
        userId
        orderId
        rating
        title
        comment
        imageUrls
        isVerifiedPurchase
        isApproved
        sellerResponse
        sellerResponseAt
        helpfulCount
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const reviewsByProductIdAndCreatedAt = /* GraphQL */ `
  query ReviewsByProductIdAndCreatedAt(
    $productId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reviewsByProductIdAndCreatedAt(
      productId: $productId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        productId
        userId
        orderId
        rating
        title
        comment
        imageUrls
        isVerifiedPurchase
        isApproved
        sellerResponse
        sellerResponseAt
        helpfulCount
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const reviewsByUserIdAndCreatedAt = /* GraphQL */ `
  query ReviewsByUserIdAndCreatedAt(
    $userId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reviewsByUserIdAndCreatedAt(
      userId: $userId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        productId
        userId
        orderId
        rating
        title
        comment
        imageUrls
        isVerifiedPurchase
        isApproved
        sellerResponse
        sellerResponseAt
        helpfulCount
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const reviewsByOrderIdAndCreatedAt = /* GraphQL */ `
  query ReviewsByOrderIdAndCreatedAt(
    $orderId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reviewsByOrderIdAndCreatedAt(
      orderId: $orderId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        productId
        userId
        orderId
        rating
        title
        comment
        imageUrls
        isVerifiedPurchase
        isApproved
        sellerResponse
        sellerResponseAt
        helpfulCount
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getReturn = /* GraphQL */ `
  query GetReturn($id: ID!) {
    getReturn(id: $id) {
      id
      returnNumber
      orderId
      order {
        id
        orderNumber
        userId
        sellerId
        status
        paymentStatus
        subtotal
        tax
        shippingCost
        discount
        total
        shippingAddressId
        shippingAddressSnapshot
        trackingNumber
        estimatedDeliveryDate
        deliveredAt
        paymentMethodId
        transactionId
        promoCodeId
        customerNotes
        internalNotes
        createdAt
        updatedAt
        owner
        __typename
      }
      userId
      user {
        id
        cognitoId
        email
        name
        phone
        role
        isActive
        isPlusMember
        profilePictureUrl
        createdAt
        updatedAt
        owner
        __typename
      }
      sellerId
      seller {
        id
        name
        slug
        email
        phone
        logoUrl
        bannerUrl
        description
        rating
        totalReviews
        isVerified
        isActive
        businessName
        taxId
        businessAddress
        createdAt
        updatedAt
        owner
        __typename
      }
      status
      reason
      description
      imageUrls
      refundAmount
      restockingFee
      approvedAt
      approvedBy
      rejectedAt
      rejectedReason
      completedAt
      returnTrackingNumber
      returnShippingCost
      items {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listReturns = /* GraphQL */ `
  query ListReturns(
    $filter: ModelReturnFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReturns(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        returnNumber
        orderId
        userId
        sellerId
        status
        reason
        description
        imageUrls
        refundAmount
        restockingFee
        approvedAt
        approvedBy
        rejectedAt
        rejectedReason
        completedAt
        returnTrackingNumber
        returnShippingCost
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const returnByNumber = /* GraphQL */ `
  query ReturnByNumber(
    $returnNumber: String!
    $sortDirection: ModelSortDirection
    $filter: ModelReturnFilterInput
    $limit: Int
    $nextToken: String
  ) {
    returnByNumber(
      returnNumber: $returnNumber
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        returnNumber
        orderId
        userId
        sellerId
        status
        reason
        description
        imageUrls
        refundAmount
        restockingFee
        approvedAt
        approvedBy
        rejectedAt
        rejectedReason
        completedAt
        returnTrackingNumber
        returnShippingCost
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const returnsByOrderIdAndCreatedAt = /* GraphQL */ `
  query ReturnsByOrderIdAndCreatedAt(
    $orderId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelReturnFilterInput
    $limit: Int
    $nextToken: String
  ) {
    returnsByOrderIdAndCreatedAt(
      orderId: $orderId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        returnNumber
        orderId
        userId
        sellerId
        status
        reason
        description
        imageUrls
        refundAmount
        restockingFee
        approvedAt
        approvedBy
        rejectedAt
        rejectedReason
        completedAt
        returnTrackingNumber
        returnShippingCost
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const returnsByUserIdAndCreatedAt = /* GraphQL */ `
  query ReturnsByUserIdAndCreatedAt(
    $userId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelReturnFilterInput
    $limit: Int
    $nextToken: String
  ) {
    returnsByUserIdAndCreatedAt(
      userId: $userId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        returnNumber
        orderId
        userId
        sellerId
        status
        reason
        description
        imageUrls
        refundAmount
        restockingFee
        approvedAt
        approvedBy
        rejectedAt
        rejectedReason
        completedAt
        returnTrackingNumber
        returnShippingCost
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const returnsBySellerIdAndCreatedAt = /* GraphQL */ `
  query ReturnsBySellerIdAndCreatedAt(
    $sellerId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelReturnFilterInput
    $limit: Int
    $nextToken: String
  ) {
    returnsBySellerIdAndCreatedAt(
      sellerId: $sellerId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        returnNumber
        orderId
        userId
        sellerId
        status
        reason
        description
        imageUrls
        refundAmount
        restockingFee
        approvedAt
        approvedBy
        rejectedAt
        rejectedReason
        completedAt
        returnTrackingNumber
        returnShippingCost
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getReturnItem = /* GraphQL */ `
  query GetReturnItem($id: ID!) {
    getReturnItem(id: $id) {
      id
      returnId
      return {
        id
        returnNumber
        orderId
        userId
        sellerId
        status
        reason
        description
        imageUrls
        refundAmount
        restockingFee
        approvedAt
        approvedBy
        rejectedAt
        rejectedReason
        completedAt
        returnTrackingNumber
        returnShippingCost
        createdAt
        updatedAt
        owner
        __typename
      }
      orderItemId
      orderItem {
        id
        orderId
        productId
        sellerId
        productSnapshot
        quantity
        pricePerUnit
        subtotal
        tax
        total
        createdAt
        updatedAt
        owner
        __typename
      }
      productId
      product {
        id
        title
        slug
        description
        shortDescription
        price
        compareAtPrice
        cost
        sku
        barcode
        stock
        lowStockThreshold
        imageUrls
        videoUrl
        categoryId
        sellerId
        brand
        weight
        dimensions
        tags
        metaTitle
        metaDescription
        searchTitle
        isActive
        isFeatured
        isOnSale
        viewCount
        soldCount
        rating
        reviewCount
        createdAt
        updatedAt
        owner
        __typename
      }
      quantity
      refundAmount
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listReturnItems = /* GraphQL */ `
  query ListReturnItems(
    $filter: ModelReturnItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReturnItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        returnId
        orderItemId
        productId
        quantity
        refundAmount
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const returnItemsByReturnIdAndCreatedAt = /* GraphQL */ `
  query ReturnItemsByReturnIdAndCreatedAt(
    $returnId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelReturnItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    returnItemsByReturnIdAndCreatedAt(
      returnId: $returnId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        returnId
        orderItemId
        productId
        quantity
        refundAmount
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const returnItemsByOrderItemIdAndCreatedAt = /* GraphQL */ `
  query ReturnItemsByOrderItemIdAndCreatedAt(
    $orderItemId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelReturnItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    returnItemsByOrderItemIdAndCreatedAt(
      orderItemId: $orderItemId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        returnId
        orderItemId
        productId
        quantity
        refundAmount
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const returnItemsByProductIdAndCreatedAt = /* GraphQL */ `
  query ReturnItemsByProductIdAndCreatedAt(
    $productId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelReturnItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    returnItemsByProductIdAndCreatedAt(
      productId: $productId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        returnId
        orderItemId
        productId
        quantity
        refundAmount
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPromoCode = /* GraphQL */ `
  query GetPromoCode($id: ID!) {
    getPromoCode(id: $id) {
      id
      code
      description
      discountType
      discountValue
      minPurchaseAmount
      maxDiscountAmount
      usageLimit
      usageLimitPerUser
      validFrom
      validUntil
      isActive
      applicableToCategories
      applicableToProducts
      isPlusMembersOnly
      isFirstOrderOnly
      timesUsed
      usages {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPromoCodes = /* GraphQL */ `
  query ListPromoCodes(
    $filter: ModelPromoCodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPromoCodes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        code
        description
        discountType
        discountValue
        minPurchaseAmount
        maxDiscountAmount
        usageLimit
        usageLimitPerUser
        validFrom
        validUntil
        isActive
        applicableToCategories
        applicableToProducts
        isPlusMembersOnly
        isFirstOrderOnly
        timesUsed
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const promoCodeByCode = /* GraphQL */ `
  query PromoCodeByCode(
    $code: String!
    $sortDirection: ModelSortDirection
    $filter: ModelPromoCodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    promoCodeByCode(
      code: $code
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        code
        description
        discountType
        discountValue
        minPurchaseAmount
        maxDiscountAmount
        usageLimit
        usageLimitPerUser
        validFrom
        validUntil
        isActive
        applicableToCategories
        applicableToProducts
        isPlusMembersOnly
        isFirstOrderOnly
        timesUsed
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPromoCodeUsage = /* GraphQL */ `
  query GetPromoCodeUsage($id: ID!) {
    getPromoCodeUsage(id: $id) {
      id
      promoCodeId
      promoCode {
        id
        code
        description
        discountType
        discountValue
        minPurchaseAmount
        maxDiscountAmount
        usageLimit
        usageLimitPerUser
        validFrom
        validUntil
        isActive
        applicableToCategories
        applicableToProducts
        isPlusMembersOnly
        isFirstOrderOnly
        timesUsed
        createdAt
        updatedAt
        __typename
      }
      userId
      user {
        id
        cognitoId
        email
        name
        phone
        role
        isActive
        isPlusMember
        profilePictureUrl
        createdAt
        updatedAt
        owner
        __typename
      }
      orderId
      discountApplied
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listPromoCodeUsages = /* GraphQL */ `
  query ListPromoCodeUsages(
    $filter: ModelPromoCodeUsageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPromoCodeUsages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        promoCodeId
        userId
        orderId
        discountApplied
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const promoCodeUsagesByPromoCodeIdAndCreatedAt = /* GraphQL */ `
  query PromoCodeUsagesByPromoCodeIdAndCreatedAt(
    $promoCodeId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPromoCodeUsageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    promoCodeUsagesByPromoCodeIdAndCreatedAt(
      promoCodeId: $promoCodeId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        promoCodeId
        userId
        orderId
        discountApplied
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const promoCodeUsagesByUserIdAndCreatedAt = /* GraphQL */ `
  query PromoCodeUsagesByUserIdAndCreatedAt(
    $userId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPromoCodeUsageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    promoCodeUsagesByUserIdAndCreatedAt(
      userId: $userId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        promoCodeId
        userId
        orderId
        discountApplied
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSellerProfile = /* GraphQL */ `
  query GetSellerProfile($id: ID!) {
    getSellerProfile(id: $id) {
      id
      sellerId
      seller {
        id
        name
        slug
        email
        phone
        logoUrl
        bannerUrl
        description
        rating
        totalReviews
        isVerified
        isActive
        businessName
        taxId
        businessAddress
        createdAt
        updatedAt
        owner
        __typename
      }
      bankAccountNumber
      bankName
      bankRoutingNumber
      taxIdNumber
      totalSales
      totalOrders
      averageOrderValue
      returnRate
      responseTime
      fulfillmentRate
      onTimeShippingRate
      autoApproveReturns
      autoRefundReturns
      notificationPreferences
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSellerProfiles = /* GraphQL */ `
  query ListSellerProfiles(
    $filter: ModelSellerProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSellerProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sellerId
        bankAccountNumber
        bankName
        bankRoutingNumber
        taxIdNumber
        totalSales
        totalOrders
        averageOrderValue
        returnRate
        responseTime
        fulfillmentRate
        onTimeShippingRate
        autoApproveReturns
        autoRefundReturns
        notificationPreferences
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPayout = /* GraphQL */ `
  query GetPayout($id: ID!) {
    getPayout(id: $id) {
      id
      sellerId
      seller {
        id
        name
        slug
        email
        phone
        logoUrl
        bannerUrl
        description
        rating
        totalReviews
        isVerified
        isActive
        businessName
        taxId
        businessAddress
        createdAt
        updatedAt
        owner
        __typename
      }
      amount
      currency
      status
      periodStart
      periodEnd
      paymentMethod
      transactionId
      paidAt
      orderCount
      totalSales
      platformFee
      refunds
      adjustments
      notes
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPayouts = /* GraphQL */ `
  query ListPayouts(
    $filter: ModelPayoutFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPayouts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sellerId
        amount
        currency
        status
        periodStart
        periodEnd
        paymentMethod
        transactionId
        paidAt
        orderCount
        totalSales
        platformFee
        refunds
        adjustments
        notes
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const payoutsBySellerIdAndCreatedAt = /* GraphQL */ `
  query PayoutsBySellerIdAndCreatedAt(
    $sellerId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPayoutFilterInput
    $limit: Int
    $nextToken: String
  ) {
    payoutsBySellerIdAndCreatedAt(
      sellerId: $sellerId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sellerId
        amount
        currency
        status
        periodStart
        periodEnd
        paymentMethod
        transactionId
        paidAt
        orderCount
        totalSales
        platformFee
        refunds
        adjustments
        notes
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getNotification = /* GraphQL */ `
  query GetNotification($id: ID!) {
    getNotification(id: $id) {
      id
      userId
      user {
        id
        cognitoId
        email
        name
        phone
        role
        isActive
        isPlusMember
        profilePictureUrl
        createdAt
        updatedAt
        owner
        __typename
      }
      type
      title
      message
      actionUrl
      imageUrl
      isRead
      readAt
      metadata
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listNotifications = /* GraphQL */ `
  query ListNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        type
        title
        message
        actionUrl
        imageUrl
        isRead
        readAt
        metadata
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const notificationsByUserIdAndCreatedAt = /* GraphQL */ `
  query NotificationsByUserIdAndCreatedAt(
    $userId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notificationsByUserIdAndCreatedAt(
      userId: $userId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        type
        title
        message
        actionUrl
        imageUrl
        isRead
        readAt
        metadata
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPlusSubscription = /* GraphQL */ `
  query GetPlusSubscription($id: ID!) {
    getPlusSubscription(id: $id) {
      id
      userId
      user {
        id
        cognitoId
        email
        name
        phone
        role
        isActive
        isPlusMember
        profilePictureUrl
        createdAt
        updatedAt
        owner
        __typename
      }
      status
      startDate
      endDate
      price
      billingCycle
      nextBillingDate
      stripeSubscriptionId
      stripeCustomerId
      cancelAtPeriodEnd
      canceledAt
      cancellationReason
      freeShippingUsed
      earlyAccessUsed
      exclusiveDealsUsed
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listPlusSubscriptions = /* GraphQL */ `
  query ListPlusSubscriptions(
    $filter: ModelPlusSubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlusSubscriptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        status
        startDate
        endDate
        price
        billingCycle
        nextBillingDate
        stripeSubscriptionId
        stripeCustomerId
        cancelAtPeriodEnd
        canceledAt
        cancellationReason
        freeShippingUsed
        earlyAccessUsed
        exclusiveDealsUsed
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAdminLog = /* GraphQL */ `
  query GetAdminLog($id: ID!) {
    getAdminLog(id: $id) {
      id
      adminId
      adminEmail
      actionType
      description
      targetType
      targetId
      metadata
      ipAddress
      userAgent
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAdminLogs = /* GraphQL */ `
  query ListAdminLogs(
    $filter: ModelAdminLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAdminLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        adminId
        adminEmail
        actionType
        description
        targetType
        targetId
        metadata
        ipAddress
        userAgent
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
