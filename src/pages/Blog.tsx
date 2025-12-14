import { useState } from "react";
import { PenLine, TrendingUp, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";

const tabs = [
  { id: "all", label: "Все", icon: TrendingUp },
  { id: "recent", label: "Новые", icon: Clock },
  { id: "popular", label: "Популярные", icon: Users },
];

export default function Blog() {
  const [activeTab, setActiveTab] = useState("all");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const { toast } = useToast();

  const handleSubmitPost = () => {
    if (!postTitle.trim() || !postBody.trim()) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все поля",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Статья отправлена на модерацию",
      description: "Мы проверим её и опубликуем в ближайшее время",
    });
    setPostTitle("");
    setPostBody("");
    setDialogOpen(false);
  };

  const sortedPosts = [...blogPosts].sort((a, b) => {
    if (activeTab === "popular") {
      return b.commentsCount - a.commentsCount;
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-8 lg:py-12">
        <div className="container">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Сообщество
              </h1>
              <p className="text-lg text-muted-foreground">
                Статьи, советы и истории от наших студентов и экспертов
              </p>
            </div>

            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <PenLine className="mr-2 h-4 w-4" />
                  Написать статью
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Новая статья</DialogTitle>
                  <DialogDescription>
                    Поделитесь своим опытом с сообществом. Статья будет отправлена на модерацию перед публикацией.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <div>
                    <label
                      htmlFor="post-title"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Заголовок
                    </label>
                    <Input
                      id="post-title"
                      placeholder="Введите заголовок статьи"
                      value={postTitle}
                      onChange={(e) => setPostTitle(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="post-body"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Текст статьи
                    </label>
                    <Textarea
                      id="post-body"
                      placeholder="Расскажите свою историю..."
                      className="min-h-[200px] resize-none"
                      value={postBody}
                      onChange={(e) => setPostBody(e.target.value)}
                    />
                  </div>
                  <div className="bg-accent/20 rounded-lg p-4 border border-accent/30">
                    <p className="text-sm text-muted-foreground">
                      ⚠️ Ваша статья будет отправлена на модерацию перед публикацией. Обычно это занимает до 24 часов.
                    </p>
                  </div>
                  <div className="flex justify-end gap-3">
                    <Button
                      variant="outline"
                      onClick={() => setDialogOpen(false)}
                    >
                      Отмена
                    </Button>
                    <Button onClick={handleSubmitPost}>Отправить на модерацию</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedPosts.map((post, index) => (
              <div
                key={post.id}
                className="animate-slide-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
