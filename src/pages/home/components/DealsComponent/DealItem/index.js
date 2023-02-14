import { useRouter } from "next/router";
import BodyDescTypography from "@/components/Typography/BodyDescTypography";
export default function DealItem({ id, name, img_url, price }) {
  const router = useRouter();
  return (
    
    <article>
      
        <div>
          <img className="homeproduct-img" src={img_url} alt="error" />
          <BodyDescTypography fontSize="14" lineHeight="20px">
          <p className="product-title"> {name}</p>
          <p className="product-title"> ${price} </p>
          </BodyDescTypography>
        </div>

        <style jsx>{`
          article {
            display: flex;
            align-items: center;
            flex-direction: row;
            box-sizing: border-box;
            font-size:12px;
            line-height:1.8px;
             color:#090808;
            height: 100%;
            background: white;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
            border-radius: 6px; 
          }
          
          
          .homeproduct-img {
            width: 165px;
            height: 160px;
            
            margin-left:40px;
            object-fit: contain;
            cursor:pointer;
          }
         
        `}</style>
      
    </article>
    
  );
}
