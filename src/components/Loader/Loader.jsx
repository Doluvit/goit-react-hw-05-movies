import { MagnifyingGlass } from 'react-loader-spinner';
import { Backdrop, Wrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <Backdrop>
      <Wrapper>
        <MagnifyingGlass
          visible={true}
          height="120"
          width="120"
          ariaLabel="blocks-loading"
          wrapperStyle={{ margin: 'auto' }}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      </Wrapper>
    </Backdrop>
  );
};

