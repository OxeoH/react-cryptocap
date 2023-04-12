import { makeAutoObservable } from 'mobx'
import { RootStore } from '..'

export default class SortsStore {
  pageLimit: number
  offset: number
  page: number
  rootStore: RootStore
  constructor(rootStore: RootStore) {
    this.pageLimit = 10
    this.page = 0
    this.offset = 0
    this.rootStore = rootStore
    makeAutoObservable(this)
  }

  nextPage() {
    this.page = this.page + 1
    this.offset = this.page * this.pageLimit
  }

  prevPage() {
    if (this.page === 0) return
    this.page = this.page - 1
    this.offset = this.page * this.pageLimit
  }
}
