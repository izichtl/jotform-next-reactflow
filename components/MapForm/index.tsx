
'use client'
import React from 'react';
import axios from 'axios'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation';

// @ts-ignore
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { CellContainer, FormEmailContainer, ErrorMsg ,NameField, StyledForm, DayContainer, MountContainer, YearContainer, FormBirthContainer, StyledInput, SearchButton, ButtonsContainer, CancelButton } from './styles';

const MapForm = ({ setMapList }:any) => {
  const router = useRouter()
  async function getUserMaps(payload: any) {
    try {
      const response = await axios.post(`/api/map-handler`, payload)
      const data = response.data;
      return data
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      return {
        data: {
          success: false,
        },
      };
    }
  }




  const navigateUser = () => {
    formik.setErrors({})
    router.replace('/')
    // redirect('/')
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
    .email('Email inválido')
    .required('Requirido'),
    day: Yup.string()
    .min(2, 'Poucos dígitos')
    .max(2, 'Muito longo')
    .required('Requirido')
    .matches(
      /^[0-9]+$/,
      'Insira apenas números'
    ),
    mount: Yup.string()
    .min(2, 'Poucos dígitos')
    .max(2, 'Muito longo')
    .required('Requirido')
    .matches(
      /^[0-9]+$/,
      'Insira apenas números'
    ),
    year: Yup.string()
    .min(4, 'Poucos dígitos')
    .max(4, 'Muito longo')
    .required('Requirido')
    .matches(
      /^[0-9]+$/,
      'Insira apenas números'
    ),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      day: '',
      mount: '',
      year: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values: any) => {
      // Aqui você pode lidar com a submissão do formulário
      // console.debug('Valores submetidos:', values);
      const userMapsResponse = await getUserMaps(JSON.stringify(values))
      console.debug('resposta', userMapsResponse);
      setMapList(userMapsResponse)
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <FormEmailContainer>
        <CellContainer>
        <NameField htmlFor="email">Email:</NameField>
        <StyledInput
          type="email"
          id="email"
          name="email"
          error={formik.touched.email && formik.errors.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <ErrorMsg>{formik.errors.email}</ErrorMsg>
        ) : null}
        </CellContainer>
      </FormEmailContainer>
      <FormBirthContainer>
      <DayContainer>
      <CellContainer>
        <NameField htmlFor="day">Dia:</NameField>
        <StyledInput
          type="text"
          id="day"
          name="day"
          error={formik.touched.day && formik.errors.day}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.day}
        />
        {formik.touched.day && formik.errors.day ? (
          <ErrorMsg>{formik.errors.day}</ErrorMsg>
        ) : null}
        </CellContainer>
      </DayContainer>

      <MountContainer>
      <CellContainer>
        <NameField htmlFor="mount">Mês:</NameField>
        <StyledInput
          type="text"
          id="mount"
          name="mount"
          error={formik.touched.mount && formik.errors.mount}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.mount}
        />
        {formik.touched.mount && formik.errors.mount ? (
          <ErrorMsg>{formik.errors.mount}</ErrorMsg>
        ) : null}
        </CellContainer>
      </MountContainer>

      <YearContainer>
      <CellContainer>
        <NameField htmlFor="year">Ano:</NameField>
        <StyledInput
          type="text"
          id="year"
          name="year"
          error={formik.touched.year && formik.errors.year}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.year}
        />
        {formik.touched.year && formik.errors.year ? (
          <ErrorMsg>{formik.errors.year}</ErrorMsg>
        ) : null}
        </CellContainer>
      </YearContainer>
      </FormBirthContainer>
      <ButtonsContainer>
        <CancelButton type="button" onClick={navigateUser}>VOLTAR</CancelButton>
        <SearchButton type="submit">BUSCAR</SearchButton>
      </ButtonsContainer>
    </StyledForm>
  );
};

export default MapForm;
