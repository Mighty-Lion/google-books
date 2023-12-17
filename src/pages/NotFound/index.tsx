import { css } from '@emotion/css';
import { NotFoundButton } from './index.styles';

function Index() {
  return (
    <>
      <h1
        className={css`
          margin-bottom: 20px;
        `}
      >
        Not Found
      </h1>
      <NotFoundButton to="/">Go Home</NotFoundButton>
    </>
  );
}

export default Index;
