import PropTypes from 'prop-types';
import { TailSpin } from 'react-loader-spinner';

export const Loader = ({ isLoading }) => {
  return (
    <TailSpin
      height="100"
      width="100"
      color="#4fa94d"
      ariaLabel="tail-spin-loading"
      margin = "auto"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

Loader.propTypes = {
  isLoading: PropTypes.bool,
};
