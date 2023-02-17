import Link from "next/link";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmazonPay,
} from "react-icons/fa";
import Logo from "@/components/Logo";
import BodyDescTypography from "../Typography/BodyDescTypography";
import MDBox from "../MDBox";
import SubHeaderTypography from "../Typography/SubHeaderTypography";
export default function Footer() {
  return (
    <MDBox position="relative" width="100%"  marginTop="30px" bgColor="linear-gradient(195deg, #1260a3, #1A73E8, #36c7c7)">
      <MDBox display="flex" justifyContent="space-between" alignItems="center" padding="28px 10vw">
      
          

        
        <MDBox fontSize="12px">
        <Logo />
        </MDBox>
        <MDBox display="flex"  >
          <Link  href="/">
            <MDBox   padding="10px">
              <FaFacebookF color="#77A7FF" size="22px" />
              </MDBox>
          </Link>
          <Link  href="/">
          <MDBox   padding="10px">
              <FaTwitter color=" #00acee" size="22px" />
              </MDBox>
          </Link>
          <Link  href="/">
          <MDBox   padding="10px">
              <FaInstagram color="#d61341" size="22px" />
              </MDBox>
          </Link>
          <Link  href="/">
          <MDBox   padding="10px">
              <FaYoutube color="	#FF0000" size="22px" />
              </MDBox>
          </Link>
        </MDBox>
      </MDBox>
      <MDBox borderTop="2px solid #f5f5f5" display="flex" flexDirection="row">
        <MDBox display="flex" flexDirection="row"  mt="45px" mb="35px">
          <SubHeaderTypography fontSize="14px" lineHeight="60px" marginLeft="15px" marginRight="15px" >© 2023. Computron UI </SubHeaderTypography>
          <SubHeaderTypography fontSize="14px" lineHeight="60px" marginLeft="15px" marginRight="15px">Privacy Policy</SubHeaderTypography>
          <SubHeaderTypography fontSize="14px" lineHeight="60px" marginLeft="15px" marginRight="15px">Terms of Use</SubHeaderTypography>
        </MDBox>
        <MDBox borderBottom="2px solid #f5f5f5" display="flex" flexDirection="row" alignItems="center" ml="310px" mt="45px" mb="35px">
          <BodyDescTypography fontSize="15px">Accepted payment methods</BodyDescTypography>
          <MDBox display="flex" flexDirection="row" marginLeft="22px" bgColor="white" paddingTop="5px" paddingRight="5px" paddingLeft="5px">
         
            <MDBox marginRight="10px" marginLeft="10px">
              <FaCcVisa color="	#1A1F71" size="32px" />
            </MDBox>
            <MDBox marginRight="10px">
              <FaCcMastercard color="#EB001B" size="32px" />
            </MDBox>
            <MDBox marginRight="10px">
              <FaCcPaypal color=" #3b7bbf" size="32px" />
            </MDBox>
            <MDBox marginRight="10px">
              <FaCcAmazonPay color="#333e47" size="32px" />
            </MDBox>
          </MDBox>
        </MDBox>
      </MDBox>
        </MDBox >
      );           
   
}
