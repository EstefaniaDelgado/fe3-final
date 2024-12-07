import React, { useState } from 'react';
import { validateForm } from './utils/validation'; 
import styles from './Form.module.css'; 

const Form = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const { errors: newErrors, isValid } = validateForm(formData);

    setErrors(newErrors);

    if (!isValid) {
      setGeneralError('Por favor verifique su información nuevamente');
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
      <form className={styles.form} onSubmit={handleSubmit}>
        <p className={styles.formTitle}>Contáctanos</p>
        <div className={styles.inputGeneralContainer}>
          <div className={styles.inputContainer}>
            <input
              placeholder="Nombre completo"
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
            />
            {errors.fullname && (
              <p className={styles.error}>{errors.fullname}</p>
            )}
          </div>
          <div className={styles.inputContainer}>
            <input
              placeholder="Correo electrónico"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className={styles.error}>{errors.email}</p>}
          </div>
          <button className={styles.submit} type="submit">
            Enviar
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
