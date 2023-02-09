import styled from "@emotion/styled";

const DotComponent = styled.span`
  cursor: pointer;
  height: 10px;
  width: 10px;
  margin: 0 2px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
  &:hover {
    background-color: lightgrey;
    cursor: pointer;
  }
  &:active {
    background-color: blue;
    cursor: pointer;
  }
`;

export default function Dot({ clickHandler, id, selectedIndex }) {
  return (
    <DotComponent
      key={id}
      onClick={clickHandler}
      color={selectedIndex === id ? "#1a73e8" : "#bbb"}
    />
  );
}
