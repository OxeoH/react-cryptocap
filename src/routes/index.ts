import { AuthPage } from '../pages/AuthPage'
import { CoinPage } from '../pages/CoinPage'
import { DashboardPage } from '../pages/DashboardPage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { ProfilePage } from '../pages/ProfilePage'
import { RegisterPage } from '../pages/RegisterPage'
import {
  LOGIN_ROUTE,
  COIN_ROUTE,
  REGISTER_ROUTE,
  PROFILE_ROUTE,
  DASHBOARD_ROUTE,
  NOTFOUND_ROUTE,
} from '../utils/consts'

export const authRoutes: RouteType[] = [
  {
    path: PROFILE_ROUTE,
    Component: ProfilePage,
  },
]

export const defaultRoutes: RouteType[] = [
  {
    path: LOGIN_ROUTE,
    Component: AuthPage,
  },
  {
    path: REGISTER_ROUTE,
    Component: RegisterPage,
  },
  {
    path: DASHBOARD_ROUTE,
    Component: DashboardPage,
  },
  {
    path: NOTFOUND_ROUTE,
    Component: NotFoundPage,
  },
  {
    path: COIN_ROUTE,
    Component: CoinPage,
  },
]

export type RouteType = {
  path: string
  Component: React.FC
}
