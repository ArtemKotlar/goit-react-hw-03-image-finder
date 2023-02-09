import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalWindow } from './Modal.styled';

const modalRoot = document.getElementById('modal');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }

  closeModal = e => {
    if (e.code === 'Escape' || e.currenTarget !== e.target) {
      this.props.closeModal();
      return;
    }
  };

  render() {
    const { tags, modalImg } = this.props;
    return createPortal(
      <Overlay onClick={this.closeModal}>
        <ModalWindow>
          <img src={modalImg} alt={tags} />
        </ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}
