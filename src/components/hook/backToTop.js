import { useState, useEffect } from "react";
import { AiOutlineUp } from "react-icons/ai";
import styled from "styled-components";

const ButtonContainer = styled.span`
  position: fixed;
  bottom: 20px;
  right: -5px;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
  animation: fadeIn 0.3s;
  opacity: 1;
  border-radius: 4px;
  transition: opacity 1s;
  z-index: 1;
  display: ${({ isScrollButtonVisible }) =>
    isScrollButtonVisible ? "flex" : "none"};
  &:hover {
    opacity: 1;
  }
`;

export function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkScrollHeight = () => {
      if (!showButton && window.scrollY > 400) {
        setShowButton(true);
      } else if (showButton && window.scrollY <= 400) {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", checkScrollHeight);
    return () => {
      window.removeEventListener("scroll", checkScrollHeight);
    };
  }, [showButton]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <ButtonContainer isScrollButtonVisible={showButton} onClick={scrollToTop}>
        <div className="button__toTop">
          <AiOutlineUp />
        </div>
      </ButtonContainer>
    </>
  );
}
