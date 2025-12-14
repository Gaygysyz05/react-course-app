import { Clock, Users, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Course } from "@/data/mockData";

interface CourseCardProps {
  course: Course;
}

const difficultyColors = {
  "начинающий": "bg-emerald-100 text-emerald-700 border-emerald-200",
  "средний": "bg-amber-100 text-amber-700 border-amber-200",
  "продвинутый": "bg-rose-100 text-rose-700 border-rose-200",
};

export function CourseCard({ course }: CourseCardProps) {
  const formattedPrice = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(course.price);

  return (
    <div className="group bg-card rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
        <Badge
          className={`absolute top-4 left-4 ${difficultyColors[course.difficulty]} border`}
        >
          {course.difficulty}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {course.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {course.description}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{course.studentsCount.toLocaleString("ru-RU")}</span>
          </div>
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-foreground">{course.rating}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <span className="text-lg font-bold text-foreground">{formattedPrice}</span>
          </div>
          <Button size="sm" className="group/btn">
            Подробнее
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
