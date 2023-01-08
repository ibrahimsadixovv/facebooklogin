import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';

function Registerpage() {
  return (
      <div className='RegisterPage'>
  
  
  <div className='Register'>
    
  <img src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg'/>
  
  <div className='RegisterBottom'>
    <div className='registerText'>
<h1>Create a new account</h1>
<p>It’s quick and easy.</p>
</div>
  
       <Formik
         initialValues={{  firstName: '',lastName: '',email: '', password: '' }}
         validationSchema={Yup.object({

          firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
  
          email: Yup.string(),
           password: Yup.string()
             
  
         })}
         onSubmit={(values, { setSubmitting }) => {
           setTimeout(() => {
             alert(JSON.stringify(values, null, 2));
             setSubmitting(false);
           }, 400);
         }}
       >
         <Form>

<div className='names'>
        <label htmlFor="firstName"></label>
         <Field placeholder="First Name" name="firstName" type="text" />
         
 
         <label htmlFor="Surname"></label>
         <Field placeholder="Password" name="lastName" type="text" />
       

         </div>
  
         <label   htmlFor="email"></label>
           <Field placeholder="Email or phone number" name="email" type = "text" required pattern = "^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3})|(\d{3}-\d{3}-\d{4})$" />
         
  
           <label htmlFor="password"></label>
           <Field placeholder="New password" name="password" type="password" />


           <button type="submit" >Log in</button>
         </Form>
         
       </Formik>
       <div className='linksRegister'>
   <Link to="/Login" class="link" href="#"> Already have an account?</Link> 
   </div>
  </div>
  </div>
  
      </div>
    )
  }


export default Registerpage