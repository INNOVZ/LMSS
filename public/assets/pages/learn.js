// Mock data for the learning platform

export const categories = [
    { id: 1, name: 'Web Development', icon: '💻', courseCount: 245 },
    { id: 2, name: 'Data Science', icon: '📊', courseCount: 189 },
    { id: 3, name: 'Mobile Development', icon: '📱', courseCount: 156 },
    { id: 4, name: 'Design', icon: '🎨', courseCount: 134 },
    { id: 5, name: 'Business', icon: '💼', courseCount: 298 },
    { id: 6, name: 'Marketing', icon: '📢', courseCount: 167 },
    { id: 7, name: 'Photography', icon: '📸', courseCount: 89 },
    { id: 8, name: 'Music', icon: '🎵', courseCount: 112 }
  ]; 
  
  export const courses = [
    {
      id: 1,
      title: 'Complete React Developer Course',
      instructor: 'John Smith',
      instructorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      price: 89.99,
      originalPrice: 199.99,
      rating: 4.8,
      reviews: 15420,
      students: 89340,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Web Development',
      level: 'Beginner',
      duration: '42 hours',
      lastUpdated: '2024-01-15',
      bestseller: true,
      description: 'Master React development from scratch with this comprehensive course covering hooks, context, routing, and modern React patterns.',
      learningPoints: [
        'Build modern React applications from scratch',
        'Master React Hooks and Context API',
        'Learn React Router for navigation',
        'Implement state management with Redux',
        'Deploy React apps to production'
      ],
      curriculum: [
        {
          title: 'Getting Started with React',
          lectures: 12,
          duration: '2h 30m',
          lessons: [
            { title: 'What is React?', duration: '15m', type: 'video' },
            { title: 'Setting up Development Environment', duration: '20m', type: 'video' },
            { title: 'Your First React Component', duration: '25m', type: 'video' }
          ]
        },
        {
          title: 'React Fundamentals',
          lectures: 18,
          duration: '4h 15m',
          lessons: [
            { title: 'JSX and Components', duration: '30m', type: 'video' },
            { title: 'Props and State', duration: '35m', type: 'video' },
            { title: 'Event Handling', duration: '25m', type: 'video' }
          ]
        }
      ],
      requirements: [
        'Basic JavaScript knowledge',
        'HTML and CSS fundamentals',
        'Text editor (VS Code recommended)'
      ],
      targetAudience: [
        'Beginners wanting to learn React',
        'JavaScript developers looking to expand skills',
        'Anyone interested in modern web development'
      ]
    },
    {
      id: 2,
      title: 'Data Science with Python',
      instructor: 'Sarah Johnson',
      instructorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b9c2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      price: 94.99,
      originalPrice: 179.99,
      rating: 4.9,
      reviews: 8920,
      students: 45280,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Data Science',
      level: 'Intermediate',
      duration: '38 hours',
      lastUpdated: '2024-02-01',
      bestseller: false,
      description: 'Learn data science fundamentals with Python, including pandas, numpy, matplotlib, and machine learning basics.',
      learningPoints: [
        'Master Python for data analysis',
        'Work with pandas and numpy',
        'Create visualizations with matplotlib',
        'Build machine learning models',
        'Handle real-world datasets'
      ],
      curriculum: [
        {
          title: 'Python Fundamentals for Data Science',
          lectures: 15,
          duration: '3h 20m',
          lessons: [
            { title: 'Python Basics Review', duration: '18m', type: 'video' },
            { title: 'Working with Lists and Dictionaries', duration: '22m', type: 'video' }
          ]
        }
      ],
      requirements: [
        'Basic Python programming knowledge',
        'High school level mathematics',
        'Python 3.x installed'
      ],
      targetAudience: [
        'Python developers interested in data science',
        'Analysts wanting to learn programming',
        'Students pursuing data science careers'
      ]
    },
    {
      id: 3,
      title: 'iOS App Development with Swift',
      instructor: 'Michael Chen',
      instructorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      price: 129.99,
      originalPrice: 249.99,
      rating: 4.7,
      reviews: 6750,
      students: 32180,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Mobile Development',
      level: 'Beginner',
      duration: '55 hours',
      lastUpdated: '2024-01-28',
      bestseller: true,
      description: 'Build iOS apps from scratch using Swift and Xcode. Learn UIKit, SwiftUI, and publish to the App Store.',
      learningPoints: [
        'Master Swift programming language',
        'Build iOS apps with UIKit and SwiftUI',
        'Work with iOS frameworks',
        'Publish apps to App Store',
        'Implement modern iOS features'
      ],
      curriculum: [
        {
          title: 'Swift Fundamentals',
          lectures: 20,
          duration: '4h 45m',
          lessons: [
            { title: 'Introduction to Swift', duration: '25m', type: 'video' },
            { title: 'Variables and Constants', duration: '20m', type: 'video' }
          ]
        }
      ],
      requirements: [
        'Mac computer with Xcode',
        'Basic programming concepts',
        'Apple Developer account (for publishing)'
      ],
      targetAudience: [
        'Beginners wanting to learn iOS development',
        'Developers switching to iOS',
        'Anyone interested in mobile app development'
      ]
    },
    {
      id: 4,
      title: 'UI/UX Design Masterclass',
      instructor: 'Emma Davis',
      instructorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      price: 79.99,
      originalPrice: 159.99,
      rating: 4.6,
      reviews: 12340,
      students: 67890,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Design',
      level: 'Beginner',
      duration: '32 hours',
      lastUpdated: '2024-02-10',
      bestseller: false,
      description: 'Learn UI/UX design principles, user research, prototyping, and create stunning digital experiences.',
      learningPoints: [
        'Master design thinking process',
        'Create user personas and journey maps',
        'Design wireframes and prototypes',
        'Learn color theory and typography',
        'Build a professional portfolio'
      ],
      curriculum: [
        {
          title: 'Design Fundamentals',
          lectures: 14,
          duration: '2h 55m',
          lessons: [
            { title: 'What is UX Design?', duration: '18m', type: 'video' },
            { title: 'Design Thinking Process', duration: '25m', type: 'video' }
          ]
        }
      ],
      requirements: [
        'No prior design experience needed',
        'Design software (Figma, Sketch, or Adobe XD)',
        'Creative mindset'
      ],
      targetAudience: [
        'Beginners interested in design',
        'Developers wanting to learn design',
        'Career changers entering UX field'
      ]
    }
  ];
  
  export const featuredCourses = courses.slice(0, 3);
  
  export const instructors = [
    {
      id: 1,
      name: 'John Smith',
      title: 'Senior React Developer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      rating: 4.8,
      students: 89340,
      courses: 12,
      bio: 'John is a senior React developer with 8+ years of experience building scalable web applications.',
      expertise: ['React', 'JavaScript', 'Node.js', 'TypeScript']
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      title: 'Data Scientist',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b9c2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      rating: 4.9,
      students: 45280,
      courses: 8,
      bio: 'Sarah is a data scientist with expertise in machine learning and statistical analysis.',
      expertise: ['Python', 'Machine Learning', 'Statistics', 'Data Analysis']
    }
  ];
  
  export const reviews = [
    {
      id: 1,
      courseId: 1,
      user: 'Alex Thompson',
      userImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      rating: 5,
      comment: 'Excellent course! John explains everything clearly and the projects are really helpful.',
      date: '2024-01-20',
      helpful: 45
    },
    {
      id: 2,
      courseId: 1,
      user: 'Maria Garcia',
      userImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b9c2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      rating: 4,
      comment: 'Great content and well structured. Would love to see more advanced topics.',
      date: '2024-01-15',
      helpful: 32
    }
  ];
  
  export const users = [
    {
      id: 1,
      name: 'Alex Thompson',
      email: 'alex@example.com',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      role: 'student',
      enrolledCourses: [1, 2],
      wishlist: [3, 4],
      cart: [],
      completedCourses: [],
      progress: {
        1: { completed: 15, total: 42, percentage: 36 },
        2: { completed: 8, total: 28, percentage: 29 }
      }
    }
  ];
  
  // Mock current user
  export const currentUser = users[0];
  
  // Mock cart data
  export const cartItems = [];
  
  // Mock wishlist data
  export const wishlistItems = [3, 4];
  
  // Mock learning progress
  export const learningProgress = {
    1: {
      courseId: 1,
      currentLesson: 'Your First React Component',
      currentSection: 'Getting Started with React',
      completedLessons: 15,
      totalLessons: 42,
      percentage: 36,
      lastWatched: '2024-01-25',
      timeSpent: '12h 30m'
    },
    2: {
      courseId: 2,
      currentLesson: 'Working with Lists and Dictionaries',
      currentSection: 'Python Fundamentals for Data Science',
      completedLessons: 8,
      totalLessons: 28,
      percentage: 29,
      lastWatched: '2024-01-22',
      timeSpent: '8h 15m'
    }
  };
  
  // Mock notifications
  export const notifications = [
    {
      id: 1,
      type: 'course_update',
      title: 'New lesson added to React Course',
      message: 'John Smith added a new lesson: "Advanced React Patterns"',
      date: '2024-01-25',
      read: false
    },
    {
      id: 2,
      type: 'achievement',
      title: 'Milestone reached!',
      message: 'You completed 25% of the Data Science course',
      date: '2024-01-22',
      read: false
    }
  ];
  
  // Mock search suggestions
  export const searchSuggestions = [
    'React',
    'JavaScript',
    'Python',
    'Data Science',
    'Machine Learning',
    'UI/UX Design',
    'Mobile Development',
    'Web Development'
  ];
  
  // Mock promotional banners
  export const promotionalBanners = [
    {
      id: 1,
      title: 'New Year Sale',
      subtitle: 'Up to 80% off on all courses',
      cta: 'Shop Now',
      image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      active: true
    }
  ];