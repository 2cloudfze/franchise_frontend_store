export default function HeaderTypography({
  children,
  fontSize = 13,
  color = "black",
  fontWeight = 100
}) {
  return (
    <>
      <h1>{children}</h1>
      <style jsx>{`
        h1 {
          color: ${color};
          font-family: 'Quantico';
          font-size: ${fontSize}px;
          cursor: pointer;
          fontWeight: ${fontWeight};
          text-transform: uppercase;
          backgroundColor: "#fafafa",
        }
      `}</style>
    </>
  );
}
