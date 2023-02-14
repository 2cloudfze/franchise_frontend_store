import { useRouter } from "next/router";
import useQueryBuilder from "@/hook/use-query-builder";
import styled from "@emotion/styled";
import SubHeaderTypography from "@/components/Typography/SubHeaderTypography";
const StyledText = styled.p`
  color: black;
  padding: 8px;
  font-family: 'Montserrat';
  cursor: pointer;
  letter-spacing: 1.25px;
  font-size: 12px;
  &:hover {
    color: #9c9494;
  }
`;
export default function Item({ name, id, category }) {
  const router = useRouter();
  const { head, queryString, next } = useQueryBuilder({
    query: `category:${category}`,
    rowCount: 8,
  });
  const onClickHandler = () =>
    router.push({
      pathname: "/products/" + head,
      query: { data: `${queryString}${next()}`, currentCurser: "*" },
    });
  return (
    <li
      onClick={onClickHandler}
      key={id}
      // style={{
      //   color: "black",
      //   padding: "8px",
      //   fontFamily: "AvenirLTStd-Roman",
      //   cursor: "pointer",
      //   hover: {
      //     color: "lightgrey",
      //   },
      //   letterSpacing: "1.25px",
      //   fontSize: "12px",
      // }}
    >
      <SubHeaderTypography fontSize="10">{name}</SubHeaderTypography>
    </li>
  );
}
