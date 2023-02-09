import CategoriesItem from "@/components/HeaderCategories/CategoriesItem";
import offlineCategories from "@/db/offlineData/categories";

export default function HeaderCategories() {
  return (
    <div className="categories">
      {offlineCategories.map((category, index) => {
        return <CategoriesItem key={index} categoryData={category} />;
      })}

      <style jsx>{`
        .categories {
          list-style-type: none;
          display: flex;
          flex-direction: row;
          background: white;
          color: black;
          z-index: 1;
          top:1000;
          border-radius: 16px;
          margin-bottom: 30px; 
        }
        .categories:hover {
          height: 0px;
        }

      `}</style>
    </div>
  );
}
