export default function HeaderTypography({
  heading,
  fontSize = 18,
  color = "white",
}) {
  return (
    <>
      <h1>{heading}</h1>
      <style jsx>{`
        h1 {
          color: ${color};
          font-family: "PlutoMedium";
          font-size: ${fontSize}px;
          cursor: pointer;
          text-transform: uppercase;
        }
      `}</style>
    </>
  );
}
