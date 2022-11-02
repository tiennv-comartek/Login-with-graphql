import i18n from '@/i18n';
import { NotificationError, NotificationSuccess } from '@commons/components/Notification';
import { getErrorMessage } from '@helpers/error';
import { take } from 'redux-saga/effects';

export function* checkErrorAsync(): any {
  while (true) {
    const action: any = yield take((action: any) => /.+_ERROR/.test(action.type));
    let message = action.payload?.message || i18n.t('error.st_wrong');
    if (action.payload && action.payload.response && action.payload.response.errors?.length) {
      message = getErrorMessage(action.type, action.payload.response.errors[0]?.extensions?.code);
    }
    NotificationError(i18n.t('error.error'), message);
  }
}

export function* checkUpdateSuccessAsync(): any {
  while (true) {
    const action: any = yield take((action: any) => /.+_UPDATED_SUCCESS/.test(action.type));
    NotificationSuccess(i18n.t('success'), action.payload.message || i18n.t('success.success_update'));
  }
}
