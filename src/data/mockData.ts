export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  difficulty: "начинающий" | "средний" | "продвинутый";
  duration: string;
  category: "programming" | "ai" | "3d" | "robotics";
  audience: "children" | "adults";
  price: number;
  instructor: string;
  rating: number;
  studentsCount: number;
}

export interface BlogPost {
  id: string;
  title: string;
  snippet: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  commentsCount: number;
  readTime: string;
  tags: string[];
}

export interface Comment {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  date: string;
  likes: number;
  replies?: Comment[];
}

export const courses: Course[] = [
  {
    id: "1",
    title: "Python для начинающих",
    description: "Освойте основы программирования на Python с нуля. Идеальный старт для будущих разработчиков.",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop",
    difficulty: "начинающий",
    duration: "3 месяца",
    category: "programming",
    audience: "adults",
    price: 29900,
    instructor: "Алексей Петров",
    rating: 4.8,
    studentsCount: 1234,
  },
  {
    id: "2",
    title: "Основы искусственного интеллекта",
    description: "Погрузитесь в мир машинного обучения и нейронных сетей. Создайте свои первые AI-модели.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
    difficulty: "средний",
    duration: "4 месяца",
    category: "ai",
    audience: "adults",
    price: 45900,
    instructor: "Мария Иванова",
    rating: 4.9,
    studentsCount: 892,
  },
  {
    id: "3",
    title: "3D-моделирование в Blender",
    description: "Научитесь создавать потрясающие 3D-модели и анимации в бесплатном редакторе Blender.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop",
    difficulty: "начинающий",
    duration: "2 месяца",
    category: "3d",
    audience: "adults",
    price: 24900,
    instructor: "Дмитрий Козлов",
    rating: 4.7,
    studentsCount: 567,
  },
  {
    id: "4",
    title: "Робототехника для детей",
    description: "Увлекательные занятия по созданию и программированию роботов для школьников.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
    difficulty: "начинающий",
    duration: "6 месяцев",
    category: "robotics",
    audience: "children",
    price: 19900,
    instructor: "Елена Сидорова",
    rating: 4.9,
    studentsCount: 2341,
  },
  {
    id: "5",
    title: "JavaScript Pro",
    description: "Продвинутый курс по JavaScript. React, Node.js и современные практики разработки.",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop",
    difficulty: "продвинутый",
    duration: "5 месяцев",
    category: "programming",
    audience: "adults",
    price: 54900,
    instructor: "Сергей Волков",
    rating: 4.8,
    studentsCount: 743,
  },
  {
    id: "6",
    title: "Scratch: первые шаги в программировании",
    description: "Визуальное программирование для детей от 7 лет. Создавайте игры и анимации!",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop",
    difficulty: "начинающий",
    duration: "2 месяца",
    category: "programming",
    audience: "children",
    price: 14900,
    instructor: "Анна Белова",
    rating: 5.0,
    studentsCount: 3456,
  },
  {
    id: "7",
    title: "Генеративный AI и ChatGPT",
    description: "Научитесь эффективно использовать AI-инструменты для работы и творчества.",
    image: "https://images.unsplash.com/photo-1677691820099-a6e8040aa077?w=400&h=300&fit=crop",
    difficulty: "средний",
    duration: "1 месяц",
    category: "ai",
    audience: "adults",
    price: 19900,
    instructor: "Игорь Новиков",
    rating: 4.6,
    studentsCount: 2109,
  },
  {
    id: "8",
    title: "Unity для создания игр",
    description: "Разработка 3D-игр на движке Unity с нуля до публикации в магазинах.",
    image: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=300&fit=crop",
    difficulty: "средний",
    duration: "6 месяцев",
    category: "3d",
    audience: "adults",
    price: 49900,
    instructor: "Павел Морозов",
    rating: 4.7,
    studentsCount: 654,
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Как я стал Python-разработчиком за 6 месяцев",
    snippet: "Делюсь своим опытом перехода из менеджмента в IT. Какие ресурсы использовал, сколько времени тратил на обучение...",
    content: `Привет всем! Меня зовут Андрей, и я хочу рассказать свою историю перехода в IT.

Ещё год назад я работал менеджером по продажам, но всегда интересовался технологиями. Решение сменить профессию далось непросто, но я ни разу не пожалел.

## С чего я начал

Первым делом я составил план обучения. Изучил рынок курсов и выбрал несколько проверенных ресурсов. Начал с основ Python — синтаксис, типы данных, функции.

## Ежедневная практика

Каждый день я уделял программированию минимум 2-3 часа. Выходные полностью посвящал проектам. Это было непросто совмещать с основной работой, но результат того стоил.

## Первый проект

Через 3 месяца я создал свой первый полноценный проект — телеграм-бота для учёта расходов. Это дало мне огромный заряд мотивации продолжать.

## Итоги

Сейчас я работаю junior Python-разработчиком в IT-компании. Зарплата выросла на 40%, а главное — я занимаюсь тем, что мне действительно нравится.`,
    author: {
      name: "Андрей Смирнов",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    date: "12 декабря 2024",
    commentsCount: 42,
    readTime: "5 мин",
    tags: ["Python", "Карьера", "Обучение"],
  },
  {
    id: "2",
    title: "5 ошибок начинающих в 3D-моделировании",
    snippet: "Разбираем типичные ошибки новичков в Blender и как их избежать. Советы от практикующего 3D-художника...",
    content: `Всем привет! За 5 лет работы в 3D я видел множество работ начинающих и заметил типичные ошибки.

## Ошибка 1: Игнорирование топологии

Новички часто забывают о правильной топологии mesh. Это приводит к проблемам при анимации и рендеринге.

## Ошибка 2: Неправильное освещение

Хорошая модель может выглядеть плохо из-за неправильного света. Изучите основы трёхточечного освещения.

## Ошибка 3: Слишком сложные сцены

Не пытайтесь сразу создать шедевр. Начните с простых объектов и постепенно усложняйте.

## Ошибка 4: Отсутствие референсов

Всегда собирайте референсы перед началом работы. Это сэкономит время и улучшит результат.

## Ошибка 5: Пропуск UV-развёртки

UV-развёртка критически важна для текстурирования. Не пропускайте этот этап!`,
    author: {
      name: "Ольга Краснова",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    date: "10 декабря 2024",
    commentsCount: 28,
    readTime: "7 мин",
    tags: ["3D", "Blender", "Советы"],
  },
  {
    id: "3",
    title: "Нейросети: мифы и реальность",
    snippet: "Развенчиваем популярные мифы об искусственном интеллекте. Что действительно могут нейросети...",
    content: `Тема AI окружена множеством мифов. Давайте разберёмся, что правда, а что — преувеличение.

## Миф 1: AI заменит всех программистов

На самом деле AI — это инструмент, который помогает разработчикам работать эффективнее. Полностью заменить творческую работу он пока не может.

## Миф 2: Нейросети думают как люди

Нейросети не обладают сознанием. Они распознают паттерны и генерируют ответы на основе обучающих данных.

## Миф 3: Обучить нейросеть легко

Для качественного обучения нужны огромные объёмы данных, мощные компьютеры и экспертиза в области.

## Реальность

AI уже сейчас успешно применяется в медицине, финансах, творческих индустриях. И возможности только растут.`,
    author: {
      name: "Максим Лебедев",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    },
    date: "8 декабря 2024",
    commentsCount: 67,
    readTime: "6 мин",
    tags: ["AI", "Нейросети", "Технологии"],
  },
  {
    id: "4",
    title: "Как увлечь ребёнка программированием",
    snippet: "Практические советы для родителей. Какие инструменты использовать и как поддерживать интерес...",
    content: `Многие родители хотят познакомить детей с программированием, но не знают с чего начать.

## Начните с игр

Minecraft, Roblox — отличные платформы для первого знакомства с кодом. Дети учатся, играя.

## Визуальное программирование

Scratch, Blockly — позволяют создавать программы без написания кода. Это снижает порог входа.

## Не давите

Пусть ребёнок сам выбирает проекты. Поддерживайте его идеи, даже если они кажутся странными.

## Совместные проекты

Программируйте вместе! Это укрепляет связь и показывает, что учиться — это весело.`,
    author: {
      name: "Наталья Орлова",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
    date: "5 декабря 2024",
    commentsCount: 35,
    readTime: "4 мин",
    tags: ["Дети", "Образование", "Scratch"],
  },
];

export const comments: Comment[] = [
  {
    id: "1",
    author: {
      name: "Виктор Соколов",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
    content: "Отличная статья! Сам прошёл похожий путь, только за 8 месяцев. Главное — не сдаваться.",
    date: "12 декабря 2024",
    likes: 15,
    replies: [
      {
        id: "1-1",
        author: {
          name: "Андрей Смирнов",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        },
        content: "Спасибо! Полностью согласен — настойчивость решает.",
        date: "12 декабря 2024",
        likes: 8,
      },
    ],
  },
  {
    id: "2",
    author: {
      name: "Елена Воронова",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    },
    content: "А какие курсы вы проходили? Можете поделиться ссылками?",
    date: "12 декабря 2024",
    likes: 7,
    replies: [
      {
        id: "2-1",
        author: {
          name: "Андрей Смирнов",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        },
        content: "Конечно! Основной был курс Python здесь на платформе, плюс документация и YouTube-туториалы.",
        date: "12 декабря 2024",
        likes: 12,
      },
    ],
  },
  {
    id: "3",
    author: {
      name: "Михаил Кузнецов",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    },
    content: "Вдохновляет! Тоже думаю о смене профессии. Спасибо за мотивацию!",
    date: "11 декабря 2024",
    likes: 23,
  },
];

export const categories = [
  { id: "programming", label: "Программирование", icon: "Code" },
  { id: "ai", label: "Искусственный интеллект", icon: "Brain" },
  { id: "3d", label: "3D-моделирование", icon: "Box" },
  { id: "robotics", label: "Робототехника", icon: "Bot" },
];

export const audiences = [
  { id: "children", label: "Детям" },
  { id: "adults", label: "Взрослым" },
];
