import React, { useState } from "react";
import styled from 'styled-components/';
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
import ThankYouContact from './ThankYouContact';
import ReCAPTCHA from "react-google-recaptcha";
import { ErrorMessage } from '@hookform/error-message';

import '../styles/form.css';
init("user_yEiGV7iy51IYDUTt6sCPm");


export const Contact = ()=> {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const message = watch('message') || "";
  const messageCharsLeft = 150 - message.length;
  const email_regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [contactNumber, setContactNumber] = useState("000000");
  console.log(watch("example"));

  const generateContactNumber = () => {
    const numStr = "000000" + (Math.random() * 1000000 | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  }

  const [isVerified, setIsVerified] = useState(false)

  const handleOnChange = (value)=>{
    console.log('ReCAPTCHA value: ', value );
    setIsVerified(true)
  }

  const onSubmit = data => {
    setIsSubmitted(true);
    generateContactNumber()
    sendForm('default_service', 'template_yyxyh5a' , '#contact-form')
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        // alert("Thank you for contact us!")
    }, function(error){
        console.log('FAILD...', error)
        
    })};
return (
  <>
          {!isSubmitted ?
                    
    <Div>
      <Title>Contact us</Title>
        <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" 
        name="contact_number" 
        value={contactNumber}
        />
          <Label>Your name: <br></br>
          {errors.user_name && errors.user_name.type === "required" && (
          <div className="error" role="alert">Name is required<br/></div>
          )}
            <input type="text" 
            
            {...register("user_name", { required: true ,
              minLength:{
                value:"2", 
                message:'Name is too short'
                }})}
            placeHolder="Name"
            maxLength='20'
            aria-invalid={errors.user_name ? "true" : "false"}/>
            <br></br>
            <ErrorMessage errors={errors} name="user_name" />
          </Label>
          <Label>Your email: <br></br>
            <input type="text" 
            {...register("user_email", { required: true,
                pattern:{
                  value: email_regex, 
                  message: 'Please enter a valid email'} })
              }
              placeholder="Email"
              aria-invalid={errors.user_name ? "true" : "false"}
              /><br></br>
              <ErrorMessage errors={errors} name="user_email" />
              </Label>
              <Label>Your message: <br></br>
              {errors.message && errors.message.type === "required" && (
              <div className="error" role="alert">Content is required<br/></div>
              )}
                <textarea type="textarea"
                  name="message"
                
                autoComplete="off"
                  maxLength="150"
                  placeholder="Your message"
                  {...register("message", { required: true })}
                  /> <br></br>             
                  <ErrorMessage errors={errors} name="message" />
                  <p className='message-chars-left'>{messageCharsLeft}</p>
              </Label>
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={handleOnChange}
            />
            <Input type="submit" disabled={!isVerified}/>
        </form>
    </Div>
    :
    <div align="center">
    <ThankYouContact /></div>
}
  </>
)
};
const Input = styled.input`
    font-size:large;
    border-radius: 10px;
    color:black;
    width:20%;
    z-index:11;
    height:20px;
    position:relative;

    @media ( max-width: 760px ){
        width: 45% !important; 
    }
`;
const Label = styled.label`
  z-index:11;
  font-size:20px;
  text-align:center;
  color:#000;
`;

const Div = styled.div`
  display:flex;
  position:relative;
  line-height:2em;
  flex-direction: column;
  justify-content:center;
  align-items:center;
`;

const Title = styled.h1`
  padding-top:10px;
  display:flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto Slab;
  font-size: 50px;
  `;
  