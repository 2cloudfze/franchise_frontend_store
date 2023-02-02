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
          font-family: Georgia, serif;
          border-radius: 16px;
          margin-bottom: 30px;
          // box-shadow: 0px 2px 5px rgba(189, 170, 174);
        }
      `}</style>
    </div>
  );
}
