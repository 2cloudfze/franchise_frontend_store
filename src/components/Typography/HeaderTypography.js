export default function HeaderTypography({
  children,
  fontSize = "13px",
  color = "black",
  fontWeight = 100,
  marginLeft = "",
  marginBottom = "",
  flexDirection = "",
  marginTop = "",
  onClick = () => {},
}) {
  let defaultStyle = {
    display: "flex",
    color: color,
    fontFamily: "Quantico",
    fontSize: fontSize,
    cursor: "pointer",
    marginLeft: marginLeft,
    marginBottom: marginBottom,
    marginTop: marginTop,
    fontWeight: fontWeight,
    flexDirection: flexDirection,
    textTransform: "uppercase",
  };

  return (
    <>
      <h1 style={{ ...defaultStyle }} onClick={onClick}>
        {children}
      </h1>
    </>
  );
}
