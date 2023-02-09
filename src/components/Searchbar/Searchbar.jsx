import { Component } from 'react';
import {
  SearchbarWrap,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    query: '',
    page: 1,
  };

  hendleNemeChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = () => {
    const { query } = this.state;
    const { onSubmit } = this.props;

    if (query.trim() === '') {
      return alert('Please enter a search value');
    }
    onSubmit(query);
    this.setState({ query: '' });
  };
  render() {
    const { hendleNemeChange } = this;
    const { query } = this.state;
    return (
      <SearchbarWrap>
        <SearchForm
          onSubmit={e => {
            e.preventDefault();
            this.handleSubmit();
          }}
        >
          <SearchFormInput
            type="text"
            value={query}
            onChange={hendleNemeChange}
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>
        </SearchForm>
      </SearchbarWrap>
    );
  }
}
