import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components/';
import '../styles/signup.css';


const SignUp = ({onSubmit}) => {
    const email_regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { register, handleSubmit, formState: {errors} } = useForm();
    
    const [ data, setData ] = useState({
        email:""
    })
    const { email } = data;
    
    const handleChange = (e) =>{
        setData({...data, email: e.target.value });
        
    }
    const onSubmit2= async (e)=>{

        onSubmit()
        try{   
            const response = await fetch(
                'https://v1.nocodeapi.com/nivo/google_sheets/rpRmEOzQUiakvjuT?tabId=Sheet1', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify([
                    [email, new Date().toLocaleString()],
                ])
            }
        )
        await response.json();
        setData({...data, email:''});

            }catch(error){
            console.log(error)
        }
    }
return (
<Main>
    <form noValidate onSubmit={handleSubmit(onSubmit2)}>
        <h1>Sign in to our newsletter</h1>
    <Input htmlFor="email" placeholder="Your email" style={{
            fontWeight: "italic",
            color: "#000"
          }}
     {...register('email', { 
        required: true ,
        name:"email",
        minLength: { value:8, message: 'Please enter a valid email'},
        id: { email } ,
        pattern:{
            value: email_regex, 
            message: 'Please enter a valid email'},
        onClick:{handleChange}
        }
        )} 
    />
    {errors.email && <span role="alert">{errors.email.message}</span>}          
    <Button type="submit" />
    </form>
</Main>
)
}

export default SignUp

const Main = styled.div`
    display:flex;
    position:relative;
    width:80vw;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Button = styled.input`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:large;
    border-radius: 10px;
    color:black;
    z-index:11;
`;
const Input = styled.input`
    font-size:large;
    border-radius: 10px;
    color:white;
    width:80%;
    height:20px;
    z-index:11;
    position:relative;

    @media only screen and ( max-width: 1200px ){
        width: 80% !important;
        
    }
`;