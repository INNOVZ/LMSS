// stores/courseStore.ts
interface CourseState {
    courses: Course[];
    currentCourse: Course | null;
    enrolledCourses: Course[];
    createdCourses: Course[]; // for instructors
    categories: Category[];
    isLoading: boolean;
    error: string | null;
    
    // Course discovery
    fetchCourses: (filters?: CourseFilters) => Promise<void>;
    searchCourses: (query: string) => Promise<void>;
    getCourseById: (id: string) => Promise<void>;
    
    // Course management
    createCourse: (data: CreateCourseData) => Promise<void>;
    updateCourse: (id: string, data: UpdateCourseData) => Promise<void>;
    deleteCourse: (id: string) => Promise<void>;
    
    // Enrollment
    enrollInCourse: (courseId: string) => Promise<void>;
    unenrollFromCourse: (courseId: string) => Promise<void>;
    fetchEnrolledCourses: () => Promise<void>;
    
    // Categories
    fetchCategories: () => Promise<void>;
  }