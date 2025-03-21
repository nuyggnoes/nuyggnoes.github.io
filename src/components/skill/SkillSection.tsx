import styled from "@emotion/styled";
import React from "react";

const Section = styled.div`
  margin-bottom: 2.5rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

const SkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const SkillTag = styled.li<{ bgColor: string; textColor: string }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.9rem;
  border-radius: 9px;
  font-size: 0.9rem;
  font-weight: 500;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  white-space: nowrap;
`;

type Skill = {
  id: string;
  icon: React.ElementType;
  content: string;
  bgColor: string;
  textColor: string;
};

export default function SkillSection({ title, skills }: { title: string; skills: Skill[] }) {
  return (
    <Section>
      <SectionTitle>{title}</SectionTitle>
      <SkillList>
        {skills.map(({ id, icon: Icon, content, bgColor, textColor }) => (
          <SkillTag key={id} bgColor={bgColor} textColor={textColor}>
            <Icon size={18} />
            {content}
          </SkillTag>
        ))}
      </SkillList>
    </Section>
  );
}
