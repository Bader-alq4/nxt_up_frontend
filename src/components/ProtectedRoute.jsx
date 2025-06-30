import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function ProtectedRoute({ children, requiredRole }) {
  const { user } = useContext(AuthContext);

  if (!user) return <Navigate to="/login" />;

  // ✅ Enforce admin-only access for admin routes
  if (requiredRole === 'admin' && !user.is_admin) {
    return <Navigate to="/dashboard" />;
  }

  // ✅ Prevent admins from accessing player-only pages
  if (!requiredRole && user.is_admin) {
    return <Navigate to="/admin" />;
  }

  return children;
}

export default ProtectedRoute;
