import CategoriesItem from "@/components/AsideCategories/CategoriesItem";
import offlineCategories from "@/db/offlineData/categories";

export default function AsideCategories() {
  return (
    <div className="categories">
      {offlineCategories.map((category) => {
        return (
          <CategoriesItem
            key={category.id}
            category={category}
            subCategories={category.sub_category}
          />
        );
      })}

      <style jsx>{`
        .categories {
          list-style-type: none;
           display: flex;
           flex-direction: row;
          //  flex: 1 0 20%;
          background: white;
          // position-left: 15px;
          margin: 0 auto;
          color: black;
          padding: 22px;
          font-family: Georgia, serif;

          border-radius: 21px;
          margin-bottom: 30px;
          box-shadow: 0px 2px 5px rgba(189, 170, 174);
          
        }

        
      `}</style>
    </div>
  );
}
