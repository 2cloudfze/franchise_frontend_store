export default function SubHeaderTypography({
    children,
    fontSize = 18,
    color = "balck",
  }) {
    return (
      <>
        <h3>{children}</h3>
        <style jsx>{`
          h3 {
            color: ${color};
            font-family: 'Montserrat'; 
            font-size: ${fontSize}px;
            cursor: pointer;
            text-transform: uppercase;
            letter-spacing: 1.25px;
            padding: 8px;
            line-height: 20px;
            
          }
        `}</style>
      </>
    );
  }