import styled from "styled-components";
import Button from "./shared/Button";
import Cross from "./assets/cross.svg";
import { useState } from "react";
import Modal from "./shared/Modal";

const Title = styled.h1`
  font-size: 42px;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 600;
  letter-spacing: 0.84px;
  text-transform: uppercase;
  color: #170c3a;
`;

const Subtitle = styled.h3`
  font-size: 30px;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 600;
  letter-spacing: 0.6px;
  color: #170c3a;
  margin: 25px 0;
`;

const Container = styled.div`
  width: 50%;
  margin: 40px auto;
`;

const Interaction = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const SearchBox = styled.input`
  width: 180px;
  height: 35px;
  padding-left: 15px;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #ebeaed;
  background: #f5f4f6;
  &:focus {
    outline: none;
    background: #ebeaed;
    border: 1px solid #dedce1;
  }
`;

const CheckBox = styled.input`
  cursor: pointer;
  float: left;
`;

const Tool = styled.div`
  display: block;
  padding: 20px 30px;
  background: #ffffff;
  box-shadow: 0px 10px 10px #0000000d;
  border: 1px solid #ebeaed;
  border-radius: 5px;
`;

const ToolHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ToolTitle = styled.h5`
  font-size: 24px;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 600;
  letter-spacing: 0.48px;
  text-decoration: underline;
  text-underline-offset: 4px;
  color: blue;
`;

const Description = styled.p`
  margin: 10px 0;
  font-size: 20px;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 400;
  color: #170c3a;
  letter-spacing: 0.4px;
`;

const Tag = styled.span`
  font-size: 16px;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 600;
  letter-spacing: 0.4px;
  padding-right: 5px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CrossSt = styled.img`
  width: 9px;
  padding-right: 3px;
  filter: invert(42%) sepia(85%) saturate(489%) hue-rotate(314deg)
    brightness(100%) contrast(95%);
`;

function handleAddModalClick(){
  console.log('click')
}

export default function App() {
  const [addModal, setAddModal] = useState();

  return (
    <Container>
      <Title>vuttr</Title>
      <Subtitle>Very Useful Tools to Remember</Subtitle>
      <Interaction>
        <SearchContainer>
          <SearchBox type="text" placeholder="search" />
          <label>
            search in tags only
            <CheckBox type="checkbox" />
          </label>
        </SearchContainer>
        <Button variant="primaryNeutral">Add</Button>
      </Interaction>
      <Tool>
        <ToolHeader>
          <ToolTitle>Notion</ToolTitle>
          <Button
            onClick={handleAddModalClick}
            startIcon={<CrossSt src={Cross} />}
            variant="quartiaryDanger"
          >
            Remove
          </Button>
        </ToolHeader>
        <Description>
          Fake REST API based on a json schema. Useful for mocking and creating
          APIs for front-end devs to consume in coding challenges.
        </Description>
        <Tag>#node</Tag>
        <Tag>#java</Tag>
        <Tag>#docker</Tag>
      </Tool>
      {addModal ? (
        <Modal>
          <span>texto</span>
        </Modal>
      ) : null}
    </Container>
  );
}
