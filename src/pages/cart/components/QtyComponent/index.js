import styled from "@emotion/styled";

import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const Button1 = styled.button`
  width: 30px;
  flex:row;
  height:30px;
  background-color: #099e9a;
  border: none;
  padding:2px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  border-radius: 30px;
  &:hover {
    color: white;
    background-color: black;
  }
  margin-right: 10px;
  margin-left: 10px;
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
      {/* <style jsx>{`
         .quantity{

         }
     `}</style> */}
    </>
  );
}
