import React from 'react'
import "./styleLogin.css"
import { Link } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
 
function Loginpage() {
  return (
    <div className='loginPage'>


<div className='login'>
  
<img src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg'/>

<div className='loginBottom'>
<p>Log Into Facebook</p>


     <Formik
       initialValues={{  email: '', password: '' }}
       validationSchema={Yup.object({

        email: Yup.string().email('The email or mobile number you entered isn’t connected to an account. Create a new Facebook account.'),

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

       <label   htmlFor="email"></label>
         <Field placeholder="Email or phone number" name="email" type = "text" required pattern = "^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3})|(\d{3}-\d{3}-\d{4})$" />
         <ErrorMessage name="email" />

         <label htmlFor="password"></label>
         <Field placeholder="Password" name="password" type="password" />
         
 
         <button type="submit" >Log in</button>
       </Form>
     </Formik>
     <div className='links'>
 <Link to="/" class="link" href="#"> Forgot account?</Link>  <Link to="/Register" class="link" href="#"> Sign up for Facebook</Link> 
 </div>
</div>
</div>

    </div>
  )
}

export default Loginpage