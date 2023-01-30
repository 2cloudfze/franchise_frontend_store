
import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  );
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 35%;
  padding: 30px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  margin-top: 20px;
  padding: 15px 20px;
  background-color: #d3f2f2;
  color: black;
  cursor: pointer;
  border-radius: 15px;
`;

const Link1 = styled.a`
  margin: 5px 0px;
  margin-top: 20px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

function Login() {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input type="password" placeholder="password" />
          <Button>LOGIN</Button>
          <Link1><Link href='/register'>CREATE A NEW ACCOUNT</Link></Link1>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Login;
