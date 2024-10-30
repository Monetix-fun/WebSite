import React from 'react';
import { Shield, Zap, BarChart3, Lock } from 'lucide-react';
import { FaTelegram, FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
// import { useTranslations } from 'next-intl';
import { useTranslation } from 'react-i18next';

export default function Features() {
  // const { t } = useTranslation('Features');
  const { t } = useTranslation();

  const features = [
    {
      icon: <Shield className="h-8 w-8 text-blue-400" />,
      title: t('features.secure.title'),
      description: t('features.secure.description')
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-400" />,
      title: t('features.fast.title'),
      description: t('features.fast.description')
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-400" />,
      title: t('features.liquidity.title'),
      description: t('features.liquidity.description')
    },
    {
      icon: <Lock className="h-8 w-8 text-blue-400" />,
      title: t('features.decentralized.title'),
      description: t('features.decentralized.description')
    }
  ];

  return (
    <div className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">{t('features.title')}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            {t('features.subtitle')}
          </p>
          
          <div className="flex justify-center gap-6 mt-4">
            <a
              href="https://x.com/MonetixProtocol"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <FaXTwitter className="h-6 w-6" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <FaTelegram className="h-6 w-6" />
            </a>
            <a
              href="https://discord.gg/SnJ3dAPU"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <FaDiscord className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-b from-gray-900 to-gray-900/50 border border-gray-800 hover:border-gray-700 transition-all"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}