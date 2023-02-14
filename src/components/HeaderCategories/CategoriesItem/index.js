import React, { useState } from "react";
import Item from "./components";
import HeaderTypography from "@/components/Typography/HeaderTypography";
export default function CategoriesItem({ categoryData }) {
  const [showSubCategories, setShowSubCategories] = useState(false);
  let myStyles = {
    backgroundColor: "#fafafa",
  };

  return (
    <div
      onMouseEnter={() => setShowSubCategories(true)}
      onMouseLeave={() => setShowSubCategories(false)}
    >
      <HeaderTypography fontSize="12" fontWeight="200" backgroundColor="white">
      <div style={myStyles} >
        
        <li key={categoryData.id}>
          <a>
            <div className="content">
              <p>{categoryData.head.toUpperCase()}</p>
            </div>
          </a>

          {showSubCategories && (
            <div className="dropdownContainer">
              {categoryData.categories.map((sub) => (
                <Item
                  key={sub.id}
                  id={sub.id}
                  name={sub.displayname}
                  category={sub.category}
                />
              ))}
            </div>
          )}

          <style jsx>{`
            li a {
              display: flex;
              flex-direction: row;
              height: 30px;
              align-items: center;
              justify-content: space-between;
              text-decoration: none;
              color: black;
              padding: 20px;
              cursor: pointer;
              transition: 0.4s;
            }

            li a:hover {
              // background: #36c7c7;
              color: #918a8a;
            }
            li a .content {
              display: flex;
              flex-direction: row;
              align-items: center;
              width: auto;
            }
            li a .content .icon {
              padding-right: 18px;
            }
            li a .arrow-button {
              align-self: flex-end;
            }
            .dropdownContainer {
              width: auto;
            }
          `}</style>
        </li>
       
      </div>
      </HeaderTypography>
    </div>
  );
}
