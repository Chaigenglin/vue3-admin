export interface userInfoType {
  role: []
  _id: string
  username: string
  title: string
  avatar: string
  permission: {
    menus: string[]
    points: string[]
  }
}
