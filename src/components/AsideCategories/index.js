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
          background: white;
          color: black;
          position: absolute;
          z-index: 1;
          
          font-family: Georgia, serif;
          border-radius: 16px;
          margin-bottom: 30px;
          box-shadow: 0px 2px 5px rgba(189, 170, 174);
        }
        .categories:hover{
          width: 0px;
        }
        
        .categories .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          z-index: 999;
          display: none;
          float: left;
          min-width: 10rem;
          padding: 0.5rem 0;
          margin: 0.125rem 0 0;
          font-size: 1rem;
          color: #212529;
          text-align: left;
          list-style: none;
          background-color: #fff;
          background-clip: padding-box;
          border: 1px solid rgba(0, 0, 0, 0.15);
          border-radius: 0.25rem;
        }
        
        .categories .dropdown-menu.show {
          display: block;
        }
      `}</style>
    </div>
  );
}