import slugify from 'slugify';
import moment from 'moment';
import { DateFormat } from '@helpers/constants';

export function convertTextToLatin(text: string) {
  return slugify(text, {
    replacement: ' ',
    lower: true,
    strict: true,
  });
}

export function nonAccentVietnamese(str: string) {
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  // Some system encode vietnamese combining accent as individual utf-8 characters
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // Huyền sắc hỏi ngã nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ''); // Â, Ê, Ă, Ơ, Ư
  return capitalizeTheFirstLetterOfEachWord(str);
}

export function capitalizeTheFirstLetterOfEachWord(words: string) {
  const separateWord = words.toLowerCase().split(' ');
  for (let i = 0; i < separateWord.length; i++) {
    separateWord[i] = separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1);
  }
  return separateWord.join(' ');
}

export const isJsonString = (str: string) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

export const formatCharacters = (str: string, max: number) => {
  if (str) return str.slice(0, max) + (str.length > max ? '...' : '');
  return str;
};

export function formatDisplayDate(date: string) {
  return moment(date).format(DateFormat.DISPLAY);
}

export function formatDate(date: string, format?: string) {
  return moment(date).format(format ? format : DateFormat.DISPLAY);
}

export function priceCurrency(price: number) {
  return `${price} NOK`;
}

export function isValidJsonString(str: string) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

export const hidePhoneNumber = (string: string) => {
  if (string && string.length > 0) {
    const phone = string.slice(-3);
    return `******${phone}`;
  } else if (string === '') {
    return '';
  } else if (string && string.trim().length === 0) {
    return '';
  } else if (string === null || string === undefined) {
    return '';
  }

  return '***';
};

export const validateEmail = (str: string) => {
  const re = /(^\w.*@\w+\.\w)/;
  return re.test(String(str).toLowerCase());
};

export const checkRegexName = (str: string) => {
  const reg = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
  if (reg.test(str)) {
    return true;
  } else {
    return false;
  }
};

export const dateDefaultFormat = 'YYYY-MM-DD HH:mm:ss ';
export const dateFormat = 'DD/MM/YYYY';
