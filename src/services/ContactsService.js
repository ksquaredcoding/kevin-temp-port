import { api } from "./AxiosService.js"

class ContactsService {
  async contactMe(contactData) {
    await api.post("api/contacts", contactData)
  }
}

export const contactsService = new ContactsService()