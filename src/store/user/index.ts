import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { userLogin, refreshUserInfo } from '@/api/user'

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
        userState.username = res.username
        userState.roles = res.roles
        userState.accessToken = res.accessToken
        return res
      })
    }
    const storeRefreshUserInfo = () => {
      if (userState.username == 'Allen' && userState.accessToken != '') {
        refreshUserInfo({
          accessToken: userState.accessToken
        })
          .then((res) => {
            userState.username = res.username
            userState.roles = res.roles
            userState.accessToken = res.accessToken
          })
          .catch(() => {
            userState.accessToken = ''
          })
      }
    }
    return {
      userState,
      storeUserLogin,
      storeRefreshUserInfo
    }
  },
  {
    persist: {
      key: 'userInfo',
      storage: sessionStorage,
      pick: ['accessToken']
    }
  }
)
