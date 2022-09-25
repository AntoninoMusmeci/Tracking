import styled from "styled-components";

function Modal({ children, show, setShow }) {
  if (!show) return null;

  return (
    <ModalWrapper
      onClick={() => {
        setShow(false);
      }}
    >
      <Content
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </Content>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  width: 30rem;
  background-color: white;
  padding: 10px;
  overflow-y: scroll;
`;

export default Modal;
