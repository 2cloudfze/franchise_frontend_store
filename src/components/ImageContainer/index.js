import { useState } from "react";

import MDBox from "@/components/MDBox";

export default function ImageContainer({
  imageUrl,
  objectFit = "scale-down",
  height = 200,
  width = 280,
  justifyContent = "center",
  maxHeight = { xs: 333, md: 267 },
  maxWidth = { xs: 450, md: 350 },
  marginLeft ="",
}) {
  const [src, setSrc] = useState(imageUrl);

  const onErrorHandler = () =>
    setSrc(
      "http://cdn.cnetcontent.com/b5/df/b5dfe4c2-9594-4d71-97ac-5874556e8986.jpg"
    );

  return (
    <MDBox
      mt={8}
      pr={20}
      key="BaseImage"
      component="img"
      sx={{
        objectFit: objectFit,
        justifyContent: justifyContent,
        height: height,
        width: width,
        maxHeight: maxHeight,
        maxWidth: maxWidth,
        borderRadius: [2, 2, 2, 2],
        marginLeft: marginLeft,
      }}
      src={src}
      alt="Image not found"
      onError={onErrorHandler}
    />
  );
}
