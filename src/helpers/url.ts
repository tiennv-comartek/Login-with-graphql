export const getUserUrl = (id: string) => `/admin/${id}`;
export const getUserEditUrl = (id: string) => `/admin/edit/${id}`;
export const getListUserUrl = () => `/admin`;
export const getNewUserUrl = () => `/admin/new`;

export const getListRestaurantUrl = () => `/restaurants`;
export const getNewRestaurantUrl = () => `/restaurants/new`;
export const getRestaurantUrl = (id: string) => `/restaurants/${id}`;

export const getListFranchiseUrl = () => `/franchise`;
export const getNewFranchiseUrl = () => `/franchise/new`;
export const getFranchiseUrl = (id: string) => `/franchise/${id}`;

export const getListFoodUrl = () => `/foods`;
export const getNewFoodUrl = () => `/foods/new`;
export const getNewPrinterUrl = () => `/printer/new`;
export const getListPrinterUrl = () => `/printer`;
export const getDetailPrinterUrl = (id: string) => `/printer/${id}`;

export const FOOD_CATEGORY = '/food-category';

export const CREATE_FOOD_CATEGORY = '/food-category/create';
export const editCategory = (id: string) => `/category/edit/${id}`;
export const getDetailUrl = (id: string) => `/category/${id}`;

export const getListPeakHourUrl = () => '/setting-rush-hours';

export const getChangePasswordUrl = () => `/change-password`;

export const getListOderUrl = () => `/order`;
export const getDetailOderUrl = (id: string) => `/order/${id}`;

export const getNewIngredientTemplate = () => '/ingredient-template/new';
export const getListIngredientTemplates = () => `/ingredient-templates`;
export const getDetailIngredientTemplateUrl = (id: string) => `/ingredient-template/${id}`;

export const getViewProductReviewUrl = (id: string) => `/reviews/${id}`;

export const getViewOrderUrl = (id: string) => `/order/${id}`;

// Customers
export const getCustomerEditUrl = (id: string) => `/customers/edit/${id}`;
export const getListCustomerUrl = () => `/customers`;
export const getDetailCustomerUrl = (id: string) => `/customers/${id}`;
export const getNewCustomerUrl = () => `/customers/new`;

// Products
export const getEditProductUrl = (id: string) => `/products/edit/${id}`;

// Coupons
export const editDiscountProgram = (id: string) => `/coupons/edit-programs/${id}`;
export const editCoupon = (id: string) => `/coupons/edit-coupons/${id}`;

// Shops
export const getEditShopUrl = (id: string) => `/shop/edit/${id}`;
