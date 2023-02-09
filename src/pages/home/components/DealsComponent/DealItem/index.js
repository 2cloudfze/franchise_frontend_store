import { useRouter } from "next/router";

export default function DealItem({ id, name, img_url, price }) {
  const router = useRouter();
  return (
    <article>
      <div >
        <img className="homeproduct-img" src={img_url} alt="error" />

        <p className="product-title"> {name}</p>
        <p className="product-title"> ${price} </p>
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
          .product-title {
            width: 80%;
            line-height: 20px;
            text-decoration: none;
            margin-left:30px;
            font-weight: 500;
            font-size: 15px;
            cursor:pointer;
            font-family:AvenirLTStd-Roman;
  
            text-align: center;
            color: black;
            margin-bottom: 18px;
          }
  
          .product-title:hover {
            font-weight: 600;
         
        `}</style>
    </article>
  );
}
