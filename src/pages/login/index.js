// import { useRouter } from "next/router";
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
  width: 30%;
  padding: 30px;
 background: white;
  border: 1px solid black;
  border-radius: 15px;
  
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
  // min-width: 10%;
  margin: 10px 0;
  padding: 10px;
  width: 200px;
  border-radius: 15px;
  border:none;
  border: 1px solid black
  
  
`;

const Button = styled.button`
  width: 15%;
  border: none;
  margin-top: 20px;
  padding: 15px 20px;
  background: linear-gradient(195deg, #1260a3, #1A73E8,#36c7c7);

  color: black;
  cursor: pointer;
  border-radius: 25px;
`;

const Link1 = styled.a`
  margin: 10px 0px;
  margin-top: 30px;
  font-size: 14px;
  // text-decoration: underline;
  cursor: pointer;
`;
// const router = useRouter();
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
          <Link href='/'>CONTINUE AS QUEST</Link>
          {/* <button onclick={() => router.push(`/`)}>CONTINUE AS QUEST</button> */}
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Login;