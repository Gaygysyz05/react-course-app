import { Link } from "react-router-dom";
import { ArrowRight, Code, Brain, Box, Bot, Sparkles, Users, Trophy, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CourseCard } from "@/components/CourseCard";
import { RequestForm } from "@/components/RequestForm";
import { courses } from "@/data/mockData";

const stats = [
  { icon: Users, value: "15,000+", label: "Студентов" },
  { icon: BookOpen, value: "50+", label: "Курсов" },
  { icon: Trophy, value: "95%", label: "Трудоустройство" },
];

const features = [
  {
    icon: Code,
    title: "Программирование",
    description: "Python, JavaScript, и другие языки с нуля до профи",
  },
  {
    icon: Brain,
    title: "Искусственный интеллект",
    description: "Машинное обучение, нейросети и работа с данными",
  },
  {
    icon: Box,
    title: "3D-моделирование",
    description: "Blender, Unity и создание визуального контента",
  },
  {
    icon: Bot,
    title: "Робототехника",
    description: "Конструирование и программирование роботов",
  },
];

export default function Index() {
  const popularCourses = courses.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
          </div>

          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
                <Sparkles className="h-4 w-4" />
                <span>Новые курсы уже доступны</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-slide-in-up">
                Освойте профессию{" "}
                <span className="text-gradient">будущего</span> уже сегодня
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-in-up" style={{ animationDelay: "0.1s" }}>
                Практические курсы от ведущих экспертов. Программирование, AI, 3D-графика и робототехника для детей и взрослых.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
                <Button size="lg" asChild>
                  <Link to="/courses">
                    Смотреть каталог
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/blog">Читать блог</Link>
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-16 lg:mt-24 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center animate-slide-in-up"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Направления обучения
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Выберите своё направление и начните путь к новой профессии
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Link
                  key={feature.title}
                  to="/courses"
                  className="group bg-card rounded-2xl p-6 border border-border transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <feature.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Courses Section */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Популярные курсы
                </h2>
                <p className="text-lg text-muted-foreground">
                  Курсы, которые выбирают наши студенты
                </p>
              </div>
              <Button variant="outline" asChild className="hidden sm:inline-flex">
                <Link to="/courses">
                  Все курсы
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularCourses.map((course, index) => (
                <div
                  key={course.id}
                  className="animate-slide-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CourseCard course={course} />
                </div>
              ))}
            </div>

            <div className="mt-8 text-center sm:hidden">
              <Button asChild>
                <Link to="/courses">
                  Все курсы
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Request Form Section */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container">
            <RequestForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
