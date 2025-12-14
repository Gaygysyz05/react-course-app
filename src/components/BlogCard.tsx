import { Link } from "react-router-dom";
import { MessageCircle, Clock, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@/data/mockData";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      to={`/blog/${post.id}`}
      className="group block bg-card rounded-2xl border border-border p-6 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-10 h-10 rounded-full object-cover ring-2 ring-border"
          />
          <div>
            <p className="text-sm font-medium text-foreground">{post.author.name}</p>
            <p className="text-xs text-muted-foreground">{post.date}</p>
          </div>
        </div>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>

      <h3 className="font-semibold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
        {post.title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
        {post.snippet}
      </p>

      <div className="flex items-center flex-wrap gap-2 mb-4">
        {post.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border">
        <div className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          <span>{post.readTime}</span>
        </div>
        <div className="flex items-center gap-1">
          <MessageCircle className="h-4 w-4" />
          <span>{post.commentsCount} комментариев</span>
        </div>
      </div>
    </Link>
  );
}
