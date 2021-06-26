import React from 'react';
import Title from '../../components/Title';
import { pageVariants, pageTransition } from '../../assets/framerMotion'
import { Container, Media, Content, Segment } from './styles';
import Form from '../../components/Form';

const Contact: React.FC = () => {
  return (
    <Container
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Media>
        <img src="./images/tenor.gif" alt="ops! it went bye-bye" />
      </Media>

      <Content>
        <Title>CONTACT ME</Title>
        <h1>Questions/Doubts/Offers?</h1>
        <Segment />
        <p>I’m interested in Freelance opportunities – especially ambitious or large projects. However, if you have other requests or questions, don’t hesitate to use the form.</p>
        
        <Form />
      </Content>
      
        <title>Thank you!</title>

    </Container>
  );
}

export default Contact;