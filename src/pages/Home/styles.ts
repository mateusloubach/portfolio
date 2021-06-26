import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  
  // background-image: url(./images/background22.jpg);
  background-color: #7e7c67;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.main`
  width: 30rem;
  
  > h1 {
    margin: 2rem 0;
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--text-white);
  }

  button + button {
    margin-left: 2rem;
    align-items: center;
    position: absolute;
    top: 375px;
  }
`

export const Media = styled.div`
  > img {
    height: 70vh;
  }
`
