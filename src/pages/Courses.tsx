import { useState, useMemo } from "react";
import { Code, Brain, Box, Bot, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CourseCard } from "@/components/CourseCard";
import { courses, categories, audiences } from "@/data/mockData";

const categoryIcons: Record<string, React.ElementType> = {
  programming: Code,
  ai: Brain,
  "3d": Box,
  robotics: Bot,
};

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedAudience, setSelectedAudience] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      if (selectedCategory && course.category !== selectedCategory) return false;
      if (selectedAudience && course.audience !== selectedAudience) return false;
      return true;
    });
  }, [selectedCategory, selectedAudience]);

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedAudience(null);
  };

  const hasFilters = selectedCategory || selectedAudience;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-8 lg:py-12">
        <div className="container">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Каталог курсов
            </h1>
            <p className="text-lg text-muted-foreground">
              {filteredCourses.length} {filteredCourses.length === 1 ? "курс" : "курсов"} доступно
            </p>
          </div>

          <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-8">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-6">
              <Button
                variant="outline"
                className="w-full justify-between"
                onClick={() => setShowFilters(!showFilters)}
              >
                <span className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Фильтры
                  {hasFilters && (
                    <Badge className="bg-primary text-primary-foreground">
                      {(selectedCategory ? 1 : 0) + (selectedAudience ? 1 : 0)}
                    </Badge>
                  )}
                </span>
              </Button>
            </div>

            {/* Sidebar Filters */}
            <aside
              className={`${
                showFilters ? "block" : "hidden"
              } lg:block mb-8 lg:mb-0`}
            >
              <div className="bg-card rounded-2xl border border-border p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-semibold text-lg text-foreground">Фильтры</h2>
                  {hasFilters && (
                    <button
                      onClick={clearFilters}
                      className="text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      Сбросить
                    </button>
                  )}
                </div>

                {/* Audience Filter */}
                <div className="mb-6">
                  <h3 className="font-medium text-sm text-foreground mb-3">
                    Для кого
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {audiences.map((audience) => (
                      <button
                        key={audience.id}
                        onClick={() =>
                          setSelectedAudience(
                            selectedAudience === audience.id ? null : audience.id
                          )
                        }
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          selectedAudience === audience.id
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                        }`}
                      >
                        {audience.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Category Filter */}
                <div>
                  <h3 className="font-medium text-sm text-foreground mb-3">
                    Категория
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => {
                      const Icon = categoryIcons[category.id];
                      return (
                        <button
                          key={category.id}
                          onClick={() =>
                            setSelectedCategory(
                              selectedCategory === category.id ? null : category.id
                            )
                          }
                          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                            selectedCategory === category.id
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                          <span>{category.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </aside>

            {/* Course Grid */}
            <div>
              {/* Active Filters */}
              {hasFilters && (
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span className="text-sm text-muted-foreground">Активные фильтры:</span>
                  {selectedAudience && (
                    <Badge
                      variant="secondary"
                      className="flex items-center gap-1 cursor-pointer hover:bg-secondary/80"
                      onClick={() => setSelectedAudience(null)}
                    >
                      {audiences.find((a) => a.id === selectedAudience)?.label}
                      <X className="h-3 w-3" />
                    </Badge>
                  )}
                  {selectedCategory && (
                    <Badge
                      variant="secondary"
                      className="flex items-center gap-1 cursor-pointer hover:bg-secondary/80"
                      onClick={() => setSelectedCategory(null)}
                    >
                      {categories.find((c) => c.id === selectedCategory)?.label}
                      <X className="h-3 w-3" />
                    </Badge>
                  )}
                </div>
              )}

              {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredCourses.map((course, index) => (
                    <div
                      key={course.id}
                      className="animate-slide-in-up"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <CourseCard course={course} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                    <Filter className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Курсы не найдены
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Попробуйте изменить параметры фильтрации
                  </p>
                  <Button variant="outline" onClick={clearFilters}>
                    Сбросить фильтры
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
