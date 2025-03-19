import styled from "@emotion/styled";

const Item = styled.a`
  position: relative;
  font-size: 1.2rem;
  font-weight: 700;
  text-decoration: none;
  color: black;
  padding: 0 2rem;
  &:last-child {
    padding-right: 0;
  }
  &:hover {
    color: #a9a9a9;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 1.2rem;
    &:last-child {
      padding: 0 2rem;
    }
  }
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

function NavItem({ text }: { text: string }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const targetElement = document.getElementById(text.toLowerCase());
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <>
      <Item href={`#${text.toLowerCase()}`} onClick={handleClick}>
        {text}
      </Item>
    </>
  );
}

export default NavItem;
