export function isValidEmail (email:string):boolean {
    const checkedEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm
    return checkedEmail.test(email)
}