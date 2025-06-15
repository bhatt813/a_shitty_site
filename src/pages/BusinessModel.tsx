import React from 'react';
import { DollarSign, TrendingUp, Users, Zap, Target, BarChart3 } from 'lucide-react';

const BusinessModel = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-orange-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide">
              BUSINESS MODEL
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Flexible partnership structures designed to align our success with yours, minimizing risk while maximizing revenue potential.
            </p>
          </div>
        </div>
      </section>

      {/* Revenue Model */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-wide">REVENUE SHARE MODEL</h2>
              <p className="text-lg text-gray-600 mb-6">
                We operate flexibly—either on a retainer or net revenue share basis. For independent creators or projects with limited upfront capital, Helix Hubs can gap finance marketing and distribution, taking on operational risk in exchange for a share of success.
              </p>
              <div className="bg-gradient-to-br from-purple-50 to-orange-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide">REVENUE SHARING STRUCTURE</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    <span className="text-gray-700"><strong>10-15%</strong> of net revenue from merchandising, brand sponsorships, and licensing fees</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Final percentage determined by capital investment and resource allocation</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-orange-100 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">10-15%</div>
                  <div className="text-sm text-gray-600">Net Revenue Share</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">8-10%</div>
                  <div className="text-sm text-gray-600">Direct Sponsorships</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Streams */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-wide">MULTIPLE REVENUE STREAMS</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diversified approach creates multiple pathways to monetization, reducing risk and maximizing revenue potential.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide">BRAND SPONSORSHIPS</h3>
              <p className="text-gray-600 mb-6">
                Strategic partnerships with major agencies and in-house brand marketers leveraging proprietary audience intelligence.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Direct Helix Secured:</span>
                  <span className="font-semibold text-purple-600">8-10%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">External Rep + Helix Intel:</span>
                  <span className="font-semibold text-orange-600">3-5%</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide">MERCHANDISING</h3>
              <p className="text-gray-600 mb-6">
                Revenue generation through strategic merchandising using engaged audiences and scaled lookalikes with drop-shipping models.
              </p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Revenue Share:</span>
                  <span className="font-semibold text-orange-600">10-15%</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide">LICENSING FEES</h3>
              <p className="text-gray-600 mb-6">
                Enhanced licensing deals enabled by precisely tracked audience engagement and demonstrated monetization potential.
              </p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Revenue Share:</span>
                  <span className="font-semibold text-purple-600">10-15%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-wide">PARTNERSHIP MODELS</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the partnership structure that best aligns with your project's needs and financial situation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-wide">RETAINER MODEL</h3>
              <p className="text-gray-600 mb-6">
                For established productions with upfront capital, we offer comprehensive services on a monthly retainer basis with performance bonuses.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Fixed monthly fee for services</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Performance-based bonuses</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Lower revenue sharing percentage</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-wide">REVENUE SHARE MODEL</h3>
              <p className="text-gray-600 mb-6">
                Perfect for independent creators, we provide gap financing for marketing and distribution in exchange for revenue participation.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">No upfront costs</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Shared operational risk</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Success-based compensation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-wide">WHY PARTNER WITH US</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our business model is designed to create win-win partnerships that drive sustainable growth and profitability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 tracking-wide">ALIGNED INCENTIVES</h3>
              <p className="text-gray-600">Our success is directly tied to your revenue, ensuring maximum effort and results.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 tracking-wide">RISK MITIGATION</h3>
              <p className="text-gray-600">We share operational risks and can provide gap financing for qualified projects.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 tracking-wide">TRANSPARENT REPORTING</h3>
              <p className="text-gray-600">Detailed analytics and clear attribution provide full visibility into campaign performance.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 tracking-wide">SCALABLE GROWTH</h3>
              <p className="text-gray-600">Our model supports projects of all sizes with flexible scaling based on success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-wide">
            READY TO DISCUSS YOUR PROJECT?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Let's explore which partnership model works best for your content and revenue goals.
          </p>
          <a
            href="/contact"
            className="bg-white text-purple-700 px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default BusinessModel;