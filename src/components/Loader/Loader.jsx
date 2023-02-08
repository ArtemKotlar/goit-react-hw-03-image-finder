import { Dna } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div style={{ position: 'fixed', top: '50%', left: '50%' }}>
      {' '}
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};
