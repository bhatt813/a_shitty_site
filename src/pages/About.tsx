import React from 'react';
import { Users, Target, TrendingUp, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-orange-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide">
              ABOUT HELIX HUBS
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              We're pioneering the future of digital content distribution through data-driven audience intelligence and strategic monetization.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-wide">OUR MISSION</h2>
              <p className="text-lg text-gray-600 mb-6">
                As a distributor for the digital era, Helix Hubs specializes in cultivating highly engaged, monetizable audiences through data-driven strategies. Our innovative approach empowers content owners to precisely track and optimize user engagement throughout the monetization funnel.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                By establishing dedicated, highly engaged audiences, we enable significantly more profitable licensing deals while facilitating content owner-led merchandising initiatives and ad revenue generation.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">10-15%</div>
                  <div className="text-sm text-gray-600">Net Revenue Share</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">100+</div>
                  <div className="text-sm text-gray-600">Digital Channels</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-orange-100 p-8 rounded-2xl">
              <div className="aspect-video bg-gradient-to-br from-purple-200 to-orange-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Target className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 tracking-wide">DATA-DRIVEN APPROACH</h3>
                  <p className="text-gray-600 mt-2">Precision targeting through advanced analytics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-wide">OUR CORE VALUES</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every strategy we implement for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-wide">PRECISION</h3>
              <p className="text-gray-600">
                Every campaign is meticulously crafted using data-driven insights and advanced causal inference methodologies.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-wide">INNOVATION</h3>
              <p className="text-gray-600">
                We constantly evolve our strategies, leveraging cutting-edge technology and AI-driven trend analysis.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-wide">PARTNERSHIP</h3>
              <p className="text-gray-600">
                We work as true partners, sharing both the risks and rewards of your content's success.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-wide">EXCELLENCE</h3>
              <p className="text-gray-600">
                We deliver exceptional results through rigorous testing, optimization, and continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-wide">OUR APPROACH</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in a scientific, methodical approach to content distribution and audience cultivation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide">TEST & LEARN</h3>
              <p className="text-gray-600">
                We start with disciplined experimentation to identify your most engaged audience segments and optimal content strategies.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide">SCALE & OPTIMIZE</h3>
              <p className="text-gray-600">
                Using audience intelligence, we create highly effective lookalikes and scale successful strategies across all digital channels.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide">MONETIZE & GROW</h3>
              <p className="text-gray-600">
                We unlock multiple revenue streams through strategic partnerships, merchandising, and direct audience monetization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;