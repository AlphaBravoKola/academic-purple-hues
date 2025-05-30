
import React, { useState } from 'react';
import Header from '@/components/Header';
import PostCard from '@/components/PostCard';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

const Index = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Sample data for posts
  const posts = [
    {
      id: '1',
      author: {
        name: 'Dr. Alexandra Martinez',
        title: 'Professor of Computational Biology',
        institution: 'MIT',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
        verified: true
      },
      content: 'Excited to share our latest findings on CRISPR gene editing applications in treating rare genetic disorders. Our research demonstrates a 94% success rate in preliminary trials, opening new possibilities for personalized medicine.',
      timestamp: '2 hours ago',
      type: 'academic' as const,
      tags: ['CRISPR', 'GeneTherapy', 'PersonalizedMedicine', 'Research'],
      metrics: {
        likes: 156,
        comments: 23,
        shares: 18
      },
      hasLink: true,
      linkTitle: 'CRISPR Applications in Rare Disease Treatment - Nature Journal'
    },
    {
      id: '2',
      author: {
        name: 'Brookings Institution',
        title: 'Think Tank',
        institution: 'Washington, D.C.',
        avatar: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=150&fit=crop',
        verified: true
      },
      content: 'Our latest policy brief examines the economic implications of remote work policies post-pandemic. Key findings suggest a 15% increase in productivity but challenges in urban economic ecosystems that depend on office workers.',
      timestamp: '4 hours ago',
      type: 'think-tank' as const,
      tags: ['EconomicPolicy', 'RemoteWork', 'UrbanPlanning', 'PostPandemic'],
      metrics: {
        likes: 89,
        comments: 31,
        shares: 45
      },
      hasLink: true,
      linkTitle: 'Remote Work Economic Impact Analysis - Policy Brief 2024'
    },
    {
      id: '3',
      author: {
        name: 'Sarah Chen',
        title: 'PhD Candidate in Psychology',
        institution: 'Stanford University',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        verified: false
      },
      content: 'Attending the International Conference on Social Psychology next week. Looking forward to presenting our research on digital communication patterns and their impact on interpersonal relationships. Any fellow attendees here?',
      timestamp: '6 hours ago',
      type: 'general' as const,
      tags: ['SocialPsychology', 'DigitalCommunication', 'Conference', 'Research'],
      metrics: {
        likes: 34,
        comments: 12,
        shares: 5
      }
    },
    {
      id: '4',
      author: {
        name: 'Prof. Michael Thompson',
        title: 'Director of Climate Research',
        institution: 'Oxford University',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        verified: true
      },
      content: 'Breaking: Our 10-year longitudinal study on Arctic ice patterns reveals acceleration in melting rates beyond previous models. This data is crucial for updating climate change projections and policy recommendations.',
      timestamp: '8 hours ago',
      type: 'academic' as const,
      tags: ['ClimateChange', 'ArcticResearch', 'EnvironmentalScience', 'LongitudinalStudy'],
      metrics: {
        likes: 203,
        comments: 67,
        shares: 89
      },
      hasLink: true,
      linkTitle: 'Arctic Ice Melting Acceleration Study - Environmental Research Letters'
    },
    {
      id: '5',
      author: {
        name: 'RAND Corporation',
        title: 'Research Organization',
        institution: 'Santa Monica, CA',
        avatar: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=150&h=150&fit=crop',
        verified: true
      },
      content: 'New analysis on cybersecurity threats in critical infrastructure. Our report identifies key vulnerabilities and proposes a framework for enhanced protection of power grids, water systems, and transportation networks.',
      timestamp: '12 hours ago',
      type: 'think-tank' as const,
      tags: ['Cybersecurity', 'CriticalInfrastructure', 'NationalSecurity', 'PolicyAnalysis'],
      metrics: {
        likes: 145,
        comments: 28,
        shares: 52
      },
      hasLink: true,
      linkTitle: 'Critical Infrastructure Cybersecurity Framework - RAND Report'
    }
  ];

  // Filter posts based on active filter
  const filteredPosts = activeFilter === 'all' 
    ? posts 
    : posts.filter(post => post.type === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-3">
            {/* Create Post Button */}
            <div className="mb-6">
              <Button className="w-full justify-start bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 h-12">
                <PlusCircle className="w-5 h-5 mr-3" />
                Share your research, insights, or thoughts...
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
                  <p className="text-gray-500 text-lg">No posts found for this filter.</p>
                  <p className="text-gray-400 text-sm mt-2">Try selecting a different feed or check back later.</p>
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
    </div>
  );
};

export default Index;
