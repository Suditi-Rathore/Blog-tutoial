export default {
    // user related
    BLOG_UPLOAD: (data) => ({
      type: 'BLOG_UPLOAD',
      message: 'Blog Uploaded Successfully',
      data: data,
    }),

    BLOG_FOUND: (data) => ({
      type: 'BLOG_FOUND',
      message: 'Blog found Successfully',
      data: data,
    }),
  
    USER_LOGGEDIN: (data) => ({
      type: 'USER_LOGGEDIN',
      message: 'User Logged in Successfully',
      data: data,
    }),
  
    USER_LOGGEDOUT: (data) => ({
      type: 'USER_LOGGEDOUT',
      message: 'User Logged out Successfully',
      data: data,
    }),
  
    USER_ADDED: (data) => ({
      type: 'USER_ADDED',
      message: 'User Added Successfully',
      data: data,
    }),
  
    USER_UPDATED: (data) => ({
      type: 'USER_UPDATED',
      message: 'User Updated Successfully',
      data: data,
    }),
  
    USER_DELETED: (data) => ({
      type: 'USER_DELETED',
      message: 'User Deleted Successfully',
      data: data,
    }),
  
    FILE_UPLOADED_SUCCESSFULLY: (data) => ({
      type: 'FILE_UPLOADED_SUCCESSFULLY',
      message: 'File Uploaded Successfully',
      data: data,
    }),
  
    USER_INFO: (data) => ({
      type: 'USER_INFO',
      message: 'User Information fetched sucessfully',
      data: data,
    }),
  
    USER_LIST: (data) => ({
      type: 'USER_LIST',
      message: 'Users fetched sucessfully',
      data: data,
    }),
  
    USER_VALIDATED: (data) => ({
      type: 'USER_VALIDATED',
      message: 'User validated sucessfully',
      data: data,
    }),
  
    // session
    SESSION_VALIDATED: (data) => ({
      type: 'SESSION_VALIDATED',
      message: 'Session Validated Successfully',
      data: data,
    }),
  
    // config
    CONFIG_FETCHED: (data) => ({
      type: 'APP_CONFIGURATION',
      message: 'Configuration fetched sucessfully',
      data: data,
    }),
  
    // search
    SEARCH_RESULTS: (data) => ({
      type: 'SEARCH_RESULTS',
      message: 'Search results fetched sucessfully',
      data: data,
    }),
  
    // package
    MEMBERSHIP_ACTIVITY_LIST: (data) => ({
      type: 'MEMBERSHIP_ACTIVITY_LIST',
      message: 'Membership activities fetched sucessfully',
      data: data,
    }),
    MEMBERSHIP_PACKAGE_LIST: (data) => ({
      type: 'MEMBERSHIP_PACKAGE_LIST',
      message: 'Membership packages fetched sucessfully',
      data: data,
    }),
    MEMBERSHIP_NEW_PACKAGE: (data) => ({
      type: 'MEMBERSHIP_NEW_PACKAGE',
      message: 'New Package created sucessfully',
      data: data,
    }),
    MEMBERSHIP_PACKAGE_DELETED: (data) => ({
      type: 'MEMBERSHIP_PACKAGE_DELETED',
      message: 'New Package deleted sucessfully',
      data: data,
    }),
  
    // POS
    POS_NEW_PRODUCT: (data) => ({
      type: 'POS_NEW_PRODUCT',
      message: 'New Product created sucessfully',
      data: data,
    }),
    POS_PRODUCT_DELETED: (data) => ({
      type: 'POS_PRODUCT_DELETED',
      message: 'New Product deleted sucessfully',
      data: data,
    }),
    POS_BRANDS_LIST: (data) => ({
      type: 'POS_BRANDS_LIST',
      message: 'Brands fetched sucessfully',
      data: data,
    }),
    POS_VARIATIONS_LIST: (data) => ({
      type: 'POS_VARIATIONS_LIST',
      message: 'Variations fetched sucessfully',
      data: data,
    }),
    PRODUCT_LIST: (data) => ({
      type: 'PRODUCT_LIST',
      message: 'Products fetched sucessfully',
      data: data,
    }),
    POS_STOCK_ADDED: (data) => ({
      type: 'POS_STOCK_ADDED',
      message: 'Items added to stock',
      data: data,
    }),
    POS_STOCK_UPDATED: (data) => ({
      type: 'POS_STOCK_UPDATED',
      message: 'Items updated to stock',
      data: data,
    }),
    POS_INVENTORY_LIST: (data) => ({
      type: 'POS_INVENTORY_LIST',
      message: 'Inventory Fetched successfully',
      data: data,
    }),
  POS_STOCK_HISTORY_LIST: (data) => ({
      type: 'POS_STOCK_HISTORY_LIST',
      message: 'Stock History Fetched successfully',
      data: data,
    }),
    POS_STOCK_HISTORY_INFO: (data) => ({
      type: 'POS_STOCK_HISTORY_INFO',
      message: 'Stock History Fetched successfully',
      data: data,
    }),
    POS_STOCK_HISTORY_DELETED: (data) => ({
      type: 'POS_STOCK_HISTORY_DELETED',
      message: 'Stock History Deleted successfully',
      data: data,
    }),
  
    // Payment
    PAYMENT_METHOD_LIST: (data) => ({
      type: 'PAYMENT_METHOD_LIST',
      message: 'Payment methods fetched sucessfully',
      data: data,
    }),
  
    // Expense
    EXPENSE_LIST: (data) => ({
      type: 'EXPENSE_LIST',
      message: 'Expenses fetched sucessfully',
      data: data,
    }),
    EXPENSE_ADDED: (data) => ({
      type: 'EXPENSE_ADDED',
      message: 'Expense Added',
      data: data,
    }),
    EXPENSE_DELETED: (data) => ({
      type: 'EXPENSE_DELETED',
      message: 'Expense Deleted',
      data: data,
    }),
    EXPENSE_UPDATED: (data) => ({
      type: 'EXPENSE_UPDATED',
      message: 'Expense Updated',
      data: data,
    }),
  
    // source
    SOURCE_METHOD_LIST: (data) => ({
      type: 'SOURCE_METHOD_LIST',
      message: 'Source list fetched sucessfully',
      data: data,
    }),
    ENQUIRY_LIST: (data) => ({
      type: 'ENQUIRY_LIST',
      message: 'Enquiries fetched sucessfully',
      data: data,
    }),
    ENQUIRY_INFO: (data) => ({
      type: 'ENQUIRY_INFO',
      message: 'Enquiry information fetched sucessfully',
      data: data,
    }),
    ENQUIRY_ADDED: (data) => ({
      type: 'ENQUIRY_ADDED',
      message: 'Enquiry Added',
      data: data,
    }),
    ENQUIRY_DELETED: (data) => ({
      type: 'ENQUIRY_DELETED',
      message: 'Enquiry Deleted',
      data: data,
    }),
    ENQUIRY_UPDATED: (data) => ({
      type: 'ENQUIRY_UPDATED',
      message: 'Enquiry Updated',
      data: data,
    }),
    ENQUIRY_FOLLOWUP_ADDED: (data) => ({
      type: 'ENQUIRY_FOLLOWUP_ADDED',
      message: 'Enquiry Followup Added',
      data: data,
    }),
  
    BILLING_LIST: (data) => ({
      type: 'BILLING_LIST',
      message: 'Billing list fetched sucessfully',
      data: data,
    }),
    BILLING_INFO: (data) => ({
      type: 'BILLING_INFO',
      message: 'Billing info fetched sucessfully',
      data: data,
    }),
    BILLING_CREATED: (data) => ({
      type: 'BILLING_CREATED',
      message: 'Bill created sucessfully',
      data: data,
    }),
    BILLING_UPDATED: (data) => ({
      type: 'BILLING_UPDATED',
      message: 'Bill updated sucessfully',
      data: data,
    }),
  // client
    CLIENT_LIST_FETCHED: (data) => ({
      type: 'CLIENT_LIST_FETCHED',
      message: 'Client list fetched sucessfully',
      data: data,
    }),
    CLIENT_INFO_FETCHED: (data) => ({
      type: 'CLIENT_INFO_FETCHED',
      message: 'Client info fetched sucessfully',
      data: data,
    }),
    CLIENT_PAYMENT_HISTORY_FETCHED: (data) => ({
      type: 'CLIENT_PAYMENT_HISTORY_FETCHED',
      message: 'Client payment history fetched sucessfully',
      data: data,
    }),
    CLIENT_PENDING_PAYMENT_FETCHED: (data) => ({
      type: 'CLIENT_PENDING_PAYMENT_FETCHED',
      message: 'Client pending payments fetched sucessfully',
      data: data,
    }),
    CLIENT_UPDATED: (data) => ({
      type: 'CLIENT_UPDATED',
      message: 'Client info updated sucessfully',
      data: data,
    }),
    ATTENDANCE_MARKED: (data) => ({
      type: 'ATTENDANCE_MARKED',
      message: 'Attendance marked sucessfully',
      data: data,
    }),
  
    // Vendor
    VENDOR_LIST: (data) => ({
      type: 'VENDOR_LIST',
      message: 'Vendors fetched sucessfully',
      data: data,
    }),
    VENDOR_INFO: (data) => ({
      type: 'VENDOR_INFO',
      message: 'Vendor information fetched sucessfully',
      data: data,
    }),
    VENDOR_ADDED: (data) => ({
      type: 'VENDOR_ADDED',
      message: 'Vendor Added',
      data: data,
    }),
    VENDOR_DELETED: (data) => ({
      type: 'VENDOR_DELETED',
      message: 'Vendor Deleted',
      data: data,
    }),
    VENDOR_UPDATED: (data) => ({
      type: 'VENDOR_UPDATED',
      message: 'Vendor Updated',
      data: data,
    }),
    MEMBERSHIP_NEW_SLOT: (data) => ({
      type: 'MEMBERSHIP_NEW_SLOT',
      message: 'New Slot Created',
      data: data,
    }),
    MEMBERSHIP_SLOT_UPDATED: (data) => ({
      type: 'MEMBERSHIP_SLOT_UPDATED',
      message: 'Slot Updated',
      data: data,
    }),
    MEMBERSHIP_SLOT_INFO: (data) => ({
      type: 'MEMBERSHIP_SLOT_INFO',
      message: 'Slot Information Fetched',
      data: data,
    }),
    MEMBERSHIP_SLOT_LIST: (data) => ({
      type: 'MEMBERSHIP_SLOT_LIST',
      message: 'Slot List Fetched',
      data: data,
    }),
    MEMBERSHIP_SLOT_DELETED: (data) => ({
      type: 'MEMBERSHIP_SLOT_DELETED',
      message: 'Slot Deleted',
      data: data,
    }),
  
    MEMBERSHIP_SESSION_LIST: (data) => ({
      type: 'MEMBERSHIP_SESSION_LIST',
      message: 'Session List Fetched',
      data: data,
    }),
  
    MEMBERSHIP_SESSION_INFO: (data) => ({
      type: 'MEMBERSHIP_SESSION_INFO',
      message: 'Session Information Fetched',
      data: data,
    }),
    MEMBERSHIP_SESSION_UPDATED: (data) => ({
      type: 'MEMBERSHIP_SESSION_UPDATED',
      message: 'Session Updated',
      data: data,
    }),
    DASHBOARD_STATISTICS: (data) => ({
      type: 'DASHBOARD_STATISTICS',
      message: 'Dashboard Statistics Fetched',
      data: data,
    }),
    DASHBOARD_PENDING_ENQUIRIES: (data) => ({
      type: 'DASHBOARD_PENDING_ENQUIRIES',
      message: 'Pending Enquiries Fetched',
      data: data,
    }),
    DASHBOARD_PENDING_PAYMENTS: (data) => ({
      type: 'DASHBOARD_PENDING_PAYMENTS',
      message: 'Pending Payments Fetched',
      data: data,
    }),
    DASHBOARD_UPCOMING_RENEWALS: (data) => ({
      type: 'DASHBOARD_UPCOMING_RENEWALS',
      message: 'Upcoming Renewals Fetched',
      data: data,
    }),
    DASHBOARD_ANNIVERSARIES: (data) => ({
      type: 'DASHBOARD_ANNIVERSARIES',
      message: 'Client Anniversaries Fetched',
      data: data,
    }),
    DASHBOARD_BIRTHDAYS: (data) => ({
      type: 'DASHBOARD_BIRTHDAYS',
      message: 'Client Birthdays Fetched',
      data: data,
    }),
  
    // followup related
    FOLLOWUP_LIST: (data) => ({
      type: 'FOLLOWUP_LIST',
      message: 'Followup List Fetched',
      data: data,
    }),
    FOLLOWUP_INFO: (data) => ({
      type: 'FOLLOWUP_INFO',
      message: 'Followup info Fetched',
      data: data,
    }),
  };
  