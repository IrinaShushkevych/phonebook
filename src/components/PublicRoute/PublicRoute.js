//created by Irina Shushkevych
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { authUser } from '../../redux/Auth/auth-selector'
import { onError } from '../../utilits/messages'

export default function PublicRoute({
  redirectTo,
  restricted = false,
  element,
}) {
  const auth = useSelector(authUser)
  if (!redirectTo && restricted) {
    onError('No path for redirect')
    return <Navigate to="/" />
  }

  return <>{auth && restricted ? <Navigate to={redirectTo} /> : element}</>
}
