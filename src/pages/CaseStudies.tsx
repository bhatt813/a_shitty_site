import React from 'react';
import { TrendingUp, Users, DollarSign, Target, BarChart3, Zap } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'Independent Film Viral Campaign',
      category: 'Film Distribution',
      results: {
        engagement: '+450%',
        revenue: '$2.3M',
        audience: '15M+',
        roi: '340%'
      },
      description: 'Transformed an independent film with limited budget into a viral sensation through strategic audience cultivation and multi-channel distribution.',
      challenges: [
        'Limited marketing budget ($50K initial)',
        'Unknown cast and crew',
        'Niche genre with small built-in audience',
        'Competitive release window'
      ],
      solutions: [
        'Built centralized content hub with behind-the-scenes content',
        'Leveraged cast/crew personal networks for organic growth',
        'Implemented "Test and Learn" approach for audience discovery',
        'Created viral UGC campaigns and meme contests'
      ],
      color: 'purple'
    },
    {
      title: 'Documentary Series Brand Partnership',
      category: 'Brand Sponsorship',
      results: {
        sponsorship: '$1.8M',
        audience: '8.5M',
        engagement: '+280%',
        deals: '12 Brands'
      },
      description: 'Secured major brand partnerships for environmental documentary series through precise audience intelligence and strategic positioning.',
      challenges: [
        'Educational content with limited commercial appeal',
        'Need to maintain editorial integrity',
        'Diverse audience segments to monetize',
        'Long production timeline'
      ],
      solutions: [
        'Developed comprehensive audience intelligence profiles',
        'Created organic brand integration opportunities',
        'Aligned with quarterly sustainability marketing budgets',
        'Provided clear attribution and ROI tracking'
      ],
      color: 'orange'
    },
    {
      title: 'Web Series Merchandising Success',
      category: 'E-commerce',
      results: {
        merchandise: '$890K',
        orders: '25,000+',
        conversion: '12.3%',
        margin: '65%'
      },
      description: 'Launched successful merchandising operation for comedy web series using engaged audience data and drop-shipping optimization.',
      challenges: [
        'No existing merchandise infrastructure',
        'Limited understanding of fan preferences',
        'Seasonal demand fluctuations',
        'Inventory management concerns'
      ],
      solutions: [
        'Implemented streamlined drop-shipping model',
        'Used audience intelligence for product development',
        'Created limited-edition drops for engagement',
        'Optimized conversion funnel through A/B testing'
      ],
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: 'from-purple-500 to-purple-600 bg-purple-50 text-purple-600 border-purple-200',
      orange: 'from-orange-500 to-orange-600 bg-orange-50 text-orange-600 border-orange-200'
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-orange-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide">
              CASE STUDIES
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Real results from our data-driven approach to content distribution and audience monetization across diverse projects and industries.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((study, index) => {
              const colorClasses = getColorClasses(study.color);
              const [gradientClass, bgClass, textClass, borderClass] = colorClasses.split(' ');
              
              return (
                <div key={index} className={`border-l-4 ${borderClass} ${bgClass} rounded-r-2xl p-8`}>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Content */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center mb-4">
                        <span className={`inline-block px-3 py-1 text-sm font-medium ${textClass} bg-white rounded-full mr-4`}>
                          {study.category}
                        </span>
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-wide">{study.title.toUpperCase()}</h2>
                      <p className="text-lg text-gray-600 mb-8">{study.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-4 tracking-wide">CHALLENGES</h3>
                          <ul className="space-y-2">
                            {study.challenges.map((challenge, challengeIndex) => (
                              <li key={challengeIndex} className="flex items-start">
                                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-600">{challenge}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-4 tracking-wide">SOLUTIONS</h3>
                          <ul className="space-y-2">
                            {study.solutions.map((solution, solutionIndex) => (
                              <li key={solutionIndex} className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-600">{solution}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    {/* Results */}
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center tracking-wide">KEY RESULTS</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(study.results).map(([key, value], resultIndex) => (
                          <div key={resultIndex} className="text-center">
                            <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
                            <div className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-wide">PROVEN TRACK RECORD</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our data-driven approach consistently delivers exceptional results across all project types and budgets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">350%+</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50M+</div>
              <div className="text-gray-600">Total Reach</div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">$12M+</div>
              <div className="text-gray-600">Revenue Generated</div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-wide">OUR METHODOLOGY</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every success story follows our proven framework for audience cultivation and revenue optimization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide">DATA-DRIVEN DISCOVERY</h3>
              <p className="text-gray-600">
                Advanced analytics and causal inference to identify high-value audience segments and optimal engagement strategies.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide">STRATEGIC EXECUTION</h3>
              <p className="text-gray-600">
                Coordinated campaigns across all digital channels with continuous testing and optimization for maximum impact.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide">REVENUE OPTIMIZATION</h3>
              <p className="text-gray-600">
                Multiple monetization streams including partnerships, merchandising, and direct audience engagement for sustained growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-wide">
            READY TO CREATE YOUR SUCCESS STORY?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can apply our proven methodology to transform your content into a profitable, engaged community.
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

export default CaseStudies;