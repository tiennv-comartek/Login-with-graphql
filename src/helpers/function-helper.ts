import moment from 'moment';

export const getImageUrl = (url: string | undefined) => {
  if (!url) return 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Picture_icon_BLACK.svg';
  return `${process.env.REACT_APP_ASSETS_END_POINT}/images/origin/${url}.webp`;
};

export function concatUrl(url: string) {
  return `${process.env.REACT_APP_ASSETS_END_POINT}/${url.replace(/^https?:\/\//, '')}`;
}

export const getServerUrl = (url: string | undefined) => {
  if (!url) return;
  return `${process.env.REACT_APP_ASSETS_END_POINT}/${url}`;
};

export const calcHoursDifference = (startTime: number) => {
  const end = moment();
  const duration = moment.duration(end.diff(startTime));

  if (duration.asSeconds() <= 60) return `${duration.asSeconds().toFixed()}s`;
  if (duration.asMinutes() <= 60) return `${duration.asMinutes().toFixed()}m`;
  if (duration.asHours() <= 24) return `${duration.asHours().toFixed()}h`;
  return `${duration.asDays().toFixed()}d`;
};

export function formatPrice(price: number, showCurrentLocal?: boolean) {
  const currentLocal = 'no-NO';
  const currency = 'NOK';
  if (!!showCurrentLocal) {
    return Intl.NumberFormat(currentLocal, {
      style: 'currency',
      currency,
    }).format(price || 0);
  }
  return Intl.NumberFormat(currentLocal, {
    style: 'currency',
    currency,
  })
    .format(price)
    .replace('kr', '');
}
