export type RegistrationData = {
  firstNames: string
  lastNames: string
  documentId: string
  address: string
  phone: string
}

export default class FormModel {
  // connect a DB
  readonly saveRegistration = async (data: RegistrationData): Promise<boolean> => {
    console.log('Registration received:', data)
    return true
  }
}

