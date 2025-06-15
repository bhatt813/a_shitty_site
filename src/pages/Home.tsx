import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, TrendingUp, Users, Zap, BarChart3, Megaphone, ShoppingBag } from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-orange-500 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-purple-800/10 to-orange-600/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wide">
              HELIX HUBS
            </h1>
            <p className="text-2xl md:text-3xl font-medium mb-8 tracking-widest opacity-90">
              WHERE VISION MEETS VELOCITY
            </p>
            <p className="text-xl text-purple-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              As a distributor for the digital era, we specialize in cultivating highly engaged, monetizable audiences through data-driven strategies that transform content into profitable, engaged communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-700 px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                Get Started <ArrowRight className="ml-3 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-700 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-wide">
              TRANSFORM CONTENT INTO REVENUE
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our innovative approach empowers content owners to precisely track and optimize user engagement throughout the monetization funnel.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-wide">AUDIENCE INTELLIGENCE</h3>
              <p className="text-gray-600">
                Unlock granular audience tracking with precise data on user demographics and interests to create highly effective audience lookalikes.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-wide">VIRAL CONTENT STRATEGY</h3>
              <p className="text-gray-600">
                Disciplined "Test and Learn" methodology to identify and target niche audiences most likely to propel content to viral status.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 via-purple-50 to-orange-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-wide">MONETIZATION OPTIMIZATION</h3>
              <p className="text-gray-600">
                Advanced causal inference methodologies to define and optimize highly engaged audiences for maximum revenue potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-wide">
              COMPREHENSIVE DIGITAL DISTRIBUTION
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From centralized content hubs to viral marketing campaigns, we provide end-to-end solutions for modern content distribution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 tracking-wide">CONTENT HUBS</h3>
              <p className="text-gray-600 text-sm">Centralized ecosystems for all production-related content and collaborations.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 tracking-wide">DATA ANALYTICS</h3>
              <p className="text-gray-600 text-sm">Advanced tracking and optimization throughout the monetization funnel.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Megaphone className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 tracking-wide">BRAND PARTNERSHIPS</h3>
              <p className="text-gray-600 text-sm">Strategic sponsorships with major agencies and in-house brand marketers.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <ShoppingBag className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 tracking-wide">MERCHANDISING</h3>
              <p className="text-gray-600 text-sm">Revenue generation through strategic merchandising and drop-shipping models.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 tracking-wide">
            READY TO TRANSFORM YOUR CONTENT STRATEGY?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join the digital revolution with data-driven content distribution that delivers measurable results and sustainable revenue growth.
          </p>
          <Link
            to="/contact"
            className="bg-white text-purple-700 px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center"
          >
            Start Your Journey <ArrowRight className="ml-3 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;