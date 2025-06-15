import React from 'react';
import { Zap, BarChart3, Target, Megaphone, ShoppingBag, TrendingUp, Users, Globe } from 'lucide-react';

const HelixLogo = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer triangle pointing right */}
    <path d="M30 22.5L90 60L30 97.5V22.5Z" fill="currentColor"/>
    {/* Inner triangle pointing left */}
    <path d="M90 37.5L45 60L90 82.5V37.5Z" fill="currentColor" fillOpacity="0.7"/>
    {/* Small triangle accent */}
    <path d="M60 45L75 60L60 75V45Z" fill="currentColor" fillOpacity="0.4"/>
  </svg>
);

const Services = () => {
  const products = [
    {
      icon: Zap,
      title: 'Centralized Content Hubs',
      description: 'Comprehensive content ecosystems that serve as the destination for all production-related assets.',
      features: [
        'Unified content repository across all platforms',
        'Instagram, TikTok, Spotify, YouTube integration',
        'Strategic brand partnership coordination',
        'Behind-the-scenes content management'
      ],
      color: 'purple'
    },
    {
      icon: BarChart3,
      title: 'Audience Intelligence & Analytics',
      description: 'Granular audience tracking providing precise data on user demographics and interests.',
      features: [
        'Advanced demographic analysis',
        'Interest-based audience segmentation',
        'Highly effective lookalike creation',
        'Causal inference methodologies'
      ],
      color: 'orange'
    },
    {
      icon: Target,
      title: 'Viral Content Strategy',
      description: 'Disciplined "Test and Learn" approach to achieve viral success through niche audience targeting.',
      features: [
        'Strategic content calendar development',
        'AI-driven trend analysis',
        'User-generated content campaigns',
        'Fan engagement optimization'
      ],
      color: 'purple'
    },
    {
      icon: Megaphone,
      title: 'Brand Sponsorship & Partnerships',
      description: 'Direct partnerships with major agencies and brand marketers leveraging proprietary audience intelligence.',
      features: [
        'Publicis, Omnicom, Dentsu partnerships',
        'Quarterly budget alignment',
        'Organic collaboration integration',
        'Trackable ROI through first-party data'
      ],
      color: 'orange'
    },
    {
      icon: ShoppingBag,
      title: 'Merchandising & E-commerce',
      description: 'Revenue generation through strategic merchandising using streamlined drop-shipping models.',
      features: [
        'Engaged audience targeting',
        'Scaled lookalike deployment',
        'Drop-shipping fulfillment',
        'Profit optimization strategies'
      ],
      color: 'purple'
    },
    {
      icon: Globe,
      title: 'Multi-Channel Distribution',
      description: 'Comprehensive marketing strategies across all digital platforms and video channels.',
      features: [
        'Social media campaign management',
        'Connected TV (CTV) optimization',
        'In-app video advertising',
        'Cross-platform analytics'
      ],
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: 'from-purple-500 to-purple-600 bg-purple-100 text-purple-600',
      orange: 'from-orange-500 to-orange-600 bg-orange-100 text-orange-600'
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-orange-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 text-white">
            <div className="flex justify-center mb-8">
              <div className="text-white">
                <HelixLogo />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide">
              OUR PRODUCTS
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Comprehensive digital distribution solutions designed to maximize viewership, engagement, and revenue through data-driven strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              const colorClasses = getColorClasses(product.color);
              const [gradientClass, bgClass, textClass] = colorClasses.split(' ');
              
              return (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className={`w-16 h-16 bg-gradient-to-br ${gradientClass} rounded-xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-wide">{product.title.toUpperCase()}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  
                  <ul className="space-y-3">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className={`w-5 h-5 ${bgClass} rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0`}>
                          <div className={`w-2 h-2 ${gradientClass.replace('from-', 'bg-').replace(' to-' + product.color + '-600', '')} rounded-full`}></div>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-wide">OUR PROCESS</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to content distribution that delivers measurable results and sustainable growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 tracking-wide">AUDIENCE DISCOVERY</h3>
              <p className="text-gray-600">
                Identify and analyze your core audience using advanced demographic and interest-based segmentation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 tracking-wide">HUB DEVELOPMENT</h3>
              <p className="text-gray-600">
                Create centralized content ecosystems that serve as the destination for all production assets.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 tracking-wide">CAMPAIGN EXECUTION</h3>
              <p className="text-gray-600">
                Deploy targeted campaigns across all digital channels with continuous optimization and testing.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 tracking-wide">REVENUE OPTIMIZATION</h3>
              <p className="text-gray-600">
                Maximize monetization through strategic partnerships, merchandising, and direct audience engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-wide">
            READY TO TRANSFORM YOUR CONTENT STRATEGY?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our products can help you build highly engaged audiences and unlock new revenue streams.
          </p>
          <a
            href="/contact"
            className="bg-white text-purple-700 px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;