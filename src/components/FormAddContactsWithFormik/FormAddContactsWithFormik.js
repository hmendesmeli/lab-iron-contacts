import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Mínimo de 3 caracteres')
    .max(100, 'Máximo de 100 caracteres')
    .required('Campo obrigatório'),
  
  pictureUrl: Yup.string()
    .url('Formato Inválido')
    .required('Campo Obrigatório'),

  popularity: Yup.number()
    .positive('Value can\'t be negative')
    .min(0)
    .max(10, 'Popularity can\'t be higher than 10')
    .required('Campo Obrigatório'),
});


const FormAddContactsWithFormik = props => {
  // CONFIGURAÇÃO DO FORMIK!!!
  const { handleSubmit, handleChange, handleBlur, values, setFieldValue, setFieldTouched, errors, touched } = useFormik({
    initialValues: {
      name: '',
      pictureUrl: '',
      popularity: 0,
    },
    onSubmit: addNewCustonContact,
    validationSchema: formSchema,
  });

  function addNewCustonContact(values) {
    console.log('CHAMOU A CRIACAO DO NOVO CONTATO!!!!!')
    const { name, pictureUrl, popularity } = values;

    props.addNewContact(name, pictureUrl, popularity);

    setFieldValue('name', '');
    setFieldTouched('name', false);

    setFieldValue('pictureUrl', '');
    setFieldTouched('pictureUrl', false);

    setFieldValue('popularity', 0);
    setFieldTouched('popularity', false);
  }
  
  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationFormik01">
          <Form.Label>Contact Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={touched.name && errors.name}
          />
          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationFormik01">
          <Form.Label>Contact Picture URL</Form.Label>
          <Form.Control
            type="text"
            name="pictureUrl"
            value={values.pictureUrl}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={touched.pictureUrl && errors.pictureUrl}
          />
          <Form.Control.Feedback type="invalid">{errors.pictureUrl}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationFormik01">
          <Form.Label>Contact Popularity</Form.Label>
          <Form.Control
            type="text"
            name="popularity"
            value={values.popularity}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={touched.popularity && errors.popularity}
          />
          <Form.Control.Feedback type="invalid">{errors.popularity}</Form.Control.Feedback>
        </Form.Group>

        <Button type="submit">Criar Contact</Button>
      </Form.Row>
    </Form>
  );
};

export default FormAddContactsWithFormik;
