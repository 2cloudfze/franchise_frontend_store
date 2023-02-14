import FlexBox from "@/components/MDSpacer/MDSpacer";
import MDBox from "@/components/MDBox";
import Card from "@mui/material/Card";
import BodyDescTypography from "@/components/Typography/BodyDescTypography";
export default function RelatedProduct({ id, name, img_url, price }) {
    return (
      
        <Card sx={{width:"100%",height:"90%",justifyContent:"center"}}>
         <MDBox display="flex" justifyContent="space-between" pt={1} px={2}> 
         <FlexBox flexDirection="column">
         <MDBox         
            mt={8}
            key="BaseImage"
            component="img"
            sx={{
              
              objectFit: "scale-down",
              height: 183,
              width: 250,
              maxHeight: { xs: 333, md: 267 },
              maxWidth: { xs: 450, md: 350 },
              borderRadius: [2, 2, 2, 2],
            }}
            src={img_url} alt="Image"
            />
           <MDBox width="300px "><BodyDescTypography > {name}</BodyDescTypography>
          <BodyDescTypography> ${price} </BodyDescTypography></MDBox>
  
          
            </FlexBox> 
          </MDBox>
        </Card>
  
       
      
    );
  }
  