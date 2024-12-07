import { useState } from 'react';
import styles from './Form.module.css';

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setSubmitted(false);
    setGeneralError('');
  };

  const validateField = (fieldName, value) => {
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

  const validateForm = () => {
    const newErrors = {
      fullname: validateField('fullname', formData.fullname),
      email: validateField('email', formData.email),
    };

    setErrors(newErrors);

    const isValid = Object.values(newErrors).every((error) => error === '');
    if (!isValid) {
      setGeneralError('Por favor verifique su información nuevamente');
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setSubmitted(true);
    console.log(`Datos enviados: ${JSON.stringify(formData)}`);
    setFormData({
      fullname: '',
      email: '',
    });
    setErrors({});
  };

  return (
    <div className={styles.containerForm}>
      <form className={styles.form}>
        <p className={styles.formTitle}>Sign in to your account</p>
        <div className={styles.inputGeneralContainer}>
          <div className={styles.inputContainer}>
            <input
              placeholder="Enter Full Name"
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
            />
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </span>
            {errors.fullname && (
              <p className={styles.error}>{errors.fullname}</p>
            )}
          </div>
          <div className={styles.inputContainer}>
            <input
              placeholder="Enter email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <span>
              <svg
                stroke="currentColor"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
            </span>
            {errors.email && <p className={styles.error}>{errors.email}</p>}
          </div>

          <button
            className={styles.submit}
            type="submit"
            onClick={handleSubmit}
          >
            Send
          </button>
          {generalError && <p className={styles.errorGeneral}>{generalError}</p>}
        </div>
      </form>
      {submitted && (
        <p className={styles.success}>
          Gracias {formData.fullname}, te contactaremos cuando antes vía mail.
        </p>
      )}
    </div>
  );
};

export default Form;
