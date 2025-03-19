import styled from "@emotion/styled";

const StyledMain = styled.div`
  width: 100%;
  max-width: 39rem;
  margin: 0 auto;
`;

export default function Main({ children }: { children: React.ReactNode }) {
  return <StyledMain>{children}</StyledMain>;
}
