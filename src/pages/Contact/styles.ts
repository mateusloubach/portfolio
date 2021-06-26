import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7px;
  margin-bottom: 2rem;
`;

export const Media = styled.div`
  margin-right: 3%;

  > img {
    height: 18rem;
  } 
`

export const Content = styled.div`
  width: 40%;
  margin-left: 2%;

  > h1 {
    margin-top: 1rem;
  }

  > p {
    margin-bottom: .5rem;
  }

  .all-skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    > div {
      margin: .5rem;
    }
  }
`

export const Segment = styled.div`
  width: 7rem;
  height: 1px;
  background-color: var(--primary);
  margin: 1rem 0 2rem .7rem;
`
