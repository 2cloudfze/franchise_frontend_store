import React from "react";

export default function ButtonTypography({
  children,
  backgroundColor = "#238fdd",
  color = "white",
  fontSize = 18,
  onClick,
  position = "",
  top = "",
  left = "",
  border = "",
  marginLeft = "",
  width = "",
  marginTop = "",
}) {
  return (
    <>
      <button onClick={onClick}>{children}</button>
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
          color: ${color};
          font-size: ${fontSize}px;
          cursor: pointer;
          margin-bottom: 45px;
          border-radius: 20px;
          padding: 10px 20px;
          font-family: "Montserrat";
          width: ${width};
          border: none;
          margin-left: ${marginLeft};
          border: ${border};
          position: ${position};
          margintop: ${marginTop};
          top: ${top};
          left: ${left};
        }
        button:hover {
          background-color: ${color};
          color: ${backgroundColor};
        }
      `}</style>
    </>
  );
}