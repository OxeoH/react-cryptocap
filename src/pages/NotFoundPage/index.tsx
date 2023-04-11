import React from 'react'
import { DASHBOARD_ROUTE } from '../../utils/consts'
import { useNavigate } from 'react-router-dom'

export const NotFoundPage = () => {
  const navigate = useNavigate()

  React.useEffect(() => {
    setTimeout(() => {
      navigate(DASHBOARD_ROUTE)
    }, 4000)
  }, [])
  return (
    <div>
      Oops...Page not found
      <br />
      Now you will be redirected to dashboard
    </div>
  )
}
