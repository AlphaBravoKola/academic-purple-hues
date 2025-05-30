
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
    if ('sector' in firstDataPoint && 'jobs' in firstDataPoint) {
      // Horizontal bar chart for job creation by sector
      return (
        <div className="w-full">
          <h4 className="text-sm font-medium text-gray-700 mb-3">Job Creation by Sector (thousands)</h4>
          <div className="h-48 w-full">
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                  data={post.chartData} 
                  layout="horizontal"
                  margin={{ top: 10, right: 30, left: 60, bottom: 10 }}
                >
                  <XAxis type="number" fontSize={12} tickFormatter={(value) => `${value}k`} />
                  <YAxis type="category" dataKey="sector" fontSize={12} width={80} />
                  <ChartTooltip 
                    content={<ChartTooltipContent />} 
                    formatter={(value) => [`${value}k jobs`, 'Jobs Created']}
                  />
                  <Bar dataKey="jobs" fill="#8b5cf6" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </div>
      );
    } else if ('energy' in firstDataPoint && 'support' in firstDataPoint) {
      // Bar chart for energy support
      return (
        <div className="w-full">
          <h4 className="text-sm font-medium text-gray-700 mb-3">Public Support for Energy Sources (%)</h4>
          <div className="h-48 w-full">
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={post.chartData} margin={{ top: 10, right: 10, left: 10, bottom: 20 }}>
                  <XAxis dataKey="energy" fontSize={12} />
                  <YAxis fontSize={12} domain={[0, 100]} />
                  <ChartTooltip 
                    content={<ChartTooltipContent />}
                    formatter={(value) => [`${value}%`, 'Support']}
                  />
                  <Bar dataKey="support" fill="#8b5cf6" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </div>
      );
    } else if ('category' in firstDataPoint && 'vulnerabilities' in firstDataPoint) {
      // Pie chart for vulnerabilities
      const COLORS = ['#8b5cf6', '#a78bfa', '#c4b5fd', '#ddd6fe'];
      return (
        <div className="w-full">
          <h4 className="text-sm font-medium text-gray-700 mb-3">Cybersecurity Vulnerabilities by Sector</h4>
          <div className="h-48 w-full flex justify-center">
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
                  <Pie
                    data={post.chartData}
                    cx="50%"
                    cy="50%"
                    outerRadius={70}
                    fill="#8884d8"
                    dataKey="vulnerabilities"
                    label={false}
                  >
                    {post.chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <ChartTooltip 
                    content={<ChartTooltipContent />}
                    formatter={(value) => [value, 'Vulnerabilities']}
                  />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
          <div className="flex flex-wrap gap-2 mt-2 justify-center">
            {post.chartData.map((entry, index) => (
              <div key={entry.category} className="flex items-center gap-1 text-xs">
                <div 
                  className="w-3 h-3 rounded" 
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                />
                <span>{entry.category}: {entry.vulnerabilities}</span>
              </div>
            ))}
          </div>
        </div>
      );
    } else if ('state' in firstDataPoint && 'savings' in firstDataPoint) {
      // Bar chart for state savings
      return (
        <div className="w-full">
          <h4 className="text-sm font-medium text-gray-700 mb-3">Healthcare Cost Savings by State (%)</h4>
          <div className="h-48 w-full">
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={post.chartData} margin={{ top: 10, right: 10, left: 10, bottom: 20 }}>
                  <XAxis dataKey="state" fontSize={12} />
                  <YAxis fontSize={12} domain={[0, 20]} />
                  <ChartTooltip 
                    content={<ChartTooltipContent />}
                    formatter={(value) => [`${value}%`, 'Savings']}
                  />
                  <Bar dataKey="savings" fill="#8b5cf6" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </div>
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
          <div className="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
            {renderChart()}
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
                {tag}
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
