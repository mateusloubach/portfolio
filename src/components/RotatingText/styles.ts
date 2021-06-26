import styled from 'styled-components';

export const Container = styled.span`
  .react-rotating-text-cursor {
    animation: blinking-cursor 0.8s cubic-bezier(0.68, 0.01, 0.01, 0.99) 0s infinite;
  }

  @keyframes blinking-cursor {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
