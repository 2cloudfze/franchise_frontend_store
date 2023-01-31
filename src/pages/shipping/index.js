import React from 'react'
import styled from "@emotion/styled";
import Layout from "@/components/Layouts/DefaultLayout";
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link';

const Container = styled.div`
  background: white;
`

const Border = styled.div`
  flex: 1;
  margin-bottom: 50px;
  margin-top: 100px;
  margin-left: 60px;
  border-style: dashed;
  border-radius: 10px;
  padding: 20px;
  height: 40vh;
  width: 25%;
`

const Border1 = styled.div`
  flex: 1;
  margin-bottom: 50px;
  margin-top: -422px;
  margin-left: 500px;
  border: 0.5px solid #2a2a72;
  border-radius: 10px;
  cursor: pointer;
  padding: 20px;
  height: 40vh;
  width: 25%;
`

const Border2 = styled.div`
  flex: 1;
  margin-bottom: 50px;
  margin-top: -422px;
  margin-left: 950px;
  border: 0.5px solid #2a2a72;
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;
  height: 40vh;
  width: 25%;
`

const Title = styled.h2`
  font-weight: 200;
  font-size: 25px;
  margin-left: 100px;
  text-decoration: none;
`

const Head = styled.h3`
  font-weight: 100;
  font-size: 15px;
  margin-top: -5px;
  margin-left: 105px;
  `

const Para = styled.p`
  font-size: 20px;
  margin-left: 10px;
`

const Para1 = styled.p`
  font-size: 17px;
  margin-left: 10px;
`

const Para2 = styled.p`
  font-size: 18px;
  margin-left: 10px;
  color: blue;
  cursor: pointer;
`

const Para3 = styled.a`
  font-size: 19px;
  margin-left: 10px;
  margin-right: 10px;
  color: blue;
  cursor: pointer;
`

const Button = styled.button`
  width: 20%;
  padding: 9px;
  background-color: black;
  color: white;
  border-style: outset;
  button-size: 1200;
  cursor: pointer;
  margin-right: 10px;
  margin-left: 130px;
  margin-top: 90px;
  text-decoration: none;
`

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 2px;
`

const Main = styled.h2`
  margin-bottom: 40px;
  color: black;
  font-size: 23px;
  position: absolute;
  top: 20%;
  left: 29.5%;
  font: "15px Arial, sans-serif";
`

const Main1 = styled.h2`
  margin-bottom: 40px;
  background: white;
  color: black;
  font-size: 23px;
  position: absolute;
  top: 83%;
  left: 29.5%;
  font: "15px Arial, sans-serif";
`

function Shipfront() {
  return (
    <Layout>
      <Container>
        <Main>SHIPPING ADDRESS</Main>
        <Border>
            <Button><Link href='/shipping/shipfront'><AddIcon fontSize='large' /></Link></Button>
            <Title><Link href='/shipping/shipfront'>Add Address</Link></Title>
        </Border>

        <Border1>
            <Head>Default</Head>
            <Hr />
            <Para>John Doe</Para>
            <Para1>Star Building</Para1>
            <Para1>Mettur Dam,Salem</Para1>
            <Para1>Tamil Nadu  -  636001</Para1>
            <Para1>INDIA</Para1>
            <Para1>Ph No :-  9876543210</Para1>
            <Para2>Add Delivery Instruction</Para2>
            <Para3>Edit</Para3> | <Para3>Remove</Para3>
        </Border1>

        <Border2>
            <Para>John Doe</Para>
            <Para1>Anbagam</Para1>
            <Para1>Alagapuram,Salem</Para1>
            <Para1>Tamil Nadu  -  636004</Para1>
            <Para1>INDIA</Para1>
            <Para1>Ph No :-  9876543210</Para1>
            <Para2>Add Delivery Instruction</Para2>
            <Para3>Edit</Para3> | <Para3>Remove</Para3>
        </Border2>

        <Main1>BILLING ADDRESS</Main1>

        <Border>
            <Button><Link href='/shipping/shipbill'><AddIcon fontSize='large' /></Link></Button>
            <Title><Link href='/shipping/shipbill'>Add Address</Link></Title>
        </Border>

        <Border1>
            <Head>Default</Head>
            <Hr />
            <Para>John Doe</Para>
            <Para1>Star Building</Para1>
            <Para1>Mettur Dam,Salem</Para1>
            <Para1>Tamil Nadu  -  636001</Para1>
            <Para1>INDIA</Para1>
            <Para1>Ph No :-  9876543210</Para1>
            <Para2>Add Delivery Instruction</Para2>
            <Para3>Edit</Para3> | <Para3>Remove</Para3>
        </Border1>

        <Border2>
            <Para>John Doe</Para>
            <Para1>Anbagam</Para1>
            <Para1>Alagapuram,Salem</Para1>
            <Para1>Tamil Nadu  -  636004</Para1>
            <Para1>INDIA</Para1>
            <Para1>Ph No :-  9876543210</Para1>
            <Para2>Add Delivery Instruction</Para2>
            <Para3>Edit</Para3> | <Para3>Remove</Para3>
        </Border2>

      </Container>
    </Layout>
  )
}

export default Shipfront
