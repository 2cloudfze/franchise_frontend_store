

export default function SubHeaderTypography({
    children,
    fontSize = 12,
    color = "balck",
    marginRight="",
    marginLeft="",
    label="",
    value=""
    
  }) {
    return (
      <>
      <p style={{ padingLeft:'40px'}}>{label}</p>
      <p style={{marginLeft:'110px'}}>{value}</p>
        <h3>{children}</h3>
        <style jsx>{`
          h3 {
            color: ${color};
            font-family: 'Montserrat'; 
            font-size: ${fontSize};
            cursor: pointer;
            margin-right:${marginRight};
            margin-left:${marginLeft};
            text-transform: uppercase;
            letter-spacing: 1.25px;
            padding: 8px;
            line-height: 20px;  
          }
        `}</style>
      </>
    );
  }