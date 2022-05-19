import styled from "styled-components";

interface propsType {
  children: string;
  backgroundColor?: string;
}

const ButtonSt = styled.button<propsType>`
    cursor: pointer;
    background: ${(props) => props.backgroundColor || "#365df0"};
    border-radius: 5px;
    letter-spacing: 0.36px;
    padding: 10px 30px;
    color: white;
    font-family: "Source Sans Pro", sans-serif;
    border: none;
    &:hover {
      background: #2f55cc;
    }
    &:active {
      background: #244aa8;
    }
  `;

export default function Button(props: propsType) {
  return <ButtonSt backgroundColor={props.backgroundColor}>{props.children}</ButtonSt>;
}
