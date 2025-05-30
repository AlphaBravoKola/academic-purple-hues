
import React from 'react';
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, ExternalLink, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

interface PostCardProps {
  post: {
    id: string;
    author: {
      name: string;
      title: string;
      institution: string;
      avatar: string;
      verified: boolean;
    };
    content: string;
    timestamp: string;
    type: 'government' | 'think-tank' | 'general';
    tags: string[];
    metrics: {
      likes: number;
      comments: number;
      shares: number;
    };
    hasLink?: boolean;
    linkTitle?: string;
    hasChart?: boolean;
    chartData?: any[];
    sources?: string[];
  };
}

const PostCard = ({ post }: PostCardProps) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'government': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'think-tank': return 'bg-green-100 text-green-800 border-green-200';
      case 'general': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'government': return 'Government';
      case 'think-tank': return 'Think Tank';
      case 'general': return 'General';
      default: return 'General';
    }
  };

  const chartConfig = {
    data: {
      label: "Data",
      color: "hsl(var(--chart-1))",
    },
  };

  const renderChart = () => {
    if (!post.chartData || post.chartData.length === 0) return null;

    const firstDataPoint = post.chartData[0];
    
    // Determine chart type based on data structure
    if ('year' in firstDataPoint && 'jobs' in firstDataPoint) {
      // Line chart for job growth over time
      return (
        <ChartContainer config={chartConfig}>
          <LineChart data={post.chartData}>
            <XAxis dataKey="year" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line type="monotone" dataKey="jobs" stroke="#8b5cf6" strokeWidth={2} />
          </LineChart>
        </ChartContainer>
      );
    } else if ('energy' in firstDataPoint && 'support' in firstDataPoint) {
      // Bar chart for energy support
      return (
        <ChartContainer config={chartConfig}>
          <BarChart data={post.chartData}>
            <XAxis dataKey="energy" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="support" fill="#8b5cf6" />
          </BarChart>
        </ChartContainer>
      );
    } else if ('category' in firstDataPoint && 'vulnerabilities' in firstDataPoint) {
      // Pie chart for vulnerabilities
      const COLORS = ['#8b5cf6', '#a78bfa', '#c4b5fd', '#ddd6fe'];
      return (
        <ChartContainer config={chartConfig}>
          <PieChart>
            <Pie
              data={post.chartData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="vulnerabilities"
              label={({ category, vulnerabilities }) => `${category}: ${vulnerabilities}`}
            >
              {post.chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <ChartTooltip content={<ChartTooltipContent />} />
          </PieChart>
        </ChartContainer>
      );
    } else if ('state' in firstDataPoint && 'savings' in firstDataPoint) {
      // Bar chart for state savings
      return (
        <ChartContainer config={chartConfig}>
          <BarChart data={post.chartData}>
            <XAxis dataKey="state" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="savings" fill="#8b5cf6" />
          </BarChart>
        </ChartContainer>
      );
    }
    
    return null;
  };

  return (
    <Card className="mb-6 hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <h3 className="font-semibold text-gray-900 truncate">{post.author.name}</h3>
                {post.author.verified && (
                  <div className="w-4 h-4 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
                <Badge variant="outline" className={getTypeColor(post.type)}>
                  {getTypeLabel(post.type)}
                </Badge>
              </div>
              <p className="text-sm text-gray-600">{post.author.title}</p>
              <p className="text-sm text-gray-500">{post.author.institution}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">{post.timestamp}</span>
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="mb-4">
          <p className="text-gray-900 leading-relaxed">{post.content}</p>
        </div>

        {post.hasChart && post.chartData && (
          <div className="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="h-64">
              {renderChart()}
            </div>
          </div>
        )}

        {post.hasLink && post.linkTitle && (
          <div className="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-900">{post.linkTitle}</span>
              <ExternalLink className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        )}

        {post.sources && post.sources.length > 0 && (
          <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-start space-x-2">
              <FileText className="w-4 h-4 text-blue-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-blue-900 mb-1">Sources:</p>
                {post.sources.map((source, index) => (
                  <p key={index} className="text-xs text-blue-700">{source}</p>
                ))}
              </div>
            </div>
          </div>
        )}

        {post.tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                #{tag}
              </Badge>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center space-x-6">
            <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-gray-600 hover:text-purple-600">
              <Heart className="w-4 h-4" />
              <span className="text-sm">{post.metrics.likes}</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-gray-600 hover:text-purple-600">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm">{post.metrics.comments}</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-gray-600 hover:text-purple-600">
              <Share2 className="w-4 h-4" />
              <span className="text-sm">{post.metrics.shares}</span>
            </Button>
          </div>
          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-purple-600">
            <Bookmark className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PostCard;
