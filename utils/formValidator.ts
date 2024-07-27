export const emailValidator = (email: string) => {
    return email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
}

export const confirmPasswordMatch = (password: string, confirmPassword: string) => {
    return password === confirmPassword;
}

