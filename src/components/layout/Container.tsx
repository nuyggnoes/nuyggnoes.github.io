import styled from "@emotion/styled";

const StyledContainer = styled.div`
  width: 100%;
  /* max-width: 39rem; */
  margin-left: auto;
  margin-right: auto;
  height: 200vh;
`;

export default function Container({ children }: { children: React.ReactNode }) {
  return <StyledContainer>{children}</StyledContainer>;
}
