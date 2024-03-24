import { Oval } from 'react-loader-spinner';

export const LoadingSpinner = () => {
  return (
    <Oval
      visible={true}
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="oval-loading"
      wrapperStyle={{ justifyContent: 'center', margin: '100px' }}
      wrapperClass=""
    />
  );
};
