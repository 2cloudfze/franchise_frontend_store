import styled from "@emotion/styled";

import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const Button1 = styled.button`
  width: 20%;
  padding: px;
  background-color: #099e9a;
  border: none;
  color: white;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: black;
  }
  margin-right: 5px;
  margin-left: 5px;
  margin-top: 1px;
`;
export default function QtyComponent({ cartAddRemove, quantity }) {
  return (
    <>
      <Button1>
        <RemoveIcon onClick={() => cartAddRemove("Remove")} />
      </Button1>
      {quantity}
      <Button1>
        <AddIcon onClick={() => cartAddRemove("Add")} />
      </Button1>
    </>
  );
}
