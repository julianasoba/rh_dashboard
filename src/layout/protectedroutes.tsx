import { useAuth } from '@/hooks/useAuth';
import { Navigate, Outlet } from 'react-router';

export default function ProtectedRoute() {
  const { user, isLoading } = useAuth();

  if (isLoading) return <div>A carregar...</div>;
  if (!user) return <Navigate to="/login" replace />;

  return <Outlet />;
}