import { useState } from "react";
import { Heart, MessageCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import type { Comment } from "@/data/mockData";

interface CommentItemProps {
  comment: Comment;
  depth?: number;
}

function CommentItem({ comment, depth = 0 }: CommentItemProps) {
  const [showReplies, setShowReplies] = useState(true);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <div className={`${depth > 0 ? "ml-8 pl-4 border-l-2 border-border" : ""}`}>
      <div className="py-4">
        <div className="flex items-start gap-3">
          <img
            src={comment.author.avatar}
            alt={comment.author.name}
            className="w-10 h-10 rounded-full object-cover ring-2 ring-border flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-medium text-sm text-foreground">
                {comment.author.name}
              </span>
              <span className="text-xs text-muted-foreground">{comment.date}</span>
            </div>
            <p className="text-sm text-foreground/90 mb-3">{comment.content}</p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setLiked(!liked)}
                className={`flex items-center gap-1 text-sm transition-colors ${
                  liked ? "text-accent" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Heart className={`h-4 w-4 ${liked ? "fill-current" : ""}`} />
                <span>{liked ? comment.likes + 1 : comment.likes}</span>
              </button>
              <button
                onClick={() => setShowReplyForm(!showReplyForm)}
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Ответить</span>
              </button>
            </div>

            {showReplyForm && (
              <div className="mt-4 space-y-3">
                <Textarea
                  placeholder="Напишите ответ..."
                  className="min-h-[80px] resize-none"
                />
                <div className="flex gap-2">
                  <Button size="sm">Отправить</Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setShowReplyForm(false)}
                  >
                    Отмена
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Replies */}
      {comment.replies && comment.replies.length > 0 && (
        <div>
          <button
            onClick={() => setShowReplies(!showReplies)}
            className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 mb-2"
          >
            {showReplies ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
            <span>
              {showReplies ? "Скрыть" : "Показать"} ответы ({comment.replies.length})
            </span>
          </button>
          {showReplies && (
            <div className="space-y-1">
              {comment.replies.map((reply) => (
                <CommentItem key={reply.id} comment={reply} depth={depth + 1} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

interface CommentSectionProps {
  comments: Comment[];
}

export function CommentSection({ comments }: CommentSectionProps) {
  return (
    <div className="space-y-2">
      <h3 className="font-semibold text-lg text-foreground mb-4">
        Комментарии ({comments.length})
      </h3>

      {/* New Comment Form */}
      <div className="bg-secondary/50 rounded-xl p-4 mb-6">
        <Textarea
          placeholder="Поделитесь своими мыслями..."
          className="min-h-[100px] resize-none bg-card mb-3"
        />
        <div className="flex justify-end">
          <Button>Отправить комментарий</Button>
        </div>
      </div>

      {/* Comments List */}
      <div className="divide-y divide-border">
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}
