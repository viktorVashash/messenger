import React from 'react';
import SearchIcon from 'material-ui/svg-icons/action/search';
import './styles.css';

export default function (props) {
	return (
		<div className='searchInputContainer'>
    	<SearchIcon color='#2F3C47' />
      <input
        className='searchInput'
        type='text'
        placeholder='Search'
        onChange={props.searchUpdated.bind(this)}
      />
    </div>
	);
};
