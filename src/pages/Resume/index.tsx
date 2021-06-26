import React from 'react';
import { pageVariants, pageTransition } from '../../assets/framerMotion';
import { RiVipCrown2Line, RiVipCrownLine, RiVipDiamondLine, RiTrophyLine } from 'react-icons/ri';
import Divider from '../../components/Divider';
import TimeLineCard from '../../components/TimeLine/TimeLineCard';
import TimeLineTitle from '../../components/TimeLine/TimeLineTitle';
import Title from '../../components/Title';
import { Container } from './styles';

const Resume: React.FC = () => {
  return (
    <Container
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Title>RESUME</Title>
      <h1>Education</h1>
      <Divider />

      <div className="timelines">
        <div className="lef">
          <TimeLineTitle>Education</TimeLineTitle>

          <TimeLineCard 
            title="Sotware Engineering"
            subtitle="Universidade Estácio de Sá"
            icon={<RiVipCrown2Line/>}
          >
            Bachelor's Degree in Software Engineering with expected conclusion on 2024.
          </TimeLineCard>
          <TimeLineCard 
            title="System Analysis & Design"
            subtitle="Wells International College"
            icon={<RiVipCrownLine/>}
          >
            Diploma of System Analysis focused on Front-End solutions and Back-End construction.
          </TimeLineCard>
          <TimeLineCard 
            title="International Business & Marketing"
            subtitle="ILSC - Business College"
            icon={<RiVipCrownLine/>}
          >
            Diploma of International Business focused on Marketing skills and analysis.
          </TimeLineCard>
          
        </div>

        <div className="right">
          <TimeLineTitle>Courses / Achievements</TimeLineTitle>
          <TimeLineCard 
            title="React/Redux Course"
            subtitle="Cod3r Tech School"
            icon={<RiTrophyLine/>}
          >
            Course by Cod3r Tech School providing knowledge in ReactJS, Redux, Webpack, Redux-Form, MongoDB, Express, and NodeJS.
          </TimeLineCard>
          <TimeLineCard 
            title="Web Developer Course"
            subtitle="iMedia Brasil"
            icon={<RiTrophyLine/>}
          >
            Course by iMedia Brasil, lectured by André Fontenelle providing knowledge in HTML5, CSS3, Javascript, BootStrap, jQuery, TypeScript, PHP, MySQL, AJAX, and SEO.
          </TimeLineCard>
          <TimeLineCard 
            title="IronHack Sims Scholarship Winner"
            subtitle="Scholarship offered by Electronic Arts"
            icon={<RiVipDiamondLine/>}
          >
            Limited event sponsored by Electronic Arts to select very few for a scholarship in IronHack schools.
          </TimeLineCard>
        </div>
        
      </div>
    </Container>
  )
}

export default Resume;