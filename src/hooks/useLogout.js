import { useAuthContext } from './useAuthContext'
import { useWorkoutsContext } from './useWorkoutsContext'

export const useLogout = () => {
  const { dispatch: AuthDispatch } = useAuthContext()
  const { dispatch: WorkoutsDispatch } = useWorkoutsContext()

  const logout = () => {
    // remove user from local storage
    localStorage.removeItem('user')

    // dispatch logout action
    AuthDispatch({type: 'LOGOUT'})
    WorkoutsDispatch({type: 'SET_WORKOUTS', payload: null})
  }
  return {logout}
}