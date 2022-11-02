import { DownOutlined } from '@ant-design/icons';
import { typeLanguage } from '@modules/Auth/redux/action-types';
import { Popover } from 'antd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './style.scss';

interface Props {
  onChangeLanguage: (values: typeLanguage) => void;
  language: typeLanguage;
}

export const ChangeLanguageForm: React.FC<Props> = ({ language, onChangeLanguage }) => {
  const { t } = useTranslation(['translation']);
  const [visible, setVisible] = useState<boolean>(false);

  const content = (
    <div className="container_content_language">
      {[typeLanguage.NOR, typeLanguage.EN, typeLanguage.VI].map((lang) => {
        return (
          <p
            className="content_item cursor-pointer"
            onClick={() => {
              selectLang(lang);
            }}
            key={lang}
          >
            {lang === typeLanguage.NOR ? 'Norwegian' : lang === typeLanguage.EN ? 'English' : 'Vietnamese'}
          </p>
        );
      })}
    </div>
  );

  const selectLang = (lang: typeLanguage) => {
    onChangeLanguage(lang);
    setVisible(false);
  };

  const handleVisibleChange = (visible: any) => {
    setVisible(visible);
  };

  return (
    <div className="change-language" style={{ lineHeight: 1 }}>
      <Popover
        content={content}
        trigger="click"
        visible={visible}
        onVisibleChange={handleVisibleChange}
        placement="bottomRight"
      >
        <div className="d-flex justify-content-between align-items-center h-auto cursor-pointer">
          <span className="label">{t('language')}</span>
          <DownOutlined className="mt-1" />
        </div>
      </Popover>
      <span className="label-select-lang" style={{ lineHeight: 1 }}>
        {language === typeLanguage.NOR ? 'Norwegian' : language === typeLanguage.EN ? 'English' : 'Vietnamese'}
      </span>
    </div>
  );
};
