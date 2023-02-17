import CategoriesItem from "@/components/HeaderCategories/CategoriesItem";
import offlineCategories from "@/db/offlineData/categories";
import MDBox from "@/components/MDBox";

export default function HeaderCategories() {
  return (
    <MDBox
      display="flex"
      flexDirection="row"
      sx={{
        "&:hover": {
          height: "0px",
        },
      }}
    >
      {offlineCategories.map((category, index) => {
        return <CategoriesItem key={index} categoryData={category} />;
      })}
    </MDBox>
  );
}
