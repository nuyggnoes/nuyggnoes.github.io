import styled from "@emotion/styled";

const StyledP = styled.p`
  font-size: 1.2em;
  margin: 2em 0;
`;

function Paragraph() {
  return (
    <StyledP>
      언제나 새로운 것을 배울 준비가 되어있습니다. 수많은 도전과 경험을 통해 지속적인 성장을 추구하는 프론트엔드
      개발자가 되고 싶습니다.
    </StyledP>
  );
}

export default Paragraph;
