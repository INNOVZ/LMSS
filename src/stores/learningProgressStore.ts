// stores/progressStore.ts
interface ProgressState {
    courseProgress: Record<string, CourseProgress>;
    lessonProgress: Record<string, LessonProgress>;
    certificates: Certificate[];
    achievements: Achievement[];
    isLoading: boolean;
    
    // Progress tracking
    updateLessonProgress: (lessonId: string, progress: number) => Promise<void>;
    markLessonComplete: (lessonId: string) => Promise<void>;
    getCourseProgress: (courseId: string) => Promise<void>;
    
    // Achievements
    fetchAchievements: () => Promise<void>;
    fetchCertificates: () => Promise<void>;
    
    // Study time tracking
    startStudySession: (courseId: string, lessonId: string) => void;
    endStudySession: () => Promise<void>;
  }