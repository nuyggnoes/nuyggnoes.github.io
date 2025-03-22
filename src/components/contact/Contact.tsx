import styled from "@emotion/styled";
import { CONTACT_ITEMS } from "../../constants/contactItem";

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-top: 2px solid #ddd;
  border-bottom: 2px solid #ddd;
  font-size: 1.2em;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #eee;
`;

const TitleCell = styled.td`
  font-weight: 700;
  padding: 0.8em 1em;
  width: 30%;
  white-space: nowrap;
`;

const ContentCell = styled.td`
  padding: 0.8em 1em;
  color: #444;
  a {
    color: #0687f0;
    text-decoration: none;
    :visited {
      color: #0687f0;
    }
  }
`;

function Contact() {
  return (
    <StyledTable>
      <tbody>
        {CONTACT_ITEMS.map(({ id, title, content, isLink }) => (
          <TableRow key={id}>
            <TitleCell>{title}</TitleCell>
            <ContentCell>
              {isLink ? (
                <a href={content} target="_blank" rel="noopener noreferrer">
                  {content}
                </a>
              ) : (
                content
              )}
            </ContentCell>
          </TableRow>
        ))}
      </tbody>
    </StyledTable>
  );
}

export default Contact;
