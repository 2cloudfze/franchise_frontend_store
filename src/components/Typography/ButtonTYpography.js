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
  height="",
  borderRadius=""
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
          margin-top: ${marginTop};
          top: ${top};
          left: ${left};
          height:${height};
          border-radius:${borderRadius};
        }
        button:hover {
          background-color: ${color};
          color: ${backgroundColor};
        }
      `}</style>
    </>
  );
}
