import CONSTS from '../constants/index';
import axios from 'axios';

function Messages (data) {
  console.log(data);
  return {
    type: CONSTS.GET_MESSAGES,
    payload: data
  };
}

export function getMessages () {
  return (dispatch) => {
    const request = axios.get('js/reducers/messages.json').then((data) => {
      dispatch(Messages(data.data.messages));
    });
  }
};

function MessagesById (payload) {
  let data = {};

  payload.messages && payload.messages.map((message) => {
    if (message.uid === payload.id) {
      data = {
        messages: message.messages,
        friend: payload.id
      }
    }
  });

  return {
    type: CONSTS.GET_MESSAGES_BY_ID,
    payload: data
  }
}

export function getMessagesByUserId (id) {
  return (dispatch) => {
    axios.get('js/reducers/messages.json').then((data) => {
      dispatch(MessagesById({id, messages: data.data.messages}));
    });
  }
}

export function feedBack (messages) {
  const feedBackText = [
    'Hi',
    'Ok',
    'How are you?',
    'Thanks'
  ];
  const messageIndex = Math.floor(Math.random() * feedBackText.length);
  const message = feedBackText[messageIndex];
  const data = {
    sender: messages.friend.id,
    message,
    mid: messages.messages.length
  };

  const messagesWithFeedBack = messages.messages.push(data);

  return {
    type: CONSTS.ADD_MESSAGE,
    payload: messagesWithFeedBack
  }

}

export function addMessage (messages, message) {
  const data = messages.messages.push(message);

  (dispatch) => {
    setTimeout(() => dispatch(feedBack(messages), 2000));
  }

  return {
    type: CONSTS.ADD_MESSAGE,
    payload: data
  }
}
