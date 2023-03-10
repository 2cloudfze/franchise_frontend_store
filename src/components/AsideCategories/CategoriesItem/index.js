import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Item from "./components";

export default function CategoriesItem({ category, subCategories }) {
  const [showSubCategories, setShowSubCategories] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowSubCategories(true)}
      onMouseLeave={() => setShowSubCategories(false)}
    >
      <li key={category.id}>
        <a>
          <div className="content">
            <p>{category.label}</p>
          </div>

          <div className="arrow-button">
            <MdKeyboardArrowRight color="#800a0a" size="26" />
          </div>
        </a>

        {showSubCategories && (
          <div>
            {subCategories.map((subCategory) => (
              <Item
                key={subCategory.id}
                id={subCategory.id}
                name={subCategory.name}
              />
            ))}
          </div>
        )}

        <style jsx>{`
          li a {
            display: flex;
            flex-direction: row;

            align-items: center;
            justify-content: space-between;
            padding: 18px;
            text-decoration: none;
            font-weight: 500;
            font-size: 13px;
            color: white;
            padding: 20px;
            background: linear-gradient(195deg, #1260a3, #1A73E8,#36c7c7);
            cursor:pointer;
            border-bottom: 2px solid #f5f5f5;
            transition: 0.4s;
            box-shadow: 0px 2px 5px rgba(189, 170, 174);
            box-shadow: 0px 2px 10px rgba(161, 189, 201);
          }

          li a:hover {
            background: #f2f2f2;
            color:black;
          }
          li a .content {
            display: flex;
            flex-direction: row;
            align-items: center;
          }
          li a .content .icon {
            padding-right: 18px;
          }
          li a .arrow-button {
            align-self: flex-end;
          }
        `}</style>
      </li>
    </div>
  );
}
