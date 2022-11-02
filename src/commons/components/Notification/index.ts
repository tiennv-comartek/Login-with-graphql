import { notification } from 'antd';

export const NotificationInfo = (title: string, message: string) => {
  notification.info({
    message: title,
    description: message,
    placement: 'bottomRight',
  });
};

export const NotificationSuccess = (title: string, message: string) => {
  notification.success({
    message: title,
    description: message,
    placement: 'bottomRight',
  });
};

export const NotificationError = (title: string, message: string) => {
  notification.error({
    message: title,
    description: message,
    placement: 'bottomRight',
  });
};

export const NotificationWarning = (title: string, message: string) => {
  notification.warning({
    message: title,
    description: message,
    placement: 'bottomRight',
  });
};
