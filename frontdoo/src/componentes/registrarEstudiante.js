import React, { useState } from 'react';
import styled from 'styled-components';
import messages from './mensajes';

const RegistrationCard = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Select = styled.select`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
`;

const StudentRegistration = () => {
  const [formValues, setFormValues] = useState({
    documentType: '',
    documentNumber: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    birthDate: '',
    city: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formValues.documentType) newErrors.documentType = messages.documentTypeRequired;
    if (!formValues.documentNumber) newErrors.documentNumber = messages.documentNumberRequired;
    if (!formValues.firstName) newErrors.firstName = messages.firstNameRequired;
    if (!formValues.lastName) newErrors.lastName = messages.lastNameRequired;
    if (!formValues.email) newErrors.email = messages.emailRequired;
    if (!formValues.password) newErrors.password = messages.passwordRequired;
    if (!formValues.phone) newErrors.phone = messages.phoneRequired;
    if (!formValues.birthDate) newErrors.birthDate = messages.birthDateRequired;
    if (!formValues.city) newErrors.city = messages.cityRequired;
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Aquí va la lógica para enviar los datos al backend
      alert('Registro exitoso');
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <RegistrationCard>
      <h2>Registro de Estudiantes</h2>
      <Form onSubmit={handleSubmit}>
        <Label>
          Tipo Documento:
          <Select name="documentType" value={formValues.documentType} onChange={handleChange}>
            <option value="">Seleccione</option>
            <option value="cc">Cédula de Ciudadanía</option>
            <option value="ce">Cédula de Extranjería</option>
            <option value="pp">Pasaporte</option>
            {/* Agrega más opciones según sea necesario */}
          </Select>
          {errors.documentType && <ErrorMessage>{errors.documentType}</ErrorMessage>}
        </Label>
        <Label>
          Número Documento:
          <Input
            type="text"
            name="documentNumber"
            value={formValues.documentNumber}
            onChange={handleChange}
          />
          {errors.documentNumber && <ErrorMessage>{errors.documentNumber}</ErrorMessage>}
        </Label>
        <Label>
          Nombres:
          <Input
            type="text"
            name="firstName"
            value={formValues.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
        </Label>
        <Label>
          Apellidos:
          <Input
            type="text"
            name="lastName"
            value={formValues.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
        </Label>
        <Label>
          Correo Electrónico:
          <Input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </Label>
        <Label>
          Contraseña:
          <Input
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </Label>
        <Label>
          Teléfono:
          <Input
            type="tel"
            name="phone"
            value={formValues.phone}
            onChange={handleChange}
          />
          {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
        </Label>
        <Label>
          Fecha Nacimiento:
          <Input
            type="date"
            name="birthDate"
            value={formValues.birthDate}
            onChange={handleChange}
          />
          {errors.birthDate && <ErrorMessage>{errors.birthDate}</ErrorMessage>}
        </Label>
        <Label>
          Ciudad Residencia:
          <Input
            type="text"
            name="city"
            value={formValues.city}
            onChange={handleChange}
          />
          {errors.city && <ErrorMessage>{errors.city}</ErrorMessage>}
        </Label>
        <Button type="submit">Registrar</Button>
      </Form>
    </RegistrationCard>
  );
};

export default StudentRegistration;
