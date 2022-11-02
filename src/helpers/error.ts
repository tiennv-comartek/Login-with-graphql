import i18n from '@/i18n';
import {  LOGOUT_ERROR } from '@modules/Auth/redux/action-types';
// import { CREATE_PRODUCT_ERROR, UPDATE_PRODUCT_ERROR } from '@modules/Products/redux/action-types';
// import { CREATE_SHOP_ERROR, UPDATE_SHOP_ERROR } from '@modules/Shop/redux/action-types';
// import { UPDATE_CUSTOMER_ERROR, CREATE_CUSTOMER_ERROR } from '@modules/Customer/redux/action-types';
// import { CREATE_ADMIN_ERROR } from '@modules/Admin/redux/action-types';

export const getErrorMessage = (action: any, code?: string) => {
  switch (action) {
    // case LOGIN_ERROR:
    //   if (code === 'INVALID_PASSWORD') {
    //     return i18n.t('error.invalid-password');
    //     // tslint:disable-next-line:no-else-after-return
    //   } else if (code === 'USER_NOT_FOUND') {
    //     return i18n.t('error.invalid-username');
    //   } else {
    //     return i18n.t('error.login-error');
    //   }

    case LOGOUT_ERROR:
      return i18n.t('error.logout-error');

    // PRODUCT
    // case UPDATE_PRODUCT_ERROR:
    //   if (code === 'PRODUCT_NUMBER_EXISTED') {
    //     return i18n.t('notification:error.product_number_existed');
    //   }
    //   return;

    // case CREATE_PRODUCT_ERROR:
    //   if (code === 'PRODUCT_NUMBER_EXISTED') {
    //     return i18n.t('notification:error.product_number_existed');
    //   }
    //   return;

    // // SHOP
    // case UPDATE_SHOP_ERROR:
    //   if (code === 'DUPLICATED_SHOP_NAME') {
    //     return i18n.t('notification:error.duplicated_shop_name');
    //   }
    //   if (code === 'DUPLICATED_CLIENT_DOMAIN') {
    //     return i18n.t('notification:error.duplicated_client_domain');
    //   }
    //   if (code === 'DUPLICATED_CMS_DOMAIN') {
    //     return i18n.t('notification:error.duplicated_cms_domain');
    //   }
    //   if (code === 'INVALID_VALUE') {
    //     return i18n.t('notification:error.invalid_domain');
    //   }
    //   return;

    // case CREATE_SHOP_ERROR:
    //   if (code === 'DUPLICATED_SHOP_NAME') {
    //     return i18n.t('notification:error.duplicated_shop_name');
    //   }
    //   if (code === 'DUPLICATED_CLIENT_DOMAIN') {
    //     return i18n.t('notification:error.duplicated_client_domain');
    //   }
    //   if (code === 'DUPLICATED_CMS_DOMAIN') {
    //     return i18n.t('notification:error.duplicated_cms_domain');
    //   }
    //   if (code === 'INVALID_VALUE') {
    //     return i18n.t('notification:error.invalid_domain');
    //   }
    //   return;

    // case CREATE_CUSTOMER_ERROR: {
    //   if (code === 'DUPLICATE_EMAIL_OR_PHONE') {
    //     return i18n.t('notification:error.duplicated_name_or_phone');
    //   }
    //   return;
    // }

    // case UPDATE_CUSTOMER_ERROR: {
    //   if (code === 'DUPLICATE_EMAIL_OR_PHONE') {
    //     return i18n.t('notification:error.duplicated_name_or_phone');
    //   }
    //   return;
    // }
    // case CREATE_ADMIN_ERROR: {
    //   if (code === 'DUPLICATE_EMAIL_OR_PHONE') {
    //     return i18n.t('notification:error.duplicated_name_or_phone');
    //   }
    //   return;
    // }

    //DEFAULT
    default:
      return i18n.t('error.st_wrong');
  }
};
