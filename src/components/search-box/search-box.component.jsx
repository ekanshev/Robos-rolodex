import React from 'react';

import './search-box.styles.css';

export const SearchBox = props => (
  <input
    className='search-box'
    type='search'
    placeholder='search robos'
    onChange={props.onSearchChange}
  />
);
