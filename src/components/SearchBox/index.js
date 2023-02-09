import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/router";
import useQueryBuilder from "@/hook/use-query-builder";
export default function SearchBox() {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const { head, queryString, next } = useQueryBuilder({
    query: searchText,
    rowCount: 100,
  });
  const handleSearch = (e) => {
    if (e.keyCode === 13) {
      setSearchText(e.target.value);
      router.push({
        pathname: "/products/" + head,
        query: { data: `${queryString}${next()}`, currentCurser: "*" },
      });
    }
  };

  return (
    <>
      <div className="search-box">
        <button className="search-button">
          <FaSearch color="#4a0b0b" size="15px" />
        </button>
        <input
          id="search"
          type="text"
          name="search"
          placeholder="Search"
          onKeyDown={handleSearch}
        />
      </div>
      <style jsx>{`
        .search-box {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding-left: 16px;
          padding-right: 12px;
          height: 52px;
          width: 690px;
          background: #f7fafa;
          border: 2px solid white;
          box-sizing: border-box;
          border-radius: 12px;
          margin-left: 400px;
        }
        .search-box .search-button {
          display: flex;
          align-items: center;
          background: #f7fafa;
          border: none;
          height: 100%;
        }
        .search-box .search-button:focus {
          outline: none;
        }
        .search-box .search-button:hover {
          opacity: 40%;
        }
        .search-box input {
          width: 75%;
          height: 93%;
          border: none;
          padding-left: 8px;
          background: #f7fafa;
        }
        .search-box input:focus {
          outline: none;
        }
        .search-box select {
          align-self: flex-end;
          max-width: 120px;
          height: 100%;
          text-transform: uppercase;
          font-style: normal;
          font-weight: 900;
          font-size: 10px;
          letter-spacing: 1px;
          color: #5c0505;
          border: none;
          background: none;
        }
        .search-box select:focus {
          outline: none;
        }
      `}</style>
    </>
  );
}
