import Link from "next/link";
import * as React from "react";
import { FaShoppingCart, FaUser, FaSignOutAlt, FaBars } from "react-icons/fa";
import CartContext from "@/context/CartContext/cart-context";
import { useContext } from "react";
import Logo from "@/components/Logo";
import SearchBox from "@/components/SearchBox";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function HeaderDesktop({ viewer }) {
  const cartContext = useContext(CartContext);
  const cartQty = cartContext.items.length;
  return (
    <>
      <div className="header header-top">
        <Logo />

        <SearchBox />

        <div className="nav-buttons">
          <Link legacyBehavior href="/cart">
            <a className="nav-buttons-items">
              <FaShoppingCart color="" />
              <p>
                <sup className="items-total">{cartQty}</sup>
              </p>
            </a>
          </Link>

          {!viewer && (
            <Link legacyBehavior href="/login">
              <a className="nav-buttons-signin">
                <FaUser color="#808080" />
                <p>Sign In</p>
              </a>
            </Link>
          )}
          {viewer && (
            <>
              <Link legacyBehavior href="/login">
                <a className="nav-buttons-profile">
                  <FaUser color="" />
                  <p>{viewer.name}</p>
                </a>
              </Link>
              <Link legacyBehavior href="/signout">
                <a className="nav-buttons-signout">
                  <FaSignOutAlt />
                </a>
              </Link>
              <Link legacyBehavior href="/shipping">
                <a className="nav-buttons-ship">
                  <p>My Address</p>
                </a>
              </Link>
              <Link legacyBehavior href="/my_orders">
                <a className="nav-buttons-ship">
                  <p>My orders</p>
                </a>
              </Link>
            </>
          )}
        </div>
      </div>
      {
        //Todo: search categories dropdown
      }

      <style jsx>{`
        /* Header Top */
        .header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 28px 10vw;
          background: linear-gradient(195deg, #1260a3, #1a73e8, #36c7c7);
        }
        .nav-buttons {
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        .nav-buttons a {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-left: 32px;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          text-decoration: none;
          color: white;
        }
        .nav-buttons .items-total {
          font-size: 12px;
          align-self: flex-end;
        }
        .nav-buttons .nav-buttons-signout {
          margin-left: 12px;
        }
        .nav-buttons a:hover {
          text-decoration: underline;

          color: black;
        }
        .nav-buttons a p {
          margin-left: 8px;
        }
        /* Header Bottom */
        .header-bottom {
          padding: 0px 10vw;
          border-top: 2px solid #f5f5f5;
          color: #8a0707;
          background-color: #d3f2f2;
          box-shadow: 0px 2px 10px rgba(189, 170, 174);
          box-shadow: 0px 2px 10px rgba(161, 189, 201);
        }
        .header-bottom .all-categories-box {
          height: 100%;
          display: flex;
          align-items: center;
          /* Border */
          border-right: 2px solid #f5f5f5;
          padding-top: 20px;
          padding-bottom: 20px;
          padding-right: 48px;
          color: red;
        }
        .header-bottom .all-categories-box select {
          height: 100%;
          padding-left: 15px;
          font-family: Roboto;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 60px;
          color: #808080;
          border: none;
          background: none;
        }
        .header-bottom .all-categories-box select:focus {
          outline: none;
        }
        .header-bottom .main-nav {
          display: flex;
          align-items: center;
          bckground-color: blue;
        }
        .header-bottom .main-nav a {
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          color: #666666;
          text-decoration: none;
          margin-left: 16px;
          margin-right: 16px;
        }
        .header-bottom .main-nav a:hover {
          text-decoration: underline;
          bckground-color: red;
        }
        .header-bottom .settings {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .header-bottom .settings .menu-dropdown {
          /* Border */
          border-left: 2px solid #f5f5f5;
          padding: 20px 24px;
        }
        .header-bottom .settings .menu-dropdown p {
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          color: #8a0707;
        }
      `}</style>
    </>
  );
}
