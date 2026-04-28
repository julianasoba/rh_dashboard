import Loader from "@/components/loader";
import { useAuth } from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router";

export default function ProtectedRoute() {
  const { user, isLoading } = useAuth();

  if (isLoading)
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  if (!user) return <Navigate to="/login" replace />;

  return <Outlet />;
}
