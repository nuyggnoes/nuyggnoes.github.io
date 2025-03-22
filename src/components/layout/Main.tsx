import styled from "@emotion/styled";

const StyledMain = styled.div`
  width: 90vw;
  max-width: 39rem;
  margin: 0 auto;
  padding-bottom: 10rem;
`;

export default function Main({ children }: { children: React.ReactNode }) {
  return <StyledMain>{children}</StyledMain>;
}
