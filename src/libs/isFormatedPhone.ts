export function isFormatedPhone(tel: string):string {
    const phoneNumberFormated = tel.replace(/\D/g, '')
    return phoneNumberFormated
}