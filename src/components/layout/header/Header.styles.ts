import styled from "@emotion/styled";

/* 최상위 Header */
export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  height: 5rem;
  margin: 0 auto;
  width: 90vw;
  background-color: white;

  @media (max-width: 1023px) {
    width: 100%;
    box-shadow: 1px 0 8px 1px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 767px) {
    height: 2.5rem;
  }
`;

/* Header 내부 컨테이너 */
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;

  @media (max-width: 767px) {
    height: 2.5rem;
  }
`;

/* Main 로고 링크 */
export const MainLink = styled.a`
  font-family: "UraBumBumSP";
  font-weight: 700;
  font-size: 1.8rem;
  text-decoration: none;
  color: black;

  &:hover {
    color: #a9a9a9;
  }

  @media (max-width: 1023px) {
    display: none;
  }
`;

/* 네비게이션 컨테이너 */
export const NavContainer = styled.nav`
  display: flex;
  font-size: 16px;
  justify-content: space-between;

  @media (max-width: 1023px) {
    align-items: center;
    font-size: 1rem;
    height: 40px;
    justify-content: center;
    width: 100%;
  }
`;
