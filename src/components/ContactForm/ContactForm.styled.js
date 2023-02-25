
import styled from 'styled-components';


import { Form as FormikForm, ErrorMessage as FormikError } from 'formik';


export const Form=styled(FormikForm)`

display: flex;
gap:20px;
flex-direction: column;
width: 450px;
padding: 50px;
border: 1px solid black;
border-radius:4px;
margin:0 auto;
margin-top:50px

`
export const FormField =styled.label`
gap:4px;'
display: flex;
flex-direction: column;

`
export const ErrorMessage=styled(FormikError)`
color: red;
`
