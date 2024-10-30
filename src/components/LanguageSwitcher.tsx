import React from 'react';
import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'zh' ? 'en' : 'zh';
    i18n.changeLanguage(newLang);
    // 可选：保存用户语言选择到 localStorage
    localStorage.setItem('preferred-language', newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center text-white p-2 rounded-full hover:bg-gray-800 transition-all"
    >
      <Globe className="h-5 w-5" />
      <span className="ml-2">{i18n.language === 'zh' ? 'EN' : 'ZH'}</span>
    </button>
  );
} 