import styled from "@emotion/styled";

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-top: 2em;
  /* ::selection {
    background-color: #a9e8ff;
    color: black;
  } */
  @media screen and (max-width: 960px) {
    font-size: 2rem;
  }
`;

export default function MainTitle() {
  return (
    <>
      <Title>
        안녕하세요. <br />
        프론트엔드 개발자 임성균입니다.
      </Title>
    </>
  );
}
