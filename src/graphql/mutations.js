/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createOrderItem = /* GraphQL */ `
  mutation CreateOrderItem(
    $input: CreateOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    createOrderItem(input: $input, condition: $condition) {
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
export const deleteOrderItem = /* GraphQL */ `
  mutation DeleteOrderItem(
    $input: DeleteOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    deleteOrderItem(input: $input, condition: $condition) {
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
export const updateOrderStatusHistory = /* GraphQL */ `
  mutation UpdateOrderStatusHistory(
    $input: UpdateOrderStatusHistoryInput!
    $condition: ModelOrderStatusHistoryConditionInput
  ) {
    updateOrderStatusHistory(input: $input, condition: $condition) {
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
export const deleteOrderStatusHistory = /* GraphQL */ `
  mutation DeleteOrderStatusHistory(
    $input: DeleteOrderStatusHistoryInput!
    $condition: ModelOrderStatusHistoryConditionInput
  ) {
    deleteOrderStatusHistory(input: $input, condition: $condition) {
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
export const deleteReturn = /* GraphQL */ `
  mutation DeleteReturn(
    $input: DeleteReturnInput!
    $condition: ModelReturnConditionInput
  ) {
    deleteReturn(input: $input, condition: $condition) {
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
export const createReturnItem = /* GraphQL */ `
  mutation CreateReturnItem(
    $input: CreateReturnItemInput!
    $condition: ModelReturnItemConditionInput
  ) {
    createReturnItem(input: $input, condition: $condition) {
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
export const deleteReturnItem = /* GraphQL */ `
  mutation DeleteReturnItem(
    $input: DeleteReturnItemInput!
    $condition: ModelReturnItemConditionInput
  ) {
    deleteReturnItem(input: $input, condition: $condition) {
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
export const updatePromoCodeUsage = /* GraphQL */ `
  mutation UpdatePromoCodeUsage(
    $input: UpdatePromoCodeUsageInput!
    $condition: ModelPromoCodeUsageConditionInput
  ) {
    updatePromoCodeUsage(input: $input, condition: $condition) {
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
export const deletePromoCodeUsage = /* GraphQL */ `
  mutation DeletePromoCodeUsage(
    $input: DeletePromoCodeUsageInput!
    $condition: ModelPromoCodeUsageConditionInput
  ) {
    deletePromoCodeUsage(input: $input, condition: $condition) {
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
export const updateAdminLog = /* GraphQL */ `
  mutation UpdateAdminLog(
    $input: UpdateAdminLogInput!
    $condition: ModelAdminLogConditionInput
  ) {
    updateAdminLog(input: $input, condition: $condition) {
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
export const deleteAdminLog = /* GraphQL */ `
  mutation DeleteAdminLog(
    $input: DeleteAdminLogInput!
    $condition: ModelAdminLogConditionInput
  ) {
    deleteAdminLog(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
    $input: CreateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    createAddress(input: $input, condition: $condition) {
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
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
    $input: UpdateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    updateAddress(input: $input, condition: $condition) {
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
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
    $input: DeleteAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    deleteAddress(input: $input, condition: $condition) {
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
export const createSeller = /* GraphQL */ `
  mutation CreateSeller(
    $input: CreateSellerInput!
    $condition: ModelSellerConditionInput
  ) {
    createSeller(input: $input, condition: $condition) {
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
export const updateSeller = /* GraphQL */ `
  mutation UpdateSeller(
    $input: UpdateSellerInput!
    $condition: ModelSellerConditionInput
  ) {
    updateSeller(input: $input, condition: $condition) {
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
export const deleteSeller = /* GraphQL */ `
  mutation DeleteSeller(
    $input: DeleteSellerInput!
    $condition: ModelSellerConditionInput
  ) {
    deleteSeller(input: $input, condition: $condition) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createCart = /* GraphQL */ `
  mutation CreateCart(
    $input: CreateCartInput!
    $condition: ModelCartConditionInput
  ) {
    createCart(input: $input, condition: $condition) {
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
export const updateCart = /* GraphQL */ `
  mutation UpdateCart(
    $input: UpdateCartInput!
    $condition: ModelCartConditionInput
  ) {
    updateCart(input: $input, condition: $condition) {
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
export const deleteCart = /* GraphQL */ `
  mutation DeleteCart(
    $input: DeleteCartInput!
    $condition: ModelCartConditionInput
  ) {
    deleteCart(input: $input, condition: $condition) {
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
export const createCartItem = /* GraphQL */ `
  mutation CreateCartItem(
    $input: CreateCartItemInput!
    $condition: ModelCartItemConditionInput
  ) {
    createCartItem(input: $input, condition: $condition) {
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
export const updateCartItem = /* GraphQL */ `
  mutation UpdateCartItem(
    $input: UpdateCartItemInput!
    $condition: ModelCartItemConditionInput
  ) {
    updateCartItem(input: $input, condition: $condition) {
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
export const deleteCartItem = /* GraphQL */ `
  mutation DeleteCartItem(
    $input: DeleteCartItemInput!
    $condition: ModelCartItemConditionInput
  ) {
    deleteCartItem(input: $input, condition: $condition) {
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
export const createWishlistItem = /* GraphQL */ `
  mutation CreateWishlistItem(
    $input: CreateWishlistItemInput!
    $condition: ModelWishlistItemConditionInput
  ) {
    createWishlistItem(input: $input, condition: $condition) {
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
export const updateWishlistItem = /* GraphQL */ `
  mutation UpdateWishlistItem(
    $input: UpdateWishlistItemInput!
    $condition: ModelWishlistItemConditionInput
  ) {
    updateWishlistItem(input: $input, condition: $condition) {
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
export const deleteWishlistItem = /* GraphQL */ `
  mutation DeleteWishlistItem(
    $input: DeleteWishlistItemInput!
    $condition: ModelWishlistItemConditionInput
  ) {
    deleteWishlistItem(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const updateOrderItem = /* GraphQL */ `
  mutation UpdateOrderItem(
    $input: UpdateOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    updateOrderItem(input: $input, condition: $condition) {
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
export const createOrderStatusHistory = /* GraphQL */ `
  mutation CreateOrderStatusHistory(
    $input: CreateOrderStatusHistoryInput!
    $condition: ModelOrderStatusHistoryConditionInput
  ) {
    createOrderStatusHistory(input: $input, condition: $condition) {
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
export const createPaymentMethod = /* GraphQL */ `
  mutation CreatePaymentMethod(
    $input: CreatePaymentMethodInput!
    $condition: ModelPaymentMethodConditionInput
  ) {
    createPaymentMethod(input: $input, condition: $condition) {
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
export const updatePaymentMethod = /* GraphQL */ `
  mutation UpdatePaymentMethod(
    $input: UpdatePaymentMethodInput!
    $condition: ModelPaymentMethodConditionInput
  ) {
    updatePaymentMethod(input: $input, condition: $condition) {
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
export const deletePaymentMethod = /* GraphQL */ `
  mutation DeletePaymentMethod(
    $input: DeletePaymentMethodInput!
    $condition: ModelPaymentMethodConditionInput
  ) {
    deletePaymentMethod(input: $input, condition: $condition) {
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
export const createReview = /* GraphQL */ `
  mutation CreateReview(
    $input: CreateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    createReview(input: $input, condition: $condition) {
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
export const updateReview = /* GraphQL */ `
  mutation UpdateReview(
    $input: UpdateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    updateReview(input: $input, condition: $condition) {
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
export const deleteReview = /* GraphQL */ `
  mutation DeleteReview(
    $input: DeleteReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    deleteReview(input: $input, condition: $condition) {
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
export const createReturn = /* GraphQL */ `
  mutation CreateReturn(
    $input: CreateReturnInput!
    $condition: ModelReturnConditionInput
  ) {
    createReturn(input: $input, condition: $condition) {
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
export const updateReturn = /* GraphQL */ `
  mutation UpdateReturn(
    $input: UpdateReturnInput!
    $condition: ModelReturnConditionInput
  ) {
    updateReturn(input: $input, condition: $condition) {
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
export const updateReturnItem = /* GraphQL */ `
  mutation UpdateReturnItem(
    $input: UpdateReturnItemInput!
    $condition: ModelReturnItemConditionInput
  ) {
    updateReturnItem(input: $input, condition: $condition) {
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
export const createPromoCode = /* GraphQL */ `
  mutation CreatePromoCode(
    $input: CreatePromoCodeInput!
    $condition: ModelPromoCodeConditionInput
  ) {
    createPromoCode(input: $input, condition: $condition) {
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
export const updatePromoCode = /* GraphQL */ `
  mutation UpdatePromoCode(
    $input: UpdatePromoCodeInput!
    $condition: ModelPromoCodeConditionInput
  ) {
    updatePromoCode(input: $input, condition: $condition) {
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
export const deletePromoCode = /* GraphQL */ `
  mutation DeletePromoCode(
    $input: DeletePromoCodeInput!
    $condition: ModelPromoCodeConditionInput
  ) {
    deletePromoCode(input: $input, condition: $condition) {
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
export const createPromoCodeUsage = /* GraphQL */ `
  mutation CreatePromoCodeUsage(
    $input: CreatePromoCodeUsageInput!
    $condition: ModelPromoCodeUsageConditionInput
  ) {
    createPromoCodeUsage(input: $input, condition: $condition) {
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
export const createSellerProfile = /* GraphQL */ `
  mutation CreateSellerProfile(
    $input: CreateSellerProfileInput!
    $condition: ModelSellerProfileConditionInput
  ) {
    createSellerProfile(input: $input, condition: $condition) {
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
export const updateSellerProfile = /* GraphQL */ `
  mutation UpdateSellerProfile(
    $input: UpdateSellerProfileInput!
    $condition: ModelSellerProfileConditionInput
  ) {
    updateSellerProfile(input: $input, condition: $condition) {
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
export const deleteSellerProfile = /* GraphQL */ `
  mutation DeleteSellerProfile(
    $input: DeleteSellerProfileInput!
    $condition: ModelSellerProfileConditionInput
  ) {
    deleteSellerProfile(input: $input, condition: $condition) {
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
export const createPayout = /* GraphQL */ `
  mutation CreatePayout(
    $input: CreatePayoutInput!
    $condition: ModelPayoutConditionInput
  ) {
    createPayout(input: $input, condition: $condition) {
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
export const updatePayout = /* GraphQL */ `
  mutation UpdatePayout(
    $input: UpdatePayoutInput!
    $condition: ModelPayoutConditionInput
  ) {
    updatePayout(input: $input, condition: $condition) {
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
export const deletePayout = /* GraphQL */ `
  mutation DeletePayout(
    $input: DeletePayoutInput!
    $condition: ModelPayoutConditionInput
  ) {
    deletePayout(input: $input, condition: $condition) {
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
export const createNotification = /* GraphQL */ `
  mutation CreateNotification(
    $input: CreateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    createNotification(input: $input, condition: $condition) {
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
export const updateNotification = /* GraphQL */ `
  mutation UpdateNotification(
    $input: UpdateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    updateNotification(input: $input, condition: $condition) {
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
export const deleteNotification = /* GraphQL */ `
  mutation DeleteNotification(
    $input: DeleteNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    deleteNotification(input: $input, condition: $condition) {
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
export const createPlusSubscription = /* GraphQL */ `
  mutation CreatePlusSubscription(
    $input: CreatePlusSubscriptionInput!
    $condition: ModelPlusSubscriptionConditionInput
  ) {
    createPlusSubscription(input: $input, condition: $condition) {
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
export const updatePlusSubscription = /* GraphQL */ `
  mutation UpdatePlusSubscription(
    $input: UpdatePlusSubscriptionInput!
    $condition: ModelPlusSubscriptionConditionInput
  ) {
    updatePlusSubscription(input: $input, condition: $condition) {
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
export const deletePlusSubscription = /* GraphQL */ `
  mutation DeletePlusSubscription(
    $input: DeletePlusSubscriptionInput!
    $condition: ModelPlusSubscriptionConditionInput
  ) {
    deletePlusSubscription(input: $input, condition: $condition) {
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
export const createAdminLog = /* GraphQL */ `
  mutation CreateAdminLog(
    $input: CreateAdminLogInput!
    $condition: ModelAdminLogConditionInput
  ) {
    createAdminLog(input: $input, condition: $condition) {
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
