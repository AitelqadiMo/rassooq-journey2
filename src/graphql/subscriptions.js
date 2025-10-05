/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
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
export const onCreateSeller = /* GraphQL */ `
  subscription OnCreateSeller($filter: ModelSubscriptionSellerFilterInput) {
    onCreateSeller(filter: $filter) {
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
export const onUpdateSeller = /* GraphQL */ `
  subscription OnUpdateSeller($filter: ModelSubscriptionSellerFilterInput) {
    onUpdateSeller(filter: $filter) {
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
export const onDeleteSeller = /* GraphQL */ `
  subscription OnDeleteSeller($filter: ModelSubscriptionSellerFilterInput) {
    onDeleteSeller(filter: $filter) {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress(
    $filter: ModelSubscriptionAddressFilterInput
    $owner: String
  ) {
    onCreateAddress(filter: $filter, owner: $owner) {
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
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress(
    $filter: ModelSubscriptionAddressFilterInput
    $owner: String
  ) {
    onUpdateAddress(filter: $filter, owner: $owner) {
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
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress(
    $filter: ModelSubscriptionAddressFilterInput
    $owner: String
  ) {
    onDeleteAddress(filter: $filter, owner: $owner) {
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
export const onCreateCart = /* GraphQL */ `
  subscription OnCreateCart(
    $filter: ModelSubscriptionCartFilterInput
    $owner: String
  ) {
    onCreateCart(filter: $filter, owner: $owner) {
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
export const onUpdateCart = /* GraphQL */ `
  subscription OnUpdateCart(
    $filter: ModelSubscriptionCartFilterInput
    $owner: String
  ) {
    onUpdateCart(filter: $filter, owner: $owner) {
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
export const onDeleteCart = /* GraphQL */ `
  subscription OnDeleteCart(
    $filter: ModelSubscriptionCartFilterInput
    $owner: String
  ) {
    onDeleteCart(filter: $filter, owner: $owner) {
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
export const onCreateCartItem = /* GraphQL */ `
  subscription OnCreateCartItem(
    $filter: ModelSubscriptionCartItemFilterInput
    $owner: String
  ) {
    onCreateCartItem(filter: $filter, owner: $owner) {
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
export const onUpdateCartItem = /* GraphQL */ `
  subscription OnUpdateCartItem(
    $filter: ModelSubscriptionCartItemFilterInput
    $owner: String
  ) {
    onUpdateCartItem(filter: $filter, owner: $owner) {
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
export const onDeleteCartItem = /* GraphQL */ `
  subscription OnDeleteCartItem(
    $filter: ModelSubscriptionCartItemFilterInput
    $owner: String
  ) {
    onDeleteCartItem(filter: $filter, owner: $owner) {
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
export const onCreateWishlistItem = /* GraphQL */ `
  subscription OnCreateWishlistItem(
    $filter: ModelSubscriptionWishlistItemFilterInput
    $owner: String
  ) {
    onCreateWishlistItem(filter: $filter, owner: $owner) {
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
export const onUpdateWishlistItem = /* GraphQL */ `
  subscription OnUpdateWishlistItem(
    $filter: ModelSubscriptionWishlistItemFilterInput
    $owner: String
  ) {
    onUpdateWishlistItem(filter: $filter, owner: $owner) {
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
export const onDeleteWishlistItem = /* GraphQL */ `
  subscription OnDeleteWishlistItem(
    $filter: ModelSubscriptionWishlistItemFilterInput
    $owner: String
  ) {
    onDeleteWishlistItem(filter: $filter, owner: $owner) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder(
    $filter: ModelSubscriptionOrderFilterInput
    $owner: String
  ) {
    onCreateOrder(filter: $filter, owner: $owner) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder(
    $filter: ModelSubscriptionOrderFilterInput
    $owner: String
  ) {
    onUpdateOrder(filter: $filter, owner: $owner) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder(
    $filter: ModelSubscriptionOrderFilterInput
    $owner: String
  ) {
    onDeleteOrder(filter: $filter, owner: $owner) {
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
export const onCreateOrderItem = /* GraphQL */ `
  subscription OnCreateOrderItem(
    $filter: ModelSubscriptionOrderItemFilterInput
    $owner: String
  ) {
    onCreateOrderItem(filter: $filter, owner: $owner) {
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
export const onUpdateOrderItem = /* GraphQL */ `
  subscription OnUpdateOrderItem(
    $filter: ModelSubscriptionOrderItemFilterInput
    $owner: String
  ) {
    onUpdateOrderItem(filter: $filter, owner: $owner) {
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
export const onDeleteOrderItem = /* GraphQL */ `
  subscription OnDeleteOrderItem(
    $filter: ModelSubscriptionOrderItemFilterInput
    $owner: String
  ) {
    onDeleteOrderItem(filter: $filter, owner: $owner) {
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
export const onCreateOrderStatusHistory = /* GraphQL */ `
  subscription OnCreateOrderStatusHistory(
    $filter: ModelSubscriptionOrderStatusHistoryFilterInput
    $owner: String
  ) {
    onCreateOrderStatusHistory(filter: $filter, owner: $owner) {
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
export const onUpdateOrderStatusHistory = /* GraphQL */ `
  subscription OnUpdateOrderStatusHistory(
    $filter: ModelSubscriptionOrderStatusHistoryFilterInput
    $owner: String
  ) {
    onUpdateOrderStatusHistory(filter: $filter, owner: $owner) {
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
export const onDeleteOrderStatusHistory = /* GraphQL */ `
  subscription OnDeleteOrderStatusHistory(
    $filter: ModelSubscriptionOrderStatusHistoryFilterInput
    $owner: String
  ) {
    onDeleteOrderStatusHistory(filter: $filter, owner: $owner) {
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
export const onCreatePaymentMethod = /* GraphQL */ `
  subscription OnCreatePaymentMethod(
    $filter: ModelSubscriptionPaymentMethodFilterInput
    $owner: String
  ) {
    onCreatePaymentMethod(filter: $filter, owner: $owner) {
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
export const onUpdatePaymentMethod = /* GraphQL */ `
  subscription OnUpdatePaymentMethod(
    $filter: ModelSubscriptionPaymentMethodFilterInput
    $owner: String
  ) {
    onUpdatePaymentMethod(filter: $filter, owner: $owner) {
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
export const onDeletePaymentMethod = /* GraphQL */ `
  subscription OnDeletePaymentMethod(
    $filter: ModelSubscriptionPaymentMethodFilterInput
    $owner: String
  ) {
    onDeletePaymentMethod(filter: $filter, owner: $owner) {
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
export const onCreateReview = /* GraphQL */ `
  subscription OnCreateReview(
    $filter: ModelSubscriptionReviewFilterInput
    $owner: String
  ) {
    onCreateReview(filter: $filter, owner: $owner) {
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
export const onUpdateReview = /* GraphQL */ `
  subscription OnUpdateReview(
    $filter: ModelSubscriptionReviewFilterInput
    $owner: String
  ) {
    onUpdateReview(filter: $filter, owner: $owner) {
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
export const onDeleteReview = /* GraphQL */ `
  subscription OnDeleteReview(
    $filter: ModelSubscriptionReviewFilterInput
    $owner: String
  ) {
    onDeleteReview(filter: $filter, owner: $owner) {
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
export const onCreateReturn = /* GraphQL */ `
  subscription OnCreateReturn(
    $filter: ModelSubscriptionReturnFilterInput
    $owner: String
  ) {
    onCreateReturn(filter: $filter, owner: $owner) {
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
export const onUpdateReturn = /* GraphQL */ `
  subscription OnUpdateReturn(
    $filter: ModelSubscriptionReturnFilterInput
    $owner: String
  ) {
    onUpdateReturn(filter: $filter, owner: $owner) {
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
export const onDeleteReturn = /* GraphQL */ `
  subscription OnDeleteReturn(
    $filter: ModelSubscriptionReturnFilterInput
    $owner: String
  ) {
    onDeleteReturn(filter: $filter, owner: $owner) {
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
export const onCreateReturnItem = /* GraphQL */ `
  subscription OnCreateReturnItem(
    $filter: ModelSubscriptionReturnItemFilterInput
    $owner: String
  ) {
    onCreateReturnItem(filter: $filter, owner: $owner) {
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
export const onUpdateReturnItem = /* GraphQL */ `
  subscription OnUpdateReturnItem(
    $filter: ModelSubscriptionReturnItemFilterInput
    $owner: String
  ) {
    onUpdateReturnItem(filter: $filter, owner: $owner) {
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
export const onDeleteReturnItem = /* GraphQL */ `
  subscription OnDeleteReturnItem(
    $filter: ModelSubscriptionReturnItemFilterInput
    $owner: String
  ) {
    onDeleteReturnItem(filter: $filter, owner: $owner) {
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
export const onCreatePromoCode = /* GraphQL */ `
  subscription OnCreatePromoCode(
    $filter: ModelSubscriptionPromoCodeFilterInput
  ) {
    onCreatePromoCode(filter: $filter) {
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
export const onUpdatePromoCode = /* GraphQL */ `
  subscription OnUpdatePromoCode(
    $filter: ModelSubscriptionPromoCodeFilterInput
  ) {
    onUpdatePromoCode(filter: $filter) {
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
export const onDeletePromoCode = /* GraphQL */ `
  subscription OnDeletePromoCode(
    $filter: ModelSubscriptionPromoCodeFilterInput
  ) {
    onDeletePromoCode(filter: $filter) {
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
export const onCreatePromoCodeUsage = /* GraphQL */ `
  subscription OnCreatePromoCodeUsage(
    $filter: ModelSubscriptionPromoCodeUsageFilterInput
    $owner: String
  ) {
    onCreatePromoCodeUsage(filter: $filter, owner: $owner) {
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
export const onUpdatePromoCodeUsage = /* GraphQL */ `
  subscription OnUpdatePromoCodeUsage(
    $filter: ModelSubscriptionPromoCodeUsageFilterInput
    $owner: String
  ) {
    onUpdatePromoCodeUsage(filter: $filter, owner: $owner) {
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
export const onDeletePromoCodeUsage = /* GraphQL */ `
  subscription OnDeletePromoCodeUsage(
    $filter: ModelSubscriptionPromoCodeUsageFilterInput
    $owner: String
  ) {
    onDeletePromoCodeUsage(filter: $filter, owner: $owner) {
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
export const onCreateSellerProfile = /* GraphQL */ `
  subscription OnCreateSellerProfile(
    $filter: ModelSubscriptionSellerProfileFilterInput
  ) {
    onCreateSellerProfile(filter: $filter) {
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
export const onUpdateSellerProfile = /* GraphQL */ `
  subscription OnUpdateSellerProfile(
    $filter: ModelSubscriptionSellerProfileFilterInput
  ) {
    onUpdateSellerProfile(filter: $filter) {
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
export const onDeleteSellerProfile = /* GraphQL */ `
  subscription OnDeleteSellerProfile(
    $filter: ModelSubscriptionSellerProfileFilterInput
  ) {
    onDeleteSellerProfile(filter: $filter) {
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
export const onCreatePayout = /* GraphQL */ `
  subscription OnCreatePayout($filter: ModelSubscriptionPayoutFilterInput) {
    onCreatePayout(filter: $filter) {
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
export const onUpdatePayout = /* GraphQL */ `
  subscription OnUpdatePayout($filter: ModelSubscriptionPayoutFilterInput) {
    onUpdatePayout(filter: $filter) {
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
export const onDeletePayout = /* GraphQL */ `
  subscription OnDeletePayout($filter: ModelSubscriptionPayoutFilterInput) {
    onDeletePayout(filter: $filter) {
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
export const onCreateNotification = /* GraphQL */ `
  subscription OnCreateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
    $owner: String
  ) {
    onCreateNotification(filter: $filter, owner: $owner) {
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
export const onUpdateNotification = /* GraphQL */ `
  subscription OnUpdateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
    $owner: String
  ) {
    onUpdateNotification(filter: $filter, owner: $owner) {
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
export const onDeleteNotification = /* GraphQL */ `
  subscription OnDeleteNotification(
    $filter: ModelSubscriptionNotificationFilterInput
    $owner: String
  ) {
    onDeleteNotification(filter: $filter, owner: $owner) {
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
export const onCreatePlusSubscription = /* GraphQL */ `
  subscription OnCreatePlusSubscription(
    $filter: ModelSubscriptionPlusSubscriptionFilterInput
    $owner: String
  ) {
    onCreatePlusSubscription(filter: $filter, owner: $owner) {
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
export const onUpdatePlusSubscription = /* GraphQL */ `
  subscription OnUpdatePlusSubscription(
    $filter: ModelSubscriptionPlusSubscriptionFilterInput
    $owner: String
  ) {
    onUpdatePlusSubscription(filter: $filter, owner: $owner) {
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
export const onDeletePlusSubscription = /* GraphQL */ `
  subscription OnDeletePlusSubscription(
    $filter: ModelSubscriptionPlusSubscriptionFilterInput
    $owner: String
  ) {
    onDeletePlusSubscription(filter: $filter, owner: $owner) {
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
export const onCreateAdminLog = /* GraphQL */ `
  subscription OnCreateAdminLog($filter: ModelSubscriptionAdminLogFilterInput) {
    onCreateAdminLog(filter: $filter) {
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
export const onUpdateAdminLog = /* GraphQL */ `
  subscription OnUpdateAdminLog($filter: ModelSubscriptionAdminLogFilterInput) {
    onUpdateAdminLog(filter: $filter) {
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
export const onDeleteAdminLog = /* GraphQL */ `
  subscription OnDeleteAdminLog($filter: ModelSubscriptionAdminLogFilterInput) {
    onDeleteAdminLog(filter: $filter) {
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
