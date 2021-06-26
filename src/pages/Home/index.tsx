import React from 'react';
import Button from '../../components/Button';
import RotatingText from '../../components/RotatingText';
import Title from '../../components/Title';
import { pageVariants, pageTransition } from '../../assets/framerMotion'
import { Container, Content, Media } from './styles';
import { FaGithubAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const rotatingTextItems = ['Web developer', 'React developer', 'Typescript developer']

  return (
    <Container
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Content>
        <Title>Hello World!</Title>
        <h1>
          I'm a <RotatingText items={rotatingTextItems}/><br/>
          Based in São Paulo/Brazil
        </h1>
        
        <div>
        <Button>
          <Link to="/portfolio">My Portfolio</Link>
        </Button>

        <Button tranparency>
          <a href="https://github.com/mateusloubach" 
            target="_blank"
            rel="noreferrer"
          ><FaGithubAlt/>Github</a>
        </Button>

        </div>
      </Content>

      <Media>
        <img src="./images/home_page.png" alt="" />
      </Media>
      </Container>
    
  )
}

export default Home;