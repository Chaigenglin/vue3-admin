export interface LoginForm {
  username: string
  password: string
}

export const validatePassword = (rule: any, value: string | any[], callboack: any) => {
  if (value.length < 6) {
    callboack(new Error('密码不能少于6位'))
  } else {
    callboack()
  }
}
