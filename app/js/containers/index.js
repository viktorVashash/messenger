import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Header, Friends, Messages} from '../components/components';
import getUsers from '../actions/index';

function mapDispatchToProps (dispatch) {
  return {
    action: bindActionCreators(getUsers, dispatch)
  }
}

function mapStateToProps (state) {
  return {
    friends: state.friends,
    messages: state.messages
  }
}

class Main extends Component {
  constructor (props) {
    super(props);

    this.state = {
      friend: [],
      messages: [],
      userId: 1
    }

    this.changeUser = this.changeUser.bind(this);
    this.addMessage = this.addMessage.bind(this);
  }

  componentWillMount () {
    this.props.getUsers();
  }

  componentDidMount () {
    this.props.messages.map((message) => {
      if (message.uid === this.state.userId) {
        this.setState({
          messages: message.messages
        })
      }
    })
  }

  changeUser (id) {
    this.props.messages.map((message) => {
      if (message.uid === id) {
        this.setState({
          messages: message.messages,
          userId: id
        })
      }
    })
  }

  feedBack () {
    console.log(this.state.messages);
    const feedBackText = [
      'Hi',
      'Ok',
      'How are you?',
      'Thanks'
    ];

    const data = {
      sender: this.state.userId,
      message: feedBackText[Math.floor(Math.random() * feedBackText.length)],
      mid: this.state.messages.length + 1
    }

    this.state.messages.push(data);
    this.setState({
      messages: this.state.messages
    });
  }

  addMessage (data) {
    console.log(data);
    this.state.messages.push(data);
    this.setState({
      messages: this.state.messages
    });

    setTimeout(() => this.feedBack(), 2000);
  }

  render() {
    const {friends, messages} = this.props;

    return(
      <div className='mainContainer'>
        <Header />
        <div className='mainBlock'>
          <Friends friends={friends} changeUser={this.changeUser} />
          <Messages addMessage={this.addMessage} messages={this.state.messages}/>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, {getUsers})(Main);
