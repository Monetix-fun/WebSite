import React, { useState, useRef, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const languages = [
    { code: 'zh', label: '中文' },
    { code: 'en', label: 'English' },
    { code: 'ja', label: '日本語' }
  ];

  // 在组件加载时设置初始语言
  useEffect(() => {
    // 优先使用localStorage中存储的语言偏好
    const storedLang = localStorage.getItem('preferred-language');
    // 如果没有存储的语言偏好，则使用浏览器语言
    if (!storedLang) {
      const browserLang = navigator.language.toLowerCase();
      // 检查浏览器语言是否在我们支持的语言列表中
      const supportedLang = languages.find(lang => 
        browserLang.startsWith(lang.code)
      )?.code || 'en';
      
      i18n.changeLanguage(supportedLang);
      localStorage.setItem('preferred-language', supportedLang);
    } else {
      i18n.changeLanguage(storedLang);
    }
  }, []);

  // 处理点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // 同时监听鼠标和触摸事件
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // 仅在非触摸设备上使用悬停效果
  const handleMouseEnter = () => {
    if (window.matchMedia('(hover: hover)').matches) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.matchMedia('(hover: hover)').matches) {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 300);
    }
  };

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    localStorage.setItem('preferred-language', langCode);
    setIsOpen(false);
  };

  const getCurrentLanguageLabel = () => {
    const currentLang = languages.find(lang => lang.code === i18n.language);
    return currentLang?.label || 'English';
  };

  return (
    <div 
      ref={dropdownRef} 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-white p-2 rounded-full hover:bg-gray-700/30 transition-all"
      >
        <Globe className="h-5 w-5" />
        <span className="ml-2 text-base font-normal bg-gradient-to-r from-purple-400 via-pink-300 to-orange-200 bg-clip-text text-transparent">
          {getCurrentLanguageLabel()}
        </span>
      </button>

      {/* 下拉菜单 */}
      {isOpen && (
        <div 
          className="absolute right-0 mt-2 w-32 rounded-lg shadow-lg bg-[#31205c] border border-[#2E4DD4]/30 overflow-hidden z-50"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-[#2E4DD4]/10 transition-all
                ${i18n.language === lang.code 
                  ? 'bg-gradient-to-r from-purple-400 via-pink-300 to-orange-200 bg-clip-text text-transparent font-medium' 
                  : 'text-white'}`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 