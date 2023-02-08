import { Loader } from './Loader/Loader';
// import { getPhotos } from 'helpers/PixabayApi';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Loader />
    </div>
  );
};
