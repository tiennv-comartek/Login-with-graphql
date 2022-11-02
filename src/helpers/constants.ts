import i18n from '@/i18n';

export enum UserTypeName {
  Admin = 'ADMIN',
  Staff = 'STAFF',
  SuperAdmin = 'SUPER_ADMIN',
}

export enum OrderViewType {
  TABLE = 'TABLE',
  LIST = 'LIST',
}

export enum DateFormat {
  DISPLAY = 'DD-MM-YYYY HH:mm:ss',
}

export enum StorageKey {
  LANG = 'LANG',
}

export const DateHourMinute = 'HH:mm';
export const DateNotSecond = 'DD-MM-YYYY HH:mm';
export const DateFullNotTime = 'DD.MM.YYYY';
export const DateMonth = 'M';
export const DateYear = 'YYYY';

export const periodicItems = [];

export const SalesItems = [
  {
    key: 'SaleByCate',
    title: i18n.t('Sale By Categories'),
  },
  {
    key: 'SaleByProd',
    title: i18n.t('Sale By Product'),
  },
  {
    key: 'SaleByPaymentType',
    title: i18n.t('Sale By Payment Type'),
  },
  {
    key: 'SaleByCustomer',
    title: i18n.t('Sale By Customer'),
  },
];
export const SettingItems = [
  {
    key: 'Sending',
    title: i18n.t('Sending Setting'),
  },
];

export const CateImageSize = {
  width: 800,
  height: 280,
};

export const BannerImageSize = {
  width: 800,
  height: 133,
};
