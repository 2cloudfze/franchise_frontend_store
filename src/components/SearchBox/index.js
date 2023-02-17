import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/router";
import useQueryBuilder from "@/hook/use-query-builder";
import MDBox from "@/components/MDBox";
import FlexBox from "../MDSpacer/MDSpacer";
export default function SearchBox() {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const { head, queryString, next } = useQueryBuilder({
    query: searchText,
    rowCount: 8,
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
    <MDBox
      sx={{
        display: "flex",
        alignItems: "center",
        marginLeft: "400px",
        height: "52px",
        width: "690px",
        paddingLeft: "16px",
        paddingRight: "12px",
        backgroundColor: "#f7fafa",
        border: "2px solid white",
        borderRadius: "12px",
        boxSizing: "border-box",
      }}
    >
      <MDBox>
        <FaSearch
          display="flex"
          alignItems="center"
          border="none"
          height="100%"
          color="#4a0b0b"
          size="15px"
        />
      </MDBox>
      <input
        id="search"
        type="text"
        name="search"
        placeholder="Search"
        style={{
          border: "none",
          outline: "none",
          backgroundColor: "#f7fafa",
          marginLeft: "10px",
        }}
        onKeyDown={handleSearch}
      />
    </MDBox>
  );
}
