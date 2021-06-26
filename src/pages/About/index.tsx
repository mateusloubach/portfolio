import React from 'react';
import SkillCard from '../../components/Cards/SkillCard';
import Title from '../../components/Title';
import { pageVariants, pageTransition } from '../../assets/framerMotion'
import { Container, Media, Content, Segment } from './styles';
import { CgStack } from 'react-icons/cg'
import { RiReactjsLine } from 'react-icons/ri'
import { SiTypescript, SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si'


const About: React.FC = () => {
  const cards = [
    {
      title: "Front-End Dev",
      icon: <CgStack/>,
      // children: "Ainda não sei o que escrever aqui, mas escreverei"
    },
    {
      title: "Typescript",
      icon: <SiTypescript/>,
      // children: "Ainda não sei o que escrever aqui, mas escreverei"
    },
    {
      title: "Javascript",
      icon: <SiJavascript/>,
      // children: "Ainda não sei o que escrever aqui, mas escreverei"
    },
    {
      title: "ReactJS",
      icon: <RiReactjsLine/>,
      // children: "Ainda não sei o que escrever aqui, mas escreverei"
    },
    {
      title: "HTML",
      icon: <SiHtml5/>,
      // children: "Ainda não sei o que escrever aqui, mas escreverei"
    },
    {
      title: "CSS",
      icon: <SiCss3/>,
      // children: "Ainda não sei o que escrever aqui, mas escreverei"
    }
  ]
  return (
      <Container
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Media>
          <img src="./images/dawn.gif" alt="studentback" />
        </Media>

        <Content>
          <Title>ABOUT ME</Title>
          <h1>Hello, I am Mateus Loubach.</h1>
          <Segment />
          <p>
            Graduated in System Analysis, currently studying Software Engineering. For the past couple of years I have been working on Web Applications, Open-Source code Applications, and more.
          </p>

          <div className="all-skills">
            {
              cards.map((card) => (
                <SkillCard {...card}/>
              ))
            }
          </div>
        </Content>
      </Container>
  );
}

export default About;