import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "yup-phone";
import {
    ErrorNotif,
    InputboxEmail,
    InputboxName,
    InputboxPhone,
    PersonalForm
} from './styled/step1.styled';
import { Firstnextstepbtn, Hstack } from './styled/multistep.styled';

export const Step1 = (props) => {
    const formik = useFormik({
        initialValues: {
            Name: '',
            email: '',
            Phone: '',
        },
        validationSchema: Yup.object().shape({
            Name: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('This field is required'),
            email: Yup.string().matches()
                .email('Invalid email address')
                .required('This field is required'),
            Phone: Yup.string()
                .matches(/^[+]((\\[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                'Invalid phone number and must be preceded by +')
                .min(10, "Phone number is too short")
                .max(17, "Phone number is too long")
                .required('This field is required'),
        }),
        onSubmit: () => {
            props.handleNextPage();
        },
    });

  return (
    <PersonalForm onSubmit={formik.handleSubmit}>
        <h1>
            Personal info
        </h1>
        <h2>
            Please provide your name, email address, and phone number.
        </h2>
        <Hstack className='horizontal-align'>
            <label htmlFor='Name'>Name</label>
            {formik.touched.Name && formik.errors.Name ? (
                <ErrorNotif>{formik.errors.Name}</ErrorNotif>
            ) : null}
        </Hstack>
        <InputboxName
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.Name}
            style={formik.errors.Name && formik.touched.Name && {
                color: 'var(--Strawberry-red)',
                borderColor: 'var(--Strawberry-red)',
                borderWidth: '1px',
            }}
        />
        <Hstack className='horizontal-align'>
            <label htmlFor='Email'>Email Address</label>
            {formik.touched.email && formik.errors.email ? (
                <ErrorNotif>{formik.errors.email}</ErrorNotif>
            ) : null}
        </Hstack>
        <InputboxEmail
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            style={formik.errors.email && formik.touched.email && {
                color: 'var(--Strawberry-red)',
                borderColor: 'var(--Strawberry-red)',
                borderWidth: '1px',
            }}
        />
        <Hstack className='horizontal-align'>
            <label htmlFor='Phone'>Phone Number</label>
            {formik.touched.Phone && formik.errors.Phone ? (
                <ErrorNotif>{formik.errors.Phone}</ErrorNotif>
            ) : null}
        </Hstack>
        <InputboxPhone
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.Phone}
            style={formik.errors.Phone && formik.touched.Phone && {
                color: 'var(--Strawberry-red)',
                borderColor: 'var(--Strawberry-red)',
                borderWidth: '1px',
            }}
        />
        <Hstack className='firstbtnSpreader'>
            <btn/>
            <Firstnextstepbtn type='submit'>
                Next Step
            </Firstnextstepbtn>
        </Hstack>
    </PersonalForm>
  )
}
