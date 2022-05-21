import styled from "styled-components";

interface propsType {
  variant: string;
  children: string;
  startIcon?: JSX.Element;

}

interface variantType {
  backgroundColor: string | null;
  color: string | null;
  hover: string | null;
  active: string | null;
  padding: string | null;
}

interface propsStyled {
  variant: variantType
}

const ButtonSt = styled.button<propsStyled>`
  cursor: pointer;
  background: ${(props) => props.variant.backgroundColor};
  border-radius: 5px;
  letter-spacing: 0.36px;
  padding: ${(props) => props.variant.padding};
  color: ${(props) => props.variant.color};
  font-family: "Source Sans Pro", sans-serif;
  border: none;
  &:hover {
    background: ${(props) => props.variant.hover};
  }
  &:active {
    background: ${(props) => props.variant.active};
  }
`;


Button.defaultProps = {
  onClick: () => {}
};

export default function Button(props: propsType) {

  let variant : variantType = {
    backgroundColor: null,
    color: null,
    hover: null,
    active: null,
    padding: null
  }

  if(props.variant === "primaryNeutral") {
    variant.backgroundColor = '#365DF0'
    variant.color = '#FFFFFF'
    variant.hover = '#2F55CC'
    variant.active = '#244AA8F'
    variant.padding = '10px 30px'
  } else if(props.variant === "quartiaryDanger") {
    variant.backgroundColor = '#FFFFFF'
    variant.color = '#F95E5A'
  }

  return (
      <ButtonSt variant={variant}>
        {props.startIcon}
        {props.children}
      </ButtonSt>
  );
}
