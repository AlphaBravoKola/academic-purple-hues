
import React from 'react';
import { TrendingUp, Calendar, Users, Vote, Award, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Sidebar = () => {
  const trendingTopics = [
    { topic: 'EconomicPolicy', posts: 342 },
    { topic: 'ClimateChange', posts: 289 },
    { topic: 'ForeignPolicy', posts: 234 },
    { topic: 'HealthcareReform', posts: 198 },
    { topic: 'Cybersecurity', posts: 167 }
  ];

  const suggestedConnections = [
    {
      name: 'Sen. Robert Kim',
      title: 'Foreign Relations Committee',
      institution: 'U.S. Senate',
      mutualConnections: 15
    },
    {
      name: 'Dr. Angela Torres',
      title: 'Economic Policy Director',
      institution: 'American Enterprise Institute',
      mutualConnections: 12
    },
    {
      name: 'Rep. David Wilson',
      title: 'House Energy Committee',
      institution: 'U.S. House of Representatives',
      mutualConnections: 9
    }
  ];

  const upcomingEvents = [
    {
      title: 'Climate Policy Forum',
      date: 'Dec 15, 2024',
      type: 'Congressional Hearing'
    },
    {
      title: 'Economic Outlook Briefing',
      date: 'Dec 18, 2024',
      type: 'Think Tank Event'
    },
    {
      title: 'Foreign Policy Summit',
      date: 'Dec 20, 2024',
      type: 'Conference'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Trending Topics */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center text-lg">
            <TrendingUp className="w-5 h-5 mr-2 text-purple-600" />
            Trending Policies
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-3">
            {trendingTopics.map((item, index) => (
              <div key={index} className="flex items-center justify-between group cursor-pointer">
                <div>
                  <p className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">
                    #{item.topic}
                  </p>
                  <p className="text-sm text-gray-500">{item.posts} posts</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Suggested Connections */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center text-lg">
            <Users className="w-5 h-5 mr-2 text-purple-600" />
            Suggested Connections
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-4">
            {suggestedConnections.map((person, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-semibold text-sm">
                    {person.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 text-sm">{person.name}</p>
                  <p className="text-xs text-gray-600">{person.title}</p>
                  <p className="text-xs text-gray-500">{person.institution}</p>
                  <p className="text-xs text-purple-600 mt-1">{person.mutualConnections} mutual connections</p>
                  <Button size="sm" variant="outline" className="mt-2 h-7 text-xs">
                    Connect
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Events */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center text-lg">
            <Calendar className="w-5 h-5 mr-2 text-purple-600" />
            Upcoming Events
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-3">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="border-l-4 border-purple-600 pl-3">
                <p className="font-medium text-gray-900 text-sm">{event.title}</p>
                <p className="text-xs text-gray-600">{event.type} • {event.date}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Platform Stats */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center text-lg">
            <Award className="w-5 h-5 mr-2 text-purple-600" />
            Platform Stats
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">1.2K</p>
              <p className="text-xs text-gray-600">Officials</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">89</p>
              <p className="text-xs text-gray-600">Think Tanks</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">45.6K</p>
              <p className="text-xs text-gray-600">Policy Papers</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">156</p>
              <p className="text-xs text-gray-600">Countries</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sidebar;
