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

export default function Footer() {
  return (
    <footer>
      <div className="footer footer-top">
        <Logo />

        {/* <div className="Brand">
          <h5>FEATURED BRANDS</h5>
        </div> */}
        {/* <CarouselConatiner /> */}

        {/* <div className="nav-images">
          {companyLogo.map((element, index) => (
             <img className="img-logo" key={index} src={element.url} />
          ))}
        </div> */}

        <div className="social-links">
          <Link legacyBehavior href="/">
            <a>
              <FaFacebookF color="#77A7FF" size="22px" />
            </a>
          </Link>
          <Link legacyBehavior href="/">
            <a>
              <FaTwitter color=" #00acee" size="22px" />
            </a>
          </Link>
          <Link legacyBehavior href="/">
            <a>
              <FaInstagram color="#d61341" size="22px" />
            </a>
          </Link>
          <Link legacyBehavior href="/">
            <a>
              <FaYoutube color="	#FF0000" size="22px" />
            </a>
          </Link>
        </div>
      </div>
      <div className="footer footer-bottom">
        <div className="texts">
          <p>© 2023. Computron UI </p>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
        </div>
        <div className="payment-info">
          <p className="text">Accepted payment methods</p>
          <div className="payment-methods">
            <div>
              <FaCcVisa color="	#1A1F71" size="32px" />
            </div>
            <div>
              <FaCcMastercard color="#EB001B" size="32px" />
            </div>
            <div>
              <FaCcPaypal color=" #3b7bbf" size="32px" />
            </div>
            <div>
              <FaCcAmazonPay color="#333e47" size="32px" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        footer {
          position: relative;         
          width: 100vw;
          display: flex;
          flex-direction: column;
          margin-top: 30px;
          background:linear-gradient(195deg, #1260a3, #1A73E8, #36c7c7);
          overflow-x: hidden;
        }

        .nav-images {
          margin-top : 50px;
          max-width: 60%;
          max-height: 10%;
          
        }

        .img-logo {
        padding-top : 5px,;
        padding-left : 5px;
        padding-bottom : 5px;
        padding-right : 5px;
        border-radius : 5px;
        width : 500;
        

        


        }
        .footer {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 28px 10vw;
          
          

        }
        .footer-top .footer-nav {
          display: flex;
          align-items: center;
          
          
        }

        .Brand{
          position: absolute;
          left: 815px;
          top: 1581px;
          font-weight: 100;
          font-size: 22px;
          color : #420909;
          background:red;
          
          
        }


        .footer-top .footer-nav a {
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          color: #7a1111;
          text-decoration: none;
          margin-left: 18px;
          margin-right: 18px;
          
         
        
         
          
        }
        .footer-top .footer-nav a:hover {
          text-decoration: underline;
          color : black;
        }
        .footer-top .social-links a {
          margin-left: 17px;
          margin-right: 17px;
          
         
          
        }
        /* Footer Bottom */
        .footer-bottom {
          border-top: 2px solid #f5f5f5;
          
          
        }
        .footer-bottom .texts {
          display: flex;
          flex-direction: row;
          align-items: center;
          
         
        }
        .footer-bottom .texts p {
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 60px;
          color: black;
          margin-right: 15px;
          margin-left: 15px;
          
        }
        .footer-bottom .payment-info {
          display: flex;
          flex-direction: row;
          align-items: center;
          
        }
        .footer-bottom .payment-info .text {
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 60px;
          color: black;
           
        }
        .footer-bottom .payment-info .payment-methods {
          display: flex;
          flex-direction: row;
          margin-left: 12px;
          background:white;
          padding-top:5px;
          padding-right:5px;
          padding-left:5px;
          
        }
        .footer-bottom .payment-info .payment-methods div {
          margin-left: 5px;
          margin-right: 5px;
        
        }

        @media (max-width: 1000px) {
          .footer-top .footer-nav {
            display: none;
            
          }
          .footer-bottom {
            display: flex;
            flex-direction: column;
            
          }
          .footer-bottom .texts {
            flex-direction: column;
            
          }
          .footer-bottom .texts p {
            line-height: 40px;
          }
          
          .footer-bottom .payment-info .text {
            display: none;
          }
          .footer-bottom .payment-info {
            margin-top: 24px;
          }
        }

        }
        @media (max-width: 700px) {
          .footer-top {
            display: flex;
            flex-direction: column;
          }
          .footer-top .social-links {
            margin-top: 8px;
            
            
          }
        }
      `}</style>
    </footer>
  );
}
