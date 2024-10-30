import React from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            {/* <a href="/" className="flex items-center">
              <span className="text-white text-xl font-bold">Monetix</span>
            </a> */}
            <div className="flex-shrink-0">
              <span className="text-blue-500 text-2xl font-bold">Monetix</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-300 hover:text-white">{t('nav.home')}</a>
            <a href="/trade" className="text-gray-300 hover:text-white">{t('nav.trade')}</a>
            <a href="/stake" className="text-gray-300 hover:text-white">{t('nav.stake')}</a>
            <a href="/docs" className="text-gray-300 hover:text-white">{t('nav.docs')}</a>
          </div>

          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            {/* <button className="bg-blue-600 px-4 py-2 rounded-full">
              {t('wallet.connect')}
            </button> */}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Products</a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Developers</a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Governance</a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Resources</a>
          </div>
        </div>
      )}
    </nav>
  );
}