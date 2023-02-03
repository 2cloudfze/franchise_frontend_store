import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Item from "./components";
import { border, height, width } from "@mui/system";

export default function CategoriesItem({ categoryData }) {
  const [showSubCategories, setShowSubCategories] = useState(false);
  let myStyles = {
    backgroundColor: "white",
    border: "none",
    maxWidth: "230px",
  };

  return (
    <div
      onMouseEnter={() => setShowSubCategories(true)}
      onMouseLeave={() => setShowSubCategories(false)}
    >
      <div style={myStyles}>
        <li key={categoryData.id}>
          <a>
            <div className="content">
              <p>{categoryData.head.toUpperCase()}</p>
            </div>

            <div className="arrow-button">
              <MdKeyboardArrowDown color="#ffffff" size="26" />
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
              font-weight: 500;
              font-size: 11px;
              color: white;
              padding: 20px;
              background: linear-gradient(195deg, #1260a3, #1a73e8, #36c7c7);
              cursor: pointer;
              border-bottom: 2px solid #f5f5f5;
              transition: 0.4s;
              box-shadow: 0px 2px 5px rgba(189, 170, 174);
              box-shadow: 0px 2px 10px rgba(161, 189, 201);
            }

            li a:hover {
              background: #36c7c7;
              color: white;
            }
            li a .content {
              display: flex;
              flex-direction: row;
              align-items: center;
              font-size: 13px;
              font-weight: 500;
              width: auto;
            }
            li a .content .icon {
              padding-right: 18px;
            }
            li a .arrow-button {
              align-self: flex-end;
            }
            .dropdownContainer {
              background: linear-gradient(195deg, #1260a3, #1a73e8, #36c7c7);
              width: auto;
            }
          `}</style>
        </li>
      </div>
    </div>
  );
}
