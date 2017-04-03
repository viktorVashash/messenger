import CONSTS from '../constants/index';
import axios from 'axios';

function Users (users) {
  return {
    type: CONSTS.GET_USERS,
    payload: users
  };
}

export function getUsers () {
  return (dispatch) => {
    axios.get(`${CONSTS.url}`).then((data) => {
      dispatch(Users(data.data.data));
    });
  }
};
