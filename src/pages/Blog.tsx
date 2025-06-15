import React from 'react';
import { Calendar, ArrowRight, TrendingUp, Users, Target, Brain, Zap, DollarSign } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'The Long Game: Why Sustained Audience Engagement Beats Viral Moments',
      excerpt: 'While viral content captures attention, it\'s the sustained, long-term audience relationships that generate the most significant revenue. Here\'s why building monetizable audiences is the ultimate content strategy.',
      date: '2024-03-25',
      category: 'Revenue Strategy',
      readTime: '14 min read',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Helix Hubs Strategy Team',
      featured: true,
      content: {
        intro: 'In the attention economy, creators often chase viral moments. But the real money isn\'t in fleeting fame—it\'s in cultivating audiences that stick around, engage consistently, and convert repeatedly over time.',
        sections: [
          {
            title: 'The Economics of Audience Lifetime Value',
            content: 'A single viral video might generate millions of views, but a dedicated audience of 100,000 engaged fans can generate millions in revenue over years. The math is simple: sustained engagement compounds, while viral moments fade.'
          },
          {
            title: 'Revenue Streams That Scale With Engagement',
            content: 'Long-term audiences unlock revenue opportunities that casual viewers never provide: premium content subscriptions, exclusive merchandise, brand partnerships with higher rates, licensing deals with proven audience data, and direct fan monetization through platforms and experiences.'
          },
          {
            title: 'The Compounding Effect of Audience Intelligence',
            content: 'Every interaction with your long-term audience generates data. This intelligence becomes increasingly valuable over time, allowing for better targeting, higher conversion rates, more strategic partnerships, and premium pricing for brand collaborations.'
          }
        ],
        revenueStreams: [
          {
            title: 'Subscription & Premium Content',
            description: 'Engaged audiences are 15x more likely to pay for premium content, exclusive access, or subscription services.',
            potential: '$50-200 per subscriber annually'
          },
          {
            title: 'Merchandise & E-commerce',
            description: 'Long-term fans have higher lifetime value and purchase frequency, with better conversion rates on merchandise.',
            potential: '8-15% conversion rates vs 1-3% for casual viewers'
          },
          {
            title: 'Brand Partnerships',
            description: 'Brands pay premium rates for access to engaged, loyal audiences with proven conversion history.',
            potential: '3-5x higher CPM rates for engaged audiences'
          },
          {
            title: 'Licensing & IP Monetization',
            description: 'Sustained audience engagement provides leverage in licensing negotiations and IP deals.',
            potential: 'Multi-year deals worth 10-50x single campaign value'
          }
        ],
        metrics: [
          {
            metric: 'Audience Lifetime Value',
            casual: '$2-5',
            engaged: '$150-500',
            multiplier: '75-100x'
          },
          {
            metric: 'Brand Partnership Rates',
            casual: '$1-3 CPM',
            engaged: '$8-25 CPM',
            multiplier: '8-12x'
          },
          {
            metric: 'Merchandise Conversion',
            casual: '1-2%',
            engaged: '12-18%',
            multiplier: '9-12x'
          },
          {
            metric: 'Content Monetization',
            casual: '$0.50-2 per 1K views',
            engaged: '$15-50 per 1K engaged users',
            multiplier: '25-30x'
          }
        ]
      }
    },
    {
      title: 'Uncovering What Actually Works: Causal Inference at Helix Hubs',
      excerpt: 'In an era where every scroll, tap, and like is tracked, it\'s tempting to think that more data automatically means better decisions. But knowing what happened isn\'t the same as knowing why it happened.',
      date: '2024-03-20',
      category: 'Data Science',
      readTime: '12 min read',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Helix Hubs Data Science Team',
      featured: false,
      content: {
        intro: 'At Helix Hubs, our mission is to bring scientific rigor to the world of content and fandom. We don\'t just track engagement; we uncover the causal drivers behind it.',
        sections: [
          {
            title: 'Why Correlation Isn\'t Enough',
            content: 'Let\'s say a creator drops a new behind-the-scenes video and sees a spike in merchandise sales. Great news! But did that video cause the lift? Or was it payday weekend? Or maybe a collab post from a partner account? Most analytics tools will stop at correlation. We go deeper.'
          },
          {
            title: 'How We Do It: Causal Inference',
            content: 'Causal inference is a branch of data science focused on answering a deceptively simple question: Did X cause Y, or was it just along for the ride? To answer that, we borrow methods from economics and epidemiology and tailor them for the digital content world.'
          }
        ],
        methods: [
          {
            title: 'Propensity Score Matching',
            description: 'When two audience groups are exposed to different features — say, one saw a limited-edition merch drop and the other didn\'t — we build matched groups based on behavior, interests, and platform use. This lets us compare apples to apples, not apples to pineapples.'
          },
          {
            title: 'Difference-in-Differences (DiD)',
            description: 'For campaigns that roll out over time (like launching a content hub or releasing an interactive trailer), we compare performance changes in a test group vs. a control group across the same time window. This method accounts for seasonal trends, platform-wide shifts, and natural audience growth — isolating the real impact of the intervention.'
          },
          {
            title: 'Causal Forests',
            description: 'Some strategies work wonders for superfans, but barely move the needle for casual viewers. We use machine learning-powered causal inference to identify heterogeneous treatment effects — in other words, we figure out what works and for whom. This lets our partners personalize strategies for different audience segments, instead of using a one-size-fits-all playbook.'
          },
          {
            title: 'Causal Graphs (DAGs)',
            description: 'Before we run any model, we map our assumptions using Directed Acyclic Graphs. These help us untangle messy relationships between content type, timing, platform mechanics, and monetization — and prevent us from being misled by hidden variables.'
          }
        ],
        insights: [
          'Which platform strategies actually drive monetization',
          'What kinds of fans respond best to premium drops or activations',
          'How to time releases for maximum downstream effect',
          'What to stop doing because it\'s just noise'
        ]
      }
    },
    {
      title: 'Likely Causal Inference Framework for Helix Hubs',
      excerpt: 'A comprehensive methodology breakdown for understanding the causal drivers behind audience growth, engagement spikes, merchandise revenue lift, and conversion into superfans.',
      date: '2024-03-15',
      category: 'Data Science',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Helix Hubs Data Science Team',
      featured: false,
      content: {
        objective: 'Understand the causal drivers behind audience growth, engagement spikes, merchandise or ad revenue lift, and conversion into superfans.',
        framework: [
          {
            title: 'Propensity Score Matching (PSM)',
            useCase: 'Comparing users who engaged with a specific promotion, video thumbnail, or call-to-action with similar users who didn\'t.',
            explanation: 'We create statistically similar groups of users — one that interacted with a feature and one that didn\'t — and measure the outcome difference. This helps isolate what caused the shift.'
          },
          {
            title: 'Difference-in-Differences (DiD)',
            useCase: 'Evaluating the effect of a platform change or campaign launch (e.g., drop of a content hub, new merch tab) over time compared to a control group.',
            explanation: 'We compare changes in engagement or revenue before and after a feature launch, across both treated and untreated groups. This lets us control for trends that would\'ve happened anyway.'
          },
          {
            title: 'Causal Forests or Double Machine Learning (EconML)',
            useCase: 'Discovering which user segments respond best to certain interventions (e.g., premium drops, push notifications, interactive content).',
            explanation: 'We use advanced machine learning to not just estimate if something works, but for whom it works best. This helps us personalize rollout strategies.'
          },
          {
            title: 'Directed Acyclic Graphs (DAGs)',
            useCase: 'Mapping out and validating assumptions about causal relationships (e.g., between content formats, platform UX, and monetization).',
            explanation: 'We use causal graphs to map the relationships between engagement drivers — they help ensure we\'re not being misled by confounding variables.'
          }
        ],
        pitch: 'We go beyond basic analytics. We apply causal inference — the same framework used in clinical trials and economics — to identify which creative choices, features, or platform behaviors actually drive outcomes like engagement and monetization. That means we\'re not guessing what works based on correlation — we\'re using data science to uncover what truly moves the needle, and for which types of fans.'
      }
    }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const otherPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-orange-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide">
              HELIX HUBS BLOG
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Insights, strategies, and data-driven approaches to content distribution, audience cultivation, and digital monetization.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <span className="inline-block px-3 py-1 text-sm font-medium bg-purple-100 text-purple-600 rounded-full mb-4">
                  Featured Post
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-wide">
                  💰 {featuredPost.title.toUpperCase()}
                </h2>
                <p className="text-lg text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center text-gray-500 mb-6">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{new Date(featuredPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span>{featuredPost.readTime}</span>
                </div>

                {/* Featured Post Preview Content */}
                {featuredPost.content.metrics && (
                  <div className="bg-gradient-to-br from-purple-50 to-orange-50 p-6 rounded-xl mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 tracking-wide">
                      📊 REVENUE COMPARISON: CASUAL VS ENGAGED AUDIENCES
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {featuredPost.content.metrics.slice(0, 2).map((metric, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg">
                          <h5 className="font-medium text-gray-900 mb-2">{metric.metric}</h5>
                          <div className="space-y-1 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Casual:</span>
                              <span className="text-gray-800">{metric.casual}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Engaged:</span>
                              <span className="font-semibold text-purple-600">{metric.engaged}</span>
                            </div>
                            <div className="flex justify-between border-t pt-1">
                              <span className="text-gray-600">Multiplier:</span>
                              <span className="font-bold text-orange-600">{metric.multiplier}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <button className="bg-gradient-to-r from-purple-600 to-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 hover:scale-105 flex items-center">
                  Read Full Article <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
              <div className="relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Latest Articles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-wide">LATEST ARTICLES</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay up-to-date with the latest trends, strategies, and insights in digital content distribution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {otherPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 text-sm font-medium bg-purple-600 text-white rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 line-clamp-2 tracking-wide">
                    {post.category === 'Data Science' ? '🧠' : '🎬'} {post.title.toUpperCase()}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Framework Preview */}
                  {post.content.framework && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 tracking-wide">
                        🎯 OBJECTIVE:
                      </h4>
                      <p className="text-gray-600 mb-4">{post.content.objective}</p>
                      
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 tracking-wide">
                        🧩 CORE TECHNIQUES:
                      </h4>
                      <div className="space-y-3">
                        {post.content.framework.slice(0, 2).map((technique, techIndex) => (
                          <div key={techIndex} className="bg-gray-50 p-4 rounded-lg">
                            <h5 className="font-medium text-gray-900 mb-2 flex items-center">
                              ✅ {technique.title}
                            </h5>
                            <p className="text-sm text-gray-600 mb-2">
                              <strong>Use case:</strong> {technique.useCase}
                            </p>
                            <p className="text-sm text-gray-600">
                              <strong>How we explain it:</strong> "{technique.explanation}"
                            </p>
                          </div>
                        ))}
                        {post.content.framework.length > 2 && (
                          <div className="text-center text-gray-500 text-sm">
                            + {post.content.framework.length - 2} more techniques...
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Methods Preview for Causal Inference post */}
                  {post.content.methods && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 tracking-wide">
                        🔬 KEY METHODOLOGIES:
                      </h4>
                      <div className="space-y-3">
                        {post.content.methods.slice(0, 2).map((method, methodIndex) => (
                          <div key={methodIndex} className="bg-gray-50 p-4 rounded-lg">
                            <h5 className="font-medium text-gray-900 mb-2 flex items-center">
                              ✅ {method.title}
                            </h5>
                            <p className="text-sm text-gray-600">{method.description}</p>
                          </div>
                        ))}
                        {post.content.methods.length > 2 && (
                          <div className="text-center text-gray-500 text-sm">
                            + {post.content.methods.length - 2} more methods...
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  
                  <button className="text-purple-600 font-medium hover:text-purple-700 flex items-center">
                    Read More <ArrowRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-wide">EXPLORE BY CATEGORY</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find articles tailored to your specific interests and challenges in digital content distribution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-purple-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 tracking-wide">REVENUE STRATEGY</h3>
              <p className="text-gray-600 text-sm">Monetization and long-term audience value</p>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 tracking-wide">DATA SCIENCE</h3>
              <p className="text-gray-600 text-sm">Causal inference and advanced analytics</p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 tracking-wide">STRATEGY</h3>
              <p className="text-gray-600 text-sm">Distribution strategies and market approaches</p>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 tracking-wide">AUDIENCE</h3>
              <p className="text-gray-600 text-sm">Engagement and community building</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-wide">
            STAY AHEAD OF THE CURVE
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Get the latest insights on content distribution, audience cultivation, and digital monetization delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
            />
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;