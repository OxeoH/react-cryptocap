import { RootStore } from '..'
import { User } from './user.types'
import { makeAutoObservable } from 'mobx'

export default class UserStore {
  isAuth: boolean
  user: User
  rootStore: RootStore
  constructor(rootStore: RootStore) {
    this.isAuth = false
    this.user = { id: '', login: '' }
    this.rootStore = rootStore
    makeAutoObservable(this)
  }

  setIsAuth(value: boolean) {
    this.isAuth = value
  }

  setUser(user: User) {
    this.user = user
  }
}
