export default function BodyDescTypography({
  children,
  fontSize = 16,
  color = "balck",
  position = "",
  top = "",
  left = "",
  lineHeight = "",
  width = "",
  onClickHandler = () => {},
}) {
  return (
    <>
      <h3 onClick={onClickHandler}>{children}</h3>
      <style jsx>{`
        h3 {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 100%;
          color: ${color};
          font-family: "Montserrat";
          font-size: ${fontSize}px;
          cursor: pointer;
          letter-spacing: 1px;
          position: ${position};
          top: ${top};
          left: ${left};
          width: ${width};
          line-height: ${lineHeight};
          margin-left: 0px;
          display: felx;
        }
      `}</style>
    </>
  );
}
