import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import { ImgGalleryItem, Image } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = { isModalOpen: false };

  toggleModal = () => {
    this.setState(prev => ({ isModalOpen: !prev.isModalOpen }));
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props;
    const { isModalOpen } = this.state;
    const { toggleModal } = this;
    return (
      <ImgGalleryItem>
        <Image
          src={webformatURL}
          alt={tags}
          width="500"
          height="210"
          loading="lazy"
          onClick={this.toggleModal}
        />
        {isModalOpen && (
          <Modal
            modalImg={largeImageURL}
            tags={tags}
            closeModal={toggleModal}
          />
        )}
      </ImgGalleryItem>
    );
  }
}
