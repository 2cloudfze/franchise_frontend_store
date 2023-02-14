export default function CheckOutItem({
  label,
  value,
  fontSize = 18,
  color = "#827a7a",
}) {
  return (
    <div className="main">
      <p style={{ padingLeft:'40px'}}>{label}</p>
      <p style={{marginLeft:'110px'}}>{value}</p>

      <style jsx>{`
        .main {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          font-size: ${fontSize}px;
          font-family: "Roboto", sans-serif;
          letter-spacing: 0.5;
          color: ${color};
        }
        .label{
       pading-left:40px;
        }
      `}</style>
    </div>
  );
}