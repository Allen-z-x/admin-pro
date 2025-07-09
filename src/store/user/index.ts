import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { userLogin, refreshUserInfo } from '@/api/user'
import router from '@/router'

export interface UserState {
  username: string
  accessToken: string
  refreshToken?: string
  roles: Array<string>
}
export interface LoginRequest {
  username: string
  password: string
}

export const useUserStore = defineStore(
  'userInfo',
  () => {
    const userState: UserState = reactive({
      username: 'Allen',
      accessToken: '',
      roles: ['common']
    })
    const storeUserLogin = (data: LoginRequest) => {
      return userLogin(data).then((res) => {
        userState.username = res.data.username
        userState.roles = res.data.roles
        userState.accessToken = res.data.accessToken
        return res.data
      })
    }
    const storeRefreshUserInfo = () => {
      if (userState.username == 'Allen' && userState.accessToken != '') {
        refreshUserInfo({
          accessToken: userState.accessToken
        })
          .then((res) => {
            userState.username = res.data.username
            userState.roles = res.data.roles
            userState.accessToken = res.data.accessToken
          })
          .catch(() => {
            userState.accessToken = ''
          })
      }
    }
    const logout = () => {
      sessionStorage.removeItem('userInfo')
      userState.accessToken = ''
      router.push('/login')
    }
    return {
      userState,
      storeUserLogin,
      storeRefreshUserInfo,
      logout
    }
  },
  {
    persist: {
      key: 'userInfo',
      storage: sessionStorage,
      pick: ['userState.accessToken'] // 只持久化 accessToken
    }
  }
)
