import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components/";
import "../styles/signup.css";
import ThankYou from "./ThankYou";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { name, email } = data;
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const email_regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    console.log({ e });
    setIsSubmitted(true);
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/nivo/google_sheets/rpRmEOzQUiakvjuT?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [e.name, e.email, new Date().toLocaleString()],
          ]),
        }
      );
      await response.json();
      setData({ ...data, name: "", email: "" });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Main>
      <Newsletter>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Sign in to our newsletter</h1>
            <Input
              placeholder="Your name"
              style={{
                fontWeight: "italic",
                color: "#000",
              }}
              {...register("name", {
                required: true,
                minLength: { value: 2, message: "Please enter a valid name" },
                id: { name },
                pattern: {},
                onChange: { handleChange },
              })}
            />

            {errors.name && <span role="alert">{errors.name.message}</span>}

            <Input
              placeholder="Your email"
              style={{
                fontWeight: "italic",
                color: "#000",
              }}
              {...register("email", {
                required: true,
                minLength: {
                  value: 8,
                  message: "Please enter a valid email",
                },
                id: { email },
                pattern: {
                  value: email_regex,
                  message: "Please enter a valid email",
                },
                onChange: { handleChange },
              })}
            />

            {errors.email && <span role="alert">{errors.email.message}</span>}
            <Button type="submit" />
          </form>
        ) : (
          <ThankYou />
        )}
      </Newsletter>
    </Main>
  );
};

export default SignUp;

const Newsletter = styled.div`
  display: flex;
  flex: 1;
`;
const Main = styled.div`
  display: flex;
  position: relative;
  width: 80vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Button = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: large;
  border-radius: 10px;
  color: black;
  z-index: 11;
`;
const Input = styled.input`
  font-size: large;
  border-radius: 10px;
  color: white;
  width: 80%;
  height: 20px;
  z-index: 11;
  position: relative;

  @media only screen and (max-width: 1200px) {
    width: 80% !important;
  }
`;
