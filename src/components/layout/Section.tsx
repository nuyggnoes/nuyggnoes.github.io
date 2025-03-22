import styled from "@emotion/styled";

const StyledSection = styled.section`
  padding-top: 5.4rem;
  /* height: 1000px; */
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

interface Prop {
  id?: string;
  children: React.ReactNode;
}

export default function Section({ id, children }: Prop) {
  return <StyledSection id={id}>{children}</StyledSection>;
}
