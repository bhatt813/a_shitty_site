import React from 'react';
import { ArrowRight, Users, Target, TrendingUp, Zap } from 'lucide-react';

const FoundersLetter = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-orange-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide">
              🧬 FOUNDER'S LETTER
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Why I Started Helix Hubs
            </p>
          </div>
        </div>
      </section>

      {/* Letter Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="text-center mb-12">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">HB</span>
              </div>
              <p className="text-gray-600 text-lg">By Hirsh Bhatt, Founder</p>
            </div>

            <div className="space-y-8 text-gray-700 leading-relaxed">
              <p className="text-xl text-gray-900 font-medium">
                I started Helix Hubs because I saw a fundamental disconnect between how stories are made—and how audiences now discover and engage with them.
              </p>

              <p>
                I began my career on a very different track. After graduating from UCLA with a B.S. in Psychobiology, I entered the world of pharmaceutical marketing, working in operations and business development. It was comfortable, lucrative—and completely misaligned with the creative problems I wanted to solve.
              </p>

              <p>
                So I left a six-figure salary behind and started over in the CAA mailroom, eventually spending four years in the trenches of scripted TV dealmaking. I witnessed the evolution of peak TV, rode the boom of streaming, and weathered multiple industry shutdowns. I saw firsthand how even A-list talent and established producers were affected by the contraction of traditional Hollywood.
              </p>

              <div className="bg-gradient-to-br from-purple-50 to-orange-50 p-8 rounded-2xl my-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-wide">THE HARD QUESTIONS</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">Who are the new networks?</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">Who has the attention now?</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">Where does leverage come from?</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">And most importantly—how do we help creators win in this new world?</p>
                  </div>
                </div>
              </div>

              <p className="text-2xl font-bold text-gray-900 text-center my-12 tracking-wide">
                ENTER: HELIX HUBS.
              </p>

              <p>
                <strong>We're a film and TV distribution company built for the digital era.</strong> Our mission is to help storytellers—whether they're indie filmmakers, showrunners, or creator-driven studios—build and own niche, monetizable audiences before release.
              </p>

              <p>
                We do this through a platform that combines data science, content strategy, and technology. Our signature product is a branded content hub: a centralized ecosystem that aggregates every asset around a project—trailers, BTS footage, social collabs, press, fan edits, and more.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl my-12">
                <h3 className="text-xl font-bold text-gray-900 mb-6 tracking-wide">🔗 THE POWER OF INTEGRATION</h3>
                <p className="text-gray-700 mb-6">
                  Through API integrations with TikTok, YouTube, Instagram, Spotify, and others, the hub becomes more than a repository. It's a powerful source of audience intelligence, giving creators and studios the insight they need to:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2 tracking-wide">BUILD REAL FANDOM</h4>
                    <p className="text-sm text-gray-600">Cultivate engaged communities around your content</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="w-6 h-6 text-orange-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2 tracking-wide">MONETIZE DIRECTLY</h4>
                    <p className="text-sm text-gray-600">Via merch, brand partnerships, and ads</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Target className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2 tracking-wide">SECURE BETTER DEALS</h4>
                    <p className="text-sm text-gray-600">More profitable licensing and acquisition deals with streamers</p>
                  </div>
                </div>
              </div>

              <p className="text-xl font-bold text-gray-900 text-center my-12 tracking-wide">
                Helix Hubs is built for those who understand that in today's entertainment landscape, audience isn't a side effect—it's the asset.
              </p>

              <div className="bg-gradient-to-br from-purple-600 to-orange-500 p-8 rounded-2xl text-white my-12">
                <h3 className="text-2xl font-bold mb-6 tracking-wide">IF YOU'RE READY TO BUILD...</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Zap className="w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                    <p>If you're telling stories that deserve more than passive distribution...</p>
                  </div>
                  <div className="flex items-start">
                    <TrendingUp className="w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                    <p>If you want to turn engagement into leverage...</p>
                  </div>
                  <div className="flex items-start">
                    <Target className="w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                    <p>If you're tired of chasing deals without data...</p>
                  </div>
                </div>
                <p className="text-2xl font-bold mt-8 text-center tracking-wide">
                  Let's build together.
                </p>
              </div>

              <div className="text-center py-12">
                <div className="border-t border-gray-200 pt-8">
                  <p className="text-lg font-medium text-gray-900 mb-2">— Hirsh Bhatt</p>
                  <p className="text-gray-600">Founder, Helix Hubs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-wide">
            READY TO BUILD THE FUTURE OF CONTENT?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join us in transforming how stories reach and engage audiences in the digital era.
          </p>
          <a
            href="/contact"
            className="bg-white text-purple-700 px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 hover:scale-105 inline-flex items-center"
          >
            Let's Build Together <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default FoundersLetter;