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
          <h3 className='userName'>{this.props.userName}</h3>
        </div>
        <div className='titleWrapper'>
          <h1 className='headerTitle'>MessageME</h1>
        </div>
      </div>
    );
  }
}
