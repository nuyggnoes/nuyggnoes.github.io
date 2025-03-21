import React from "react";
import { SKILL_ITEM } from "../../constants/skillItem";
import SkillSection from "./SkillSection";

function Skill() {
  const { language, frontend, backend, devops } = SKILL_ITEM;
  return (
    <div>
      <SkillSection title={language.content} skills={language.data} />
      <SkillSection title={frontend.content} skills={frontend.data} />
      <SkillSection title={backend.content} skills={backend.data} />
      <SkillSection title={devops.content} skills={devops.data} />
    </div>
  );
}

export default Skill;
