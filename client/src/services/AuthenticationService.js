/* eslint-disable no-alert */
import Api from '@/services/Api'

export default{
  register (credentials) {
    return Api().post('register', credentials)
  }
}
