import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, MessageCircle, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CommentSection } from "@/components/CommentSection";
import { blogPosts, comments } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Статья не найдена
          </h1>
          <Button asChild>
            <Link to="/blog">Вернуться к блогу</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Ссылка скопирована",
      description: "Теперь вы можете поделиться статьёй",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-8 lg:py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Назад к блогу
            </Link>

            {/* Article Header */}
            <article>
              <header className="mb-8">
                <div className="flex items-center flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {post.title}
                </h1>

                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-3">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-border"
                    />
                    <div>
                      <p className="font-medium text-foreground">
                        {post.author.name}
                      </p>
                      <p className="text-sm text-muted-foreground">{post.date}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground ml-auto">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      <span>{post.commentsCount}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 px-2"
                      onClick={handleShare}
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </header>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none mb-12">
                {post.content.split("\n\n").map((paragraph, index) => {
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h2
                        key={index}
                        className="text-xl font-bold text-foreground mt-8 mb-4"
                      >
                        {paragraph.replace("## ", "")}
                      </h2>
                    );
                  }
                  return (
                    <p key={index} className="text-foreground/90 mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Author Card */}
              <div className="bg-secondary/50 rounded-2xl p-6 mb-12">
                <div className="flex items-start gap-4">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-16 h-16 rounded-full object-cover ring-2 ring-border"
                  />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {post.author.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Автор статьи
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Делится опытом и знаниями с сообществом CourseHub. Следите за новыми публикациями!
                    </p>
                  </div>
                </div>
              </div>

              {/* Comments */}
              <CommentSection comments={comments} />
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
