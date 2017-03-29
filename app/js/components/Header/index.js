import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import './styles.css';

export default class Header extends Component {
  render () {
    return (
      <div className='headerContainer'>
        <div className='profileWrapper'>
          <Avatar
            src='images/1.jpg'
            size={40} />
            <h3>FirstName</h3>
        </div>
        <div className='titleWrapper'>
          <h1 className='headerTitle'>MessegeME</h1>
        </div>
      </div>
    );
  }
}
