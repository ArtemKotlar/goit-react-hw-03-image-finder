import { Component } from 'react';
import { Loader } from './Loader/Loader';
import { getPhotos } from 'helpers/PixabayApi';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    totalHits: null,
    isLoading: false,
  };

  componentDidUpdate(_, prev) {
    const { page, query, images } = this.state;

    if (prev.page !== page || prev.query !== query) {
      this.setState({ isLoading: true });

      getPhotos(query, page).then(res => {
        if (!res.hits.length) {
          alert(`Please, try another one`);
          this.setState({
            isLoading: false,
          });
          return;
        }
        this.setState({
          images: [...images, ...res.hits],
          totalHits: res.totalHits,
          isLoading: false,
        });
      });
    }
  }

  handelSubmit = text => {
    this.setState({
      query: text,
      images: [],
      page: 1,
      totalHits: null,
    });
  };

  render() {
    const { handelSubmit } = this;
    const { totalHits, isLoading, images } = this.state;
    return (
      <div>
        <Searchbar onSubmit={handelSubmit} />
        {isLoading && <Loader />}
        <>
          <Button onShow={''} />
        </>
      </div>
    );
  }
}
