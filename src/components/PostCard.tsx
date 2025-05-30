
import React from 'react';
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
    type: 'academic' | 'think-tank' | 'general';
    tags: string[];
    metrics: {
      likes: number;
      comments: number;
      shares: number;
    };
    hasLink?: boolean;
    linkTitle?: string;
  };
}

const PostCard = ({ post }: PostCardProps) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'academic': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'think-tank': return 'bg-green-100 text-green-800 border-green-200';
      case 'general': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'academic': return 'Academic';
      case 'think-tank': return 'Think Tank';
      case 'general': return 'General';
      default: return 'General';
    }
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

        {post.hasLink && post.linkTitle && (
          <div className="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-900">{post.linkTitle}</span>
              <ExternalLink className="w-4 h-4 text-gray-500" />
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
