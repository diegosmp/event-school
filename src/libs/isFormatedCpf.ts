export function isFormatedCpf (cpf:string):string {
    const cpfFormat = cpf.replace(/\D/g, '')
    return cpfFormat
}