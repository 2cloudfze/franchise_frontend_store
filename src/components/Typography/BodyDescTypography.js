import { Padding } from "@mui/icons-material";

export default function BodyDescTypography({
  children,
  fontSize = 16,
  color = "balck",
  position = "",
  top = "",
  left = "",
  lineHeight = "",
  width = "",
  isDetails = false,
  onClickHandler = () => {},
  flexDirection = "",
  textAlign = "",
  padding = "",
  fontWeight = "",
}) {
  const ellipse = `white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;`;

  return (
    <>
      <h3 onClick={onClickHandler}>{children}</h3>
      <style jsx>{`
        h3 {
          ${!isDetails && ellipse}
          max-width: 100%;
          color: ${color};
          font-family: "Montserrat";
          font-size: ${fontSize};
          cursor: pointer;
          padding: ${padding};
          letter-spacing: 1px;
          position: ${position};
          top: ${top};
          left: ${left};
          width: ${width};
          font-weight: ${fontWeight};
          line-height: ${lineHeight};
          flex-direction: ${flexDirection};
          text-align: ${textAlign};
          display: felx;
        }
      `}</style>
    </>
  );
}
