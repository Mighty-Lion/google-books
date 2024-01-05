import { keyframes } from '@emotion/css';
import styled from '@emotion/styled';

const spinner = keyframes`
        0%  {
              transform: rotate(0deg);
        }
         100% {
              transform: rotate(360deg);
        }
    `;

export const SpinnerContainer = styled.div`
  margin: 0 auto;
`;

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 10px solid #f3f3f3; /* Light grey */
  border-top: 10px solid #383636; /* Black */
  border-radius: 50%;
  animation: ${spinner} 1.5s linear infinite;
`;
