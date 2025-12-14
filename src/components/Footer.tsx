import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  courses: [
    { name: "Программирование", href: "/courses?category=programming" },
    { name: "Искусственный интеллект", href: "/courses?category=ai" },
    { name: "3D-моделирование", href: "/courses?category=3d" },
    { name: "Робототехника", href: "/courses?category=robotics" },
  ],
  company: [
    { name: "О нас", href: "#" },
    { name: "Карьера", href: "#" },
    { name: "Блог", href: "/blog" },
    { name: "Контакты", href: "#" },
  ],
  support: [
    { name: "FAQ", href: "#" },
    { name: "Политика конфиденциальности", href: "#" },
    { name: "Условия использования", href: "#" },
    { name: "Помощь", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-xl bg-primary text-primary-foreground">
                <GraduationCap className="h-5 w-5" />
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                CourseHub
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6">
              Образовательная платформа нового поколения. Учитесь у лучших экспертов индустрии.
            </p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@coursehub.ru</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>8 (800) 555-35-35</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Москва, Россия</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Курсы</h3>
            <ul className="space-y-3">
              {footerLinks.courses.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Компания</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Поддержка</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 CourseHub. Все права защищены.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              VK
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Telegram
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
