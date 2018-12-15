import Api from '@/services/Api'

export default {
  contact (form) {
    return Api().post('contact', form)
  }
}
