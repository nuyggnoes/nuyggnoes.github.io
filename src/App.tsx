import "./App.css";
import MainTitle from "./components/title/MainTitle";
import Section from "./components/layout/Section";
import SubTitle from "./components/title/SubTitle";
import Paragraph from "./components/Paragraph";
import Header from "./components/layout/header/Header";
import Main from "./components/layout/Main";
import About from "./components/About";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Section>
          <MainTitle />
          <Paragraph />
        </Section>
        <Section id="about">
          <SubTitle text="ABOUT ME" />
          <About />
        </Section>
        <Section id="skills">
          <SubTitle text="SKILLS" />
        </Section>
        <Section id="projects">
          <SubTitle text="PROJECTS" />
        </Section>
        <Section id="contact">
          <SubTitle text="CONTACT" />
        </Section>
      </Main>
    </>
  );
}

export default App;
