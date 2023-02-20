import HeaderTypography from "../Typography/HeaderTypography";
import { useRouter } from "next/router";
export default function Logo() {
  const data = "Franchise";
  const router = useRouter();

  return (
    <HeaderTypography
      onClick={() => router.push("/")}
      children={data}
      color="white"
      fontSize="20"
    />
  );
}
