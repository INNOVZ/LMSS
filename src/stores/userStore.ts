// stores/authStore.ts
interface AuthState {
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (credentials: LoginData) => Promise<void>;
  logout: () => void;
  register: (data: RegisterData) => Promise<void>;
  refreshAuth: () => Promise<void>;
  updateProfile: (data: ProfileUpdateData) => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (token: string, password: string) => Promise<void>;
}