
import React, { useState } from 'react';
import Header from '@/components/Header';
import PostCard from '@/components/PostCard';
import Sidebar from '@/components/Sidebar';
import ChatBot from '@/components/ChatBot';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

const Index = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Sample data for posts with political themes
  const posts = [
    {
      id: '4',
      author: {
        name: 'Rep. Michael Chen',
        title: 'House Representative',
        institution: 'House Energy Committee',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        verified: true
      },
      content: 'Breaking: Introducing bipartisan legislation for national cybersecurity infrastructure. This bill addresses critical vulnerabilities in our digital economy and national security systems.',
      timestamp: '8 hours ago',
      type: 'government' as const,
      tags: ['Cybersecurity', 'NationalSecurity', 'Bipartisan', 'Infrastructure'],
      metrics: {
        likes: 567,
        comments: 89,
        shares: 145
      },
      hasChart: true,
      chartData: [
        { category: 'Financial', vulnerabilities: 45 },
        { category: 'Healthcare', vulnerabilities: 38 },
        { category: 'Energy', vulnerabilities: 52 },
        { category: 'Transport', vulnerabilities: 29 }
      ],
      hasLink: true,
      linkTitle: 'Cybersecurity Infrastructure Act - H.R. 2024',
      sources: ['Department of Homeland Security Assessment', 'NIST Cybersecurity Framework']
    },
    {
      id: '1',
      author: {
        name: 'Senator Alexandra Johnson',
        title: 'U.S. Senator',
        institution: 'Senate Finance Committee',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
        verified: true
      },
      content: 'Presenting our comprehensive economic recovery plan focusing on infrastructure investment and job creation. Our analysis shows significant employment opportunities across key sectors including infrastructure, healthcare, technology, and manufacturing.',
      timestamp: '2 hours ago',
      type: 'government' as const,
      tags: ['EconomicPolicy', 'JobCreation', 'Infrastructure', 'Recovery'],
      metrics: {
        likes: 1847,
        comments: 234,
        shares: 189
      },
      hasChart: true,
      chartData: [
        { sector: 'Infrastructure', jobs: 240 },
        { sector: 'Healthcare', jobs: 180 },
        { sector: 'Technology', jobs: 320 },
        { sector: 'Manufacturing', jobs: 160 }
      ],
      hasLink: true,
      linkTitle: 'Economic Recovery Plan - Full Policy Document',
      sources: ['Congressional Budget Office Report 2024', 'Department of Labor Statistics']
    },
    {
      id: '2',
      author: {
        name: 'Brookings Institution',
        title: 'Think Tank',
        institution: 'Washington, D.C.',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        verified: true
      },
      content: 'Our latest analysis on climate change legislation reveals bipartisan support for renewable energy initiatives. Key findings show 73% public approval for federal clean energy investments.',
      timestamp: '4 hours ago',
      type: 'think-tank' as const,
      tags: ['ClimateChange', 'RenewableEnergy', 'BipartisanPolicy', 'Environment'],
      metrics: {
        likes: 892,
        comments: 156,
        shares: 234
      },
      hasChart: true,
      chartData: [
        { energy: 'Solar', support: 78 },
        { energy: 'Wind', support: 72 },
        { energy: 'Hydro', support: 68 },
        { energy: 'Nuclear', support: 45 }
      ],
      hasLink: true,
      linkTitle: 'Climate Policy Analysis - Brookings Report 2024',
      sources: ['EPA Climate Data 2024', 'Pew Research Center Survey']
    },
    {
      id: '3',
      author: {
        name: 'Maria Rodriguez',
        title: 'Policy Analyst',
        institution: 'Independent Researcher',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        verified: false
      },
      content: 'Attending the Foreign Policy Summit next week. Looking forward to discussions on diplomatic relations with emerging economies and trade policy implications.',
      timestamp: '6 hours ago',
      type: 'general' as const,
      tags: ['ForeignPolicy', 'Diplomacy', 'TradePolicy', 'Summit'],
      metrics: {
        likes: 124,
        comments: 45,
        shares: 23
      }
    },
    {
      id: '5',
      author: {
        name: 'Heritage Foundation',
        title: 'Policy Institute',
        institution: 'Washington, D.C.',
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
        verified: true
      },
      content: 'New research on healthcare policy reform shows promising results from state-level innovations. Our comprehensive study examines cost reduction strategies across 12 states.',
      timestamp: '12 hours ago',
      type: 'think-tank' as const,
      tags: ['HealthcarePolicy', 'StateGovernment', 'CostReduction', 'PolicyInnovation'],
      metrics: {
        likes: 445,
        comments: 78,
        shares: 112
      },
      hasChart: true,
      chartData: [
        { state: 'TX', savings: 12 },
        { state: 'FL', savings: 8 },
        { state: 'CA', savings: 15 },
        { state: 'NY', savings: 10 },
        { state: 'OH', savings: 6 }
      ],
      hasLink: true,
      linkTitle: 'Healthcare Policy Innovation Study - Heritage Report',
      sources: ['CMS Data Analysis 2024', 'State Health Department Reports']
    }
  ];

  // Filter posts based on active filter
  const filteredPosts = activeFilter === 'all' 
    ? posts 
    : posts.filter(post => post.type === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-3">
            {/* Create Post Button */}
            <div className="mb-6">
              <Button className="w-full justify-start bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 h-12">
                <PlusCircle className="w-5 h-5 mr-3" />
                Share your policy insights, analysis, or thoughts...
              </Button>
            </div>

            {/* Posts Feed */}
            <div>
              {filteredPosts.length > 0 ? (
                filteredPosts.map(post => (
                  <PostCard key={post.id} post={post} />
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 dark:text-gray-400 text-lg">No posts found for this filter.</p>
                  <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">Try selecting a different feed or check back later.</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>

      {/* ChatBot */}
      <ChatBot />
    </div>
  );
};

export default Index;
