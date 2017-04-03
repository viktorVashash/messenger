import React, {Component} from 'react';
import {List} from 'material-ui/List';
import CircularProgress from 'material-ui/CircularProgress';
import SearchBar from './SearchBar';
import Friend from './Friend';
import './styles.css';

export default class Friends extends Component {
  constructor (props) {
    super(props);

    this.state = {
      activeFriend: {
        id: 1
      },
      term: ''
    }

    this.startChat = this.startChat.bind(this);
    this.searchUpdated = this.searchUpdated.bind(this);
  }

  componentWillMount () {
    this.getUsers();
  }

  async getUsers () {
    await this.props.UsersActions.getUsers();
  }

  startChat (friend) {
    this.props.changeUser(friend);
    this.setState({
      activeFriend: friend
    });
  }

  searchUpdated (event) {
    this.setState({
      term: event.target.value
    });
  }

  renderFriend (friend) {
    const activeStyle = this.state.activeFriend.id === friend.id;

    return (
      <Friend
        key={friend.id}
        friend={friend}
        activeStyle={activeStyle}
        startChat={this.startChat}
      />
    );
  }

  render () {
    const {term} = this.state;
    const {friends} = this.props;
    let friendsFilter = friends;

    if (term.length > 0) {
      friendsFilter = friendsFilter.filter((friend) => {
        return friend.first_name.toLowerCase().match(term.toLowerCase())
      });
    }

    return (
      <div className='friendsContainer'>
        {
          friends && <SearchBar searchUpdated={this.searchUpdated} />
        }
        <div className='scrollableList'>
          <List style={{padding: 0}}>
            {
              !friends ?
              <CircularProgress color='#2F3C47' style={{alignSelf: 'center'}} />
              :
              friendsFilter.map(this.renderFriend.bind(this))
            }
          </List>
        </div>
      </div>
    );
  }
};
