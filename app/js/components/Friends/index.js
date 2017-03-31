import React, {Component} from 'react';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CircularProgress from 'material-ui/CircularProgress';
import Friend from './Friend';
import './styles.css';

export default class Friends extends Component {
  constructor (props) {
    super(props);

    this.startChat = this.startChat.bind(this);
  }

  startChat (id) {
    this.props.changeUser(id);
  }

  renderFriend (friend) {
    return (
      <Friend
        key={friend.id}
        friend={friend}
        startChat={this.startChat}
      />
    );
  }

  render () {
    const {friends} = this.props;

    return (
      <div className='friendsContainer'>
        <List>
          <Subheader>Recent chats</Subheader>
          {!friends ? <CircularProgress /> : friends.map(this.renderFriend.bind(this))}
        </List>
      </div>
    );
  }
};
