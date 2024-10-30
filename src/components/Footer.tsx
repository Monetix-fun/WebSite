import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.products')}</h3>
            {/* 产品列表 */}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.developers')}</h3>
            {/* 开发者资源列表 */}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.governance')}</h3>
            {/* 治理相关列表 */}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.community')}</h3>
            {/* 社区链接列表 */}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400">
              © 2024 {t('footer.rights')}
            </div>
            <div className="mt-4 md:mt-0">
              <form className="flex space-x-2">
                <input
                  type="email"
                  placeholder={t('footer.subscribe.placeholder')}
                  className="bg-gray-900 px-4 py-2 rounded-lg"
                />
                <button className="bg-blue-600 px-4 py-2 rounded-lg">
                  {t('footer.subscribe.button')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 