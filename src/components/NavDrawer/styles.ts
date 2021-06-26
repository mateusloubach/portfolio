import styled from 'styled-components';

interface ListProps {
  menuActive: boolean
}

export const Container = styled.div`
  position: absolute;
  left: 0;
  top: calc(50% - 11rem);
  /* this zindex is for framer motion */
  z-index: 10;

  .navigation {
    position: relative;
  }

  .toggle {
    position: absolute;
    top: calc(50% - 1.25rem);
    right: -25px;
    width: 2.5rem;
    height: 2.5rem;
    background-color: #262626;
    cursor: pointer;
    border: 2.5px solid #FFF;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    > svg {
     font-size: 1rem;
     color: var(--primary); 
    }
  }
`;

export const List = styled.div<ListProps>`
  position: relative;
  width: ${props => props.menuActive === true ? '10rem' : '4rem'};
  min-height: 22rem;
  background-color: #262626;
  border-radius: 0 75px 75px 0;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
  transition: all 0.3s;
  color: var(--primary);

  ul li {
    text-indent: 0;
    list-style: none;
    
  }

  > ul {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1.7rem 0;
  }

  > ul li {
    position: relative;
    width: 100%;

    &:hover {
      background-color: #333333;
    }
  }

  > ul li a {
    position: relative;
    display: block;
    width: 100%;
    display: flex;
    text-decoration: none;
    color: #dfff80;
    font-weight: 500;
  }

  > ul li a .icon {
    position: relative;
    display: block;
    min-width: 55px;
    height: 3.8rem;
    line-height: 3.8rem;
    text-align: center;
    color: var(--primary);

    & svg {
      font-size: 1.7rem;
    }
  }

  > ul li a .title {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    height: 3.8rem;
    line-height: 3.7rem;
    white-space: nowrap;
    margin-left: 0.6rem;
  }
`
