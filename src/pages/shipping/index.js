import React from "react";
import styled from "@emotion/styled";
import Layout from "@/components/Layouts/DefaultLayout";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import FlexBox from "@/components/MDSpacer/MDSpacer";
import MDBox from "@/components/MDBox";
import SubHeaderTypography from "@/components/Typography/SubHeaderTypography";
import HeaderTypography from "@/components/Typography/HeaderTypography";
import ButtonTypography from "@/components/Typography/ButtonTYpography";


function Shipfront() {
  return (
    <Layout>
      <FlexBox flexDirection="row" justifyContent="space-between" mt="70px">
        
        <MDBox>
          <ButtonTypography marginLeft="160px" marginTop="200px">
            <Link href="/shipping/shipfront">
              <AddIcon fontSize="large" />
            </Link>
          </ButtonTypography>
          <HeaderTypography marginLeft="120px">
            <Link href="/shipping/shipfront">Add Shipping Address</Link>
          </HeaderTypography>
        </MDBox>
        
        
        <MDBox fontSize="10px">
          <HeaderTypography marginLeft="500px">Default</HeaderTypography>
          
          <SubHeaderTypography>John Doe</SubHeaderTypography>
          <SubHeaderTypography>Star Building</SubHeaderTypography>
          <SubHeaderTypography>Mettur Dam,Salem</SubHeaderTypography>
          <SubHeaderTypography>Tamil Nadu - 636001</SubHeaderTypography>
          <SubHeaderTypography>INDIA</SubHeaderTypography>
          <SubHeaderTypography>Ph No :- 9876543210</SubHeaderTypography>
          <HeaderTypography color="blue">
            Add Delivery Instruction
          </HeaderTypography>
          <SubHeaderTypography color="blue">Edit | Remove</SubHeaderTypography>
        </MDBox>
        <MDBox mt="31px" fontSize="10px" mr="150px">
         <SubHeaderTypography>John Doe</SubHeaderTypography>
          <SubHeaderTypography>Anbagam</SubHeaderTypography>
          <SubHeaderTypography>Alagapuram,Salem</SubHeaderTypography>
          <SubHeaderTypography>Tamil Nadu - 636004</SubHeaderTypography>
          <SubHeaderTypography>INDIA</SubHeaderTypography>
          <SubHeaderTypography>Ph No :- 9876543210</SubHeaderTypography>
          <HeaderTypography color="blue">
            Add Delivery Instruction
          </HeaderTypography>
          <SubHeaderTypography color="blue">Edit | Remove</SubHeaderTypography>
         
        </MDBox>
      </FlexBox>
      <FlexBox flexDirection="row" justifyContent="space-between">
        <MDBox>
          <ButtonTypography marginLeft="160px" marginTop="200px">
            <Link href="/shipping/shipbill">
              <AddIcon fontSize="large" />
            </Link>
          </ButtonTypography>
          <HeaderTypography marginLeft="120px">
            <Link href="/shipping/shipbill">Add Billing Address</Link>
          </HeaderTypography>
        </MDBox>

        <MDBox fontSize="10px">
          <HeaderTypography marginLeft="500px">Default</HeaderTypography>
          <SubHeaderTypography>John Doe</SubHeaderTypography>
          <SubHeaderTypography>Star Building</SubHeaderTypography>
          <SubHeaderTypography>Mettur Dam,Salem</SubHeaderTypography>
          <SubHeaderTypography>Tamil Nadu - 63600</SubHeaderTypography>
          <SubHeaderTypography>INDIA</SubHeaderTypography>
          <SubHeaderTypography>Ph No :- 987654320</SubHeaderTypography>
          <HeaderTypography color="blue">
            Add Delivery Instruction
          </HeaderTypography>
          <SubHeaderTypography color="blue">Edit | Remove</SubHeaderTypography>
        </MDBox>

        <MDBox fontSize="10px" mr="150px" mt="35px">
          <SubHeaderTypography>John Doe</SubHeaderTypography>
          <SubHeaderTypography>Anbagam</SubHeaderTypography>
          <SubHeaderTypography>Alagapuram,Salem</SubHeaderTypography>
          <SubHeaderTypography>Tamil Nadu - 636004</SubHeaderTypography>
          <SubHeaderTypography>INDIA</SubHeaderTypography>
          <SubHeaderTypography>Ph No :- 9876543210</SubHeaderTypography>
          <HeaderTypography color="blue">
            Add Delivery Instruction
          </HeaderTypography>
          <SubHeaderTypography color="blue">Edit | Remove</SubHeaderTypography>
        </MDBox>
      </FlexBox>
    </Layout>
  );
}

export default Shipfront;
