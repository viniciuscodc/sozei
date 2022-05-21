import styled from "styled-components";

interface propstype {
    children: React.ReactNode
}

const ModalSt = styled.div`
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`

export default function Modal(props : propstype) {
    return(
    <ModalSt>
        {props.children}
    </ModalSt>)
}