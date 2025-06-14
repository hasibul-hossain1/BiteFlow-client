import styled from "styled-components";

const Pattern = ({ children }) => {
  return (
    <StyledWrapper>
      <div className="pattern text-white py-4">{children}</div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .pattern {
    width: 100%;
    height: 100%;
    /* Add your background pattern here */
    background: rgba(29, 31, 32, 0.904)
      radial-gradient(rgba(255, 255, 255, 0.712) 10%, transparent 1%);

    background-size: 11px 11px;
  }
`;

export default Pattern;
