import { Navigate } from 'react-router-dom'
import { useAuthStore } from '../assets/authStore'

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuthStore()

  if (loading) return <div>Loading...</div>

  if (!user) return <Navigate to="/login" replace />

  return children
}
