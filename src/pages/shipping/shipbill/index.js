import React, { useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layouts/DefaultLayout";
import { CircleLoader } from "react-spinners";

const ShippingBilling = () => {
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
        <div className="main-box">
          <form onSubmit={handleSubmit}>
            <h2 className="adress-titlesecond">Billing Address</h2>
            <label className="adress-line">
              Address Line 1:
              <input
                className="field-adress"
                type="text"
                name="address1"
                placeholder="Address Line 1"
                onChange={handleBillingAddressChange}
              />
            </label>
            <br />
            <label className="adress-line">
              Address Line 2:
              <input
                className="field-adress"
                type="text"
                name="address2"
                placeholder="Address Line 2"
                onChange={handleBillingAddressChange}
              />
            </label>
            <br />
            <label className="city">
              City:
              <input
                className="field-city"
                type="text"
                name="city"
                placeholder="City"
                onChange={handleBillingAddressChange}
              />
            </label>
            <br />
            <label className="state">
              State:
              <input
                className="field-state"
                type="text"
                name="state"
                placeholder="State"
                onChange={handleBillingAddressChange}
              />
            </label>
            <br />
            <label className="zipcode">
              Zip Code:
              <input
                className="field-zip"
                type="text"
                name="zip"
                placeholder="Zip Code"
                onChange={handleBillingAddressChange}
              />
            </label>
            <br />
            <label className="country">
              Country:
              <input
                className="field-country"
                type="text"
                name="country"
                placeholder="Country"
                onChange={handleBillingAddressChange}
              />
            </label>
            <br />
            <button className="button" type="submit">
              Save
            </button>
          </form>

          <style jsx>{`
            .main-box {
              display: flex;
              align-items: center;
              justify-content: center;
              // background-color: lightblue;
              margin-top: 20px;
              flex-direction: column;
              font-family: "Raleway", sans-serif;
              position: absolute;
              top: 70%;
              left: 37%;
              transform: translate(-50%, -50%);
              width: 800px;
              height: 400px;
            }

            .adress-titlesecond {
              margin-bottom: 40px;
              color: black;
              font-size: 23px;
              position: absolute;
              top: -30%;
              left: 29.5%;
              font: "15px Arial, sans-serif";
            }

            .adress-line {
              margin-bottom: 8px;

              font-size: 16px;
              font-weight: bold;
              display: block;
            }

            .city {
              margin-bottom: 10px;
              font-size: 16px;
              font-weight: bold;
              display: block;
            }
            .state {
              margin-bottom: 20px;

              font-size: 16px;
              font-weight: bold;
              display: block;
            }
            .zipcode {
              margin-bottom: 20px;

              font-size: 16px;
              font-weight: bold;
              display: block;
            }
            .country {
              margin-bottom: 20px;

              font-size: 16px;
              font-weight: bold;
              display: block;
            }
            .button {
              width: 80px;
              height: 30px;

              margin-top: 10px;
              background: linear-gradient(195deg, #1260a3, #1a73e8, #36c7c7);
              color: white;
              border: none;

              cursor: pointer;
              border-radius: 21px;

              box-shadow: 0px 2px 5px rgba(189, 170, 174);
              box-shadow: 0px 2px 10px rgba(161, 189, 201);
            }
            .button:hover {
              background-color: #2f9dd4;
            }
            .field-adress {
              // background:red;
              padding-left: 10px;
              margin-left: 10px;
              height: 30px;
            }
            .field-city {
              // background:red;
              padding-left: 10px;
              margin-left: 95px;
              height: 30px;
            }
            .field-state {
              // background:red;
              padding-left: 10px;
              margin-left: 86px;
              height: 30px;
            }
            .field-zip {
              // background:red;
              padding-left: 10px;
              margin-left: 58px;
              height: 30px;
            }
            .field-country {
              // background:red;
              padding-left: 10px;
              margin-left: 65px;
              height: 30px;
            }
          `}</style>
        </div>
      )}
    </Layout>
  );
};

export default ShippingBilling;
