import React from 'react';
import { pageVariants, pageTransition } from '../../assets/framerMotion'
import Divider from '../../components/Divider';
import PortifolioCard from '../../components/Cards/PortifolioCard';
import Title from '../../components/Title';
import { Container } from './styles';

const Portifolio: React.FC = () => {
  return (
    <Container
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Title>PORTFOLIO</Title>
      <h1>Here are some of my work.</h1>
      <Divider />

      <div className="views">
        <PortifolioCard
          title="My GitHub"
          buttonLabel="Go to Repository"
          link="https://github.com/mateusloubach"
          img="https://github.com/mateusloubach/mateusloubach.github.io/blob/master/first.gif?raw=true"
        >
          A web finance manegement, builded with react, typescript, stylized with tyled-components and reCharts for animated charts

        </PortifolioCard>

        <PortifolioCard
          title="JS 3D Project"
          buttonLabel="Visit Webpage"
          link="https://javascript3d.netlify.app/"
          img="https://github.com/mateusloubach/javascript3d/blob/main/second.gif?raw=true"
        >
          A team page made with HTML, CSS and Javascript. It is product of devChallenges.io
        </PortifolioCard>       
      </div>
    </Container>
  )
}

export default Portifolio;