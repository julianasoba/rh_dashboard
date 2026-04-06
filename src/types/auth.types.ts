export type UserRole = 'admin' | 'manager' | 'employee';

export interface AuthUser {
  uid: string;
  email: string | null;
  name: string | null;
  role: UserRole;
}