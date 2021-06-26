import styled from 'styled-components';

interface ContainerProps {
  tranparency: boolean
}

export const Container = styled.button<ContainerProps>`
  cursor: pointer;
  border: 0;
  outline: 0;
  font-size: 1rem;
  font-weight: 600;
  padding: .7rem 1.3rem;
  background-color: ${props => props.tranparency === false ? 'var(--primary)' : 'transparent'};
  border-radius: 40px;

  > a {
    text-decoration: none;
    color: var(--text-black);
    display: flex;
    justify-content: center;
    align-items: center;

    > svg {
      font-size: 1.5rem;
      margin-right: 1rem;
    }
  }

  &:hover {
    svg {
      font-size: 1.5rem;
    }
  }
`;
