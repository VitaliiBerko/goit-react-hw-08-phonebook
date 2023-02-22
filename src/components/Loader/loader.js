import { Watch } from 'react-loader-spinner';

const Loader = () => (
  <>
    <Watch
      height="80"
      width="80"
      radius="48"
      color="#4fa94d"
      ariaLabel="watch-loading"
      wrapperStyle={{ justifyContent: 'center' }}
      wrapperClassName=""
      visible={true}
     
    />
  </>
);

export default Loader;
