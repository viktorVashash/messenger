import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Messages from './Messages';
import Friends from './Friends';
import {Modal, Header} from '../components/components';

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
      friend: {},
      userName: '',
      modal: true,
      error: false
    };

     this.changeUser = this.changeUser.bind(this);
     this.onUsernameType = this.onUsernameType.bind(this);
     this.saveUsername = this.saveUsername.bind(this);
  }

  changeUser (friend) {
    this.setState({
      friend
    });
  }

  onUsernameType (event) {
    this.setState({
      userName: event.target.value
    });
  }

  saveUsername () {
    if (this.state.userName.length > 2) {
      this.setState({
        modal: !this.state.modal,
        friend: this.props.friends[0]
      });
    } else {
      this.setState({
        error: true
      });
    }
  }

  render() {
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
          <Friends friends={this.props.friends} changeUser={this.changeUser} />
          <Messages messages={this.props.messages} addMessage={this.addMessage} friend={this.state.friend} />
        </div>
      </div>
    );
  }
};

export default connect(mapStateToProps)(Main);
