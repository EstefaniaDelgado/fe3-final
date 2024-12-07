// Valida un campo específico
export const validateField = (fieldName, value) => {
    let error = '';
  
    if (fieldName === 'fullname') {
      if (value.trim().length <= 5) {
        error = 'El nombre debe contener más de 5 caracteres';
      } else if (/\d/.test(value)) {
        error = 'El nombre no puede contener números';
      }
    }
  
    if (fieldName === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      error = emailRegex.test(value) ? '' : 'Correo inválido';
    }
  
    return error;
  };
  
  // Valida todos los campos del formulario
  export const validateForm = (formData) => {
    const errors = {
      fullname: validateField('fullname', formData.fullname),
      email: validateField('email', formData.email),
    };
  
    const isValid = Object.values(errors).every((error) => error === '');
    return { errors, isValid };
  };
  