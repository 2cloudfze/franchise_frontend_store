import React, { useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layouts/DefaultLayout";
import { CircleLoader } from "react-spinners";
import MDBox from "@/components/MDBox";
import HeaderTypography from "@/components/Typography/HeaderTypography";
import SubHeaderTypography from "@/components/Typography/SubHeaderTypography";
import ButtonTypography from "@/components/Typography/ButtonTYpography";
const Billing = () => {
  const [billingAddress, setBillingAddress] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const LoadingComponent = <CircleLoader style={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)'}}/>;


  const handleBillingAddressChange = (e) => {
    setBillingAddress({ ...billingAddress, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Layout>
      {isLoading ? (
        LoadingComponent
      ) : (
        <MDBox mt="80px" ml="600px" display="block">
          <HeaderTypography fontSize="15px">Billing Address</HeaderTypography>
          <form onSubmit={handleSubmit}>
            <SubHeaderTypography fontSize="13px">
              Address Line 1:
              <input
                style={{ marginLeft: "68px", height: "30px", paddingLeft: "10px" }}
                type="text"
                name="address1"
                placeholder="Address Line 1"
                onChange={handleBillingAddressChange}
              />
            </SubHeaderTypography>

            <br />
            <SubHeaderTypography fontSize="13px">
              Address Line 2:
              <input
                style={{marginLeft: "65px", height: "30px", paddingLeft: "10px"}}
                type="text"
                name="address2"
                placeholder="Address Line 2"
                onChange={handleBillingAddressChange}
              />
            </SubHeaderTypography>
            <br />
            <MDBox marginRight>
              <SubHeaderTypography fontSize="13px">
                City:
                <input
                  style={{marginLeft: "158px", height: "30px", paddingLeft: "10px"}}
                  type="text"
                  name="city"
                  placeholder="City"
                  onChange={handleBillingAddressChange}
                />
              </SubHeaderTypography>
            </MDBox>
            <br />
            <SubHeaderTypography fontSize="13px">
              State:
              <input
                style={{marginLeft: "146px", height: "30px", paddingLeft: "10px"}}
                type="text"
                name="state"
                placeholder="State"
                onChange={handleBillingAddressChange}
              />
            </SubHeaderTypography>
            <br />
            <SubHeaderTypography fontSize="13px">
              Zip Code:
              <input
                style={{marginLeft: "118px", height: "30px", paddingLeft: "10px"}}
                type="text"
                name="zip"
                placeholder="Zip Code"
                onChange={handleBillingAddressChange}
              />
            </SubHeaderTypography>
            <br />
            <SubHeaderTypography fontSize="13px">
              Country:
              <input
                style={{marginLeft: "119px", height: "30px", paddingLeft: "10px"}}
                type="text"
                name="country"
                placeholder="Country"
                onChange={handleBillingAddressChange}
              />
            </SubHeaderTypography>
            <br />
            <ButtonTypography>Save</ButtonTypography>
          </form>

          
        </MDBox>
      )}
    </Layout>
  );
};

export default Billing;
