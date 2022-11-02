import { DownOutlined } from '@ant-design/icons';
import flagN from '@assets/icon/flags/norway.svg';
import flagE from '@assets/icon/flags/united-kingdom.svg';
import flagV from '@assets/icon/flags/vietnam.svg';
import { Languages } from '@commons/types';
import { typeLanguage } from '@modules/Auth/redux/action-types';
import { Select } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import './style.scss';
const { Option } = Select;

interface Props {
  onChangeLanguage: (values: typeLanguage) => void;
}

export default function ChangeLanguageIcon(props: Props) {
  const { i18n, t } = useTranslation(['topNavigation', 'user']);

  return (
    <div className="change-language-icon pd-0 pd-md-2 mr-md-4">
      <Select
        defaultValue={i18n?.language?.toString()}
        style={{ minWidth: 100 }}
        className="mr-2 select_lang color_text_header"
        onChange={(e) => props.onChangeLanguage(e as any)}
        placeholder={t('select_language')}
        value={i18n?.language?.toString()}
        suffixIcon={<DownOutlined style={{ width: 12 }} />}
      >
        {Languages.map((item) => {
          return (
            <Option key={item.key} value={item.key}>
              <div className="d-flex align-items-center justify-content-start item_select_change_language">
                <img
                  src={item.key === 'en' ? flagE : item.key === 'vi' ? flagV : flagN}
                  alt="flag"
                  className="mr-1 ic_lang"
                />
                {item.name}
              </div>
            </Option>
          );
        })}
      </Select>
    </div>
  );
}
