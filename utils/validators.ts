export const isValidEmail = (email: string): boolean => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  };
  
  export const isValidPhone = (phone: string): boolean => {
    const re = /^\d{9}$/;
    return re.test(phone);
  };
  
  export const isValidDNI = (dni: string): boolean => {
    const re = /^\d{8}$/;
    return re.test(dni);
  };
  