import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Modal, Header, Friends, Messages} from '../components/components';
import getUsers from '../actions/index';

function mapStateToProps (state) {
  return {
    friends: state.friends,
    messages: state.messages
  }
};

class Main extends Component {
  constructor (props) {
    super(props);

    this.state = {
      friend: [],
      messages: [],
      friend: {},
      userName: '',
      modal: true,
      error: false
    };

    this.changeUser = this.changeUser.bind(this);
    this.addMessage = this.addMessage.bind(this);
    this.onUsernameType = this.onUsernameType.bind(this);
    this.saveUsername = this.saveUsername.bind(this);
  }

  componentWillMount () {
    this.getUsers();
  }

  async getUsers () {
    await this.props.getUsers();

    this.props.messages.map((message) => {
      if (message.uid === this.props.friends[0].id) {
        this.setState({
          messages: message.messages,
          friend: this.props.friends[0]
        });
      }
    });
  }

  changeUser (friend) {
    this.props.messages.map((message) => {
      if (message.uid === friend.id) {
        this.setState({
          messages: message.messages,
          friend
        });
      }
    });
  }

  feedBack () {
    const feedBackText = [
      'Hi',
      'Ok',
      'How are you?',
      'Thanks'
    ];
    const messageIndex = Math.floor(Math.random() * feedBackText.length);
    const message = feedBackText[messageIndex];
    const data = {
      sender: this.state.friend.id,
      message,
      mid: this.state.messages.length
    };

    this.state.messages.push(data);
    this.setState({
      messages: this.state.messages
    });
  }

  addMessage (data) {
    this.state.messages.push(data);
    this.setState({
      messages: this.state.messages
    });

    setTimeout(() => this.feedBack(), 2000);
  }

  onUsernameType (event) {
    this.setState({
      userName: event.target.value
    });
  }

  saveUsername () {
    if (this.state.userName.length > 2) {
      this.setState({
        modal: !this.state.modal
      });
    } else {
      this.setState({
        error: true
      });
    }
  }

  render() {
    const {friends, messages} = this.props;

    return(
      <div className='mainContainer'>
        {
          this.state.modal &&
          <Modal
            modal={this.state.modal}
            onUsernameType={this.onUsernameType}
            saveUsername={this.saveUsername}
            error={this.state.error}
          />
        }
        <Header userName={this.state.userName} />
        <div className='mainBlock'>
          <Friends friends={friends} changeUser={this.changeUser} />
          <Messages addMessage={this.addMessage} messages={this.state.messages} friend={this.state.friend} />
        </div>
      </div>
    );
  }
};

export default connect(mapStateToProps, {getUsers})(Main);
