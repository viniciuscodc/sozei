import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  color: palevioletred;
`;

const Subtitle = styled.h2`
  font-size: 1.5em;
  color: palevioletred;
`;

const Container = styled.div`
  width: 50%;
  margin: 40px auto;
`;

const Interaction = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SearchBar = styled.div`
  width: 100px;
  height: 30px;
  background-color: white;
`;

const CheckBox = styled.input`
  float: left;
`;

const Button = styled.button`
  
`;

const Tool = styled.div`
  display: block;
  background-color: white;
`;

const ToolTitle = styled.h4`
  color: blue;
`;

const Description = styled.p`

`;

const Tags = styled.span`

`;


export default function App() {
  return (
    <Container>
      <Title>vuttr</Title>
      <Subtitle>Very Useful Tools to Remember</Subtitle>
      <Interaction>
        <div style={{ display: "flex" }}>
          <SearchBar></SearchBar>
          <label>
            search in tags only
            <CheckBox type="checkbox" />
          </label>
        </div>
        <Button>Add</Button>
      </Interaction>
      <Tool>
        <ToolTitle>Notion</ToolTitle>
        <Description>texto texto texto</Description>
        <Tags>#node #java</Tags>
      </Tool>
    </Container>
  );
}
