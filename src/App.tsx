import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import { TermsModal } from './components/TermsModal';
import { useTranslation } from 'react-i18next';
import { FaTelegram, FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { motion } from 'framer-motion';

// 添加一个渐入动画的容器组件
const FadeInWhenVisible = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const [showTerms, setShowTerms] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const hasAcceptedTerms = localStorage.getItem('termsAccepted');
    if (!hasAcceptedTerms) {
      setShowTerms(true);
    }
  }, []);

  return (
    <div className="min-h-screen text-white">
      <Navbar />
      
      {/* 上半部分 - 较浅的紫色背景 */}
      <div className="bg-[#251746]">
        <div className="container mx-auto px-4 py-20 max-w-[960px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-medium mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                {t('home.title')}
              </h1>
              <p className="text-gray-300 text-base mb-12 leading-relaxed">
                {t('home.description')}
              </p>
            </div>
            
            <div className="lg:w-auto flex justify-center">
              <img 
                src="/assets/images/platforminterface.png" 
                alt="Platform Interface" 
                className="shadow-2xl max-w-[500px] max-h-[600px] object-contain w-full h-auto rounded-[5px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 下半部分 - 更深的紫色背景 */}
      <div className="bg-[#2a1954]">
        <div className="container mx-auto px-4 py-20 max-w-[960px]">
          <h2 className="text-4xl font-medium mb-16 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            {t('home.overview.title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-lg font-normal mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                {t('home.overview.what.title')}
              </h3>
              <p className="text-gray-300">
                {t('home.overview.what.description')}
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-normal mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                {t('home.overview.benefits.title')}
              </h3>
              <p className="text-gray-300">
                {t('home.overview.benefits.description')}
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-normal mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                {t('home.overview.applications.title')}
              </h3>
              <p className="text-gray-300">
                {t('home.overview.applications.description')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features and Benefits 部分 */}
      <div className="bg-[#251746] py-20">
        <div className="container mx-auto px-4 max-w-[960px]">
          <FadeInWhenVisible>
            <h2 className="text-4xl font-medium mb-16 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              {t('home.features.title')}
            </h2>
          </FadeInWhenVisible>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 去中心化交易 */}
            <FadeInWhenVisible>
              <div>
                <img src="/assets/images/decentralized-trading.png" alt="" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-lg font-normal mb-2">
                  {t('home.features.decentralized.title')}
                </h3>
                <p className="text-gray-300">{t('home.features.decentralized.description')}</p>
              </div>
            </FadeInWhenVisible>

            {/* 多资产支持 */}
            <FadeInWhenVisible>
              <div>
                <img src="/assets/images/multi-asset.png" alt="" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-lg font-normal mb-2">
                  {t('home.features.multiAsset.title')}
                </h3>
                <p className="text-gray-300">{t('home.features.multiAsset.description')}</p>
              </div>
            </FadeInWhenVisible>

            {/* 链上透明度 */}
            <FadeInWhenVisible>
              <div>
                <img src="/assets/images/transparency.png" alt="" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-lg font-normal mb-2">
                  {t('home.features.transparency.title')}
                </h3>
                <p className="text-gray-300">{t('home.features.transparency.description')}</p>
              </div>
            </FadeInWhenVisible>

            {/* 收益模式 */}
            <FadeInWhenVisible>
              <div>
                <img src="/assets/images/earning.png" alt="" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-lg font-normal mb-2">
                  {t('home.features.earning.title')}
                </h3>
                <p className="text-gray-300">{t('home.features.earning.description')}</p>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </div>

      {/* Community and Ecosystem 部分 - 使用较深的紫色背景 */}
      <div className="bg-[#2a1954] py-20">
        <div className="container mx-auto px-4 max-w-[960px]">
          <h2 className="text-4xl font-medium mb-16 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            {t('home.community.title')}
          </h2>

          <div className="relative">
            {/* 数字和内容的整体布局 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* 1 - Active Community */}
              <div className="w-full">
                <div className="relative h-[60px] flex items-center mb-4">
                  <div className="absolute inset-0 bg-purple-900/30 clip-path-arrow"></div>
                  <div className="relative z-10 w-full text-center text-xl font-medium text-white">
                    1
                  </div>
                </div>
                <h3 className="text-lg font-normal mb-4">
                  {t('home.community.active.title')}
                </h3>
                <p className="text-gray-300">
                  {t('home.community.active.description')}
                </p>
              </div>

              {/* 2 - Ecosystem Development */}
              <div>
                <div className="relative h-[60px] flex items-center mb-4">
                  <div className="absolute inset-0 bg-purple-900/40 clip-path-arrow"></div>
                  <div className="relative z-10 w-full text-center text-xl font-medium text-white">
                    2
                  </div>
                </div>
                <h3 className="text-lg font-normal mb-4">
                  {t('home.community.ecosystem.title')}
                </h3>
                <p className="text-gray-300">
                  {t('home.community.ecosystem.description')}
                </p>
              </div>

              {/* 3 - Governance and Discussions */}
              <div>
                <div className="relative h-[60px] flex items-center mb-4">
                  <div className="absolute inset-0 bg-purple-900/50 clip-path-arrow"></div>
                  <div className="relative z-10 w-full text-center text-xl font-medium text-white">
                    3
                  </div>
                </div>
                <h3 className="text-lg font-normal mb-4">
                  {t('home.community.governance.title')}
                </h3>
                <p className="text-gray-300">
                  {t('home.community.governance.description')}
                </p>
              </div>

              {/* 4 - Educational Resources */}
              <div>
                <div className="relative h-[60px] flex items-center mb-4">
                  <div className="absolute inset-0 bg-purple-900/60 clip-path-arrow"></div>
                  <div className="relative z-10 w-full text-center text-xl font-medium text-white">
                    4
                  </div>
                </div>
                <h3 className="text-lg font-normal mb-4">
                  {t('home.community.education.title')}
                </h3>
                <p className="text-gray-300">
                  {t('home.community.education.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Market Data and Analytics 部分 */}
      <div className="bg-[#251746] py-20">
        <div className="container mx-auto px-4 max-w-[960px]">
          <FadeInWhenVisible>
            <h2 className="text-4xl font-medium mb-16 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              {t('home.marketData.title')}
            </h2>
          </FadeInWhenVisible>

          <div className="relative">
            <div className="absolute left-[20px] top-[-20px] bottom-0 w-[1px] bg-[#e5e0df]/30"></div>
            
            <div className="space-y-16">
              {/* 1 - Comprehensive Data */}
              <FadeInWhenVisible>
                <div className="flex items-start">
                  <div className="relative flex items-center">
                    <div className="w-10 h-10 rounded-lg border border-[#e5e0df]/30 flex items-center justify-center text-lg font-medium bg-[#251746]">
                      1
                    </div>
                    <div className="h-[1px] w-10 bg-[#e5e0df]/30 ml-0"></div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-normal mb-4">
                      {t('home.marketData.comprehensive.title')}
                    </h3>
                    <p className="text-gray-300">
                      {t('home.marketData.comprehensive.description')}
                    </p>
                  </div>
                </div>
              </FadeInWhenVisible>

              {/* 2 - Advanced Analytics */}
              <FadeInWhenVisible>
                <div className="flex items-start">
                  <div className="relative flex items-center">
                    <div className="w-10 h-10 rounded-lg border border-[#e5e0df]/30 flex items-center justify-center text-lg font-medium bg-[#251746]">
                      2
                    </div>
                    <div className="h-[1px] w-10 bg-[#e5e0df]/30 ml-0"></div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-normal mb-4">
                      {t('home.marketData.analytics.title')}
                    </h3>
                    <p className="text-gray-300">
                      {t('home.marketData.analytics.description')}
                    </p>
                  </div>
                </div>
              </FadeInWhenVisible>

              {/* 3 - Customizable Dashboards */}
              <FadeInWhenVisible>
                <div className="flex items-start">
                  <div className="relative flex items-center">
                    <div className="w-10 h-10 rounded-lg border border-[#e5e0df]/30 flex items-center justify-center text-lg font-medium bg-[#251746]">
                      3
                    </div>
                    <div className="h-[1px] w-10 bg-[#e5e0df]/30 ml-0"></div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-normal mb-4">
                      {t('home.marketData.dashboards.title')}
                    </h3>
                    <p className="text-gray-300">
                      {t('home.marketData.dashboards.description')}
                    </p>
                  </div>
                </div>
              </FadeInWhenVisible>

              {/* 4 - Historical Data */}
              <FadeInWhenVisible>
                <div className="flex items-start">
                  <div className="relative flex items-center">
                    <div className="w-10 h-10 rounded-lg border border-[#e5e0df]/30 flex items-center justify-center text-lg font-medium bg-[#251746]">
                      4
                    </div>
                    <div className="h-[1px] w-10 bg-[#e5e0df]/30 ml-0"></div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-normal mb-4">
                      {t('home.marketData.historical.title')}
                    </h3>
                    <p className="text-gray-300">
                      {t('home.marketData.historical.description')}
                    </p>
                  </div>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Monetix 部分 */}
      <div className="bg-[#2a1954] py-20">
        <div className="container mx-auto px-4 max-w-[960px]">
          {/* 标题和描述 */}
          <div className="max-w-4xl">
            <h2 className="text-4xl font-medium mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              {t('home.whyChoose.title')}
            </h2>
            <p className="text-gray-300 text-base mb-12 whitespace-normal md:whitespace-nowrap">
              {t('home.whyChoose.description')}
            </p>
          </div>

          {/* 按钮组 */}
          <div className="flex justify-center gap-6 mt-4">
            <a
              href="https://x.com/MonetixProtocol"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-100 transition-colors"
            >
              <FaXTwitter className="h-8 w-8" />
            </a>
            <a
              href="https://t.me/monetixprotocol"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-100 transition-colors"
            >
              <FaTelegram className="h-8 w-8" />
            </a>
            <a
              href="https://discord.gg/SnJ3dAPU"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-100 transition-colors"
            >
              <FaDiscord className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>

      <TermsModal 
        isOpen={showTerms} 
        onClose={() => setShowTerms(false)} 
      />
    </div>
  );
}

export default App;