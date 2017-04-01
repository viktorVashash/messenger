import CONSTS from '../constants/index';
import axios from 'axios';

export default function getUsers () {
  const request = axios.get(`${CONSTS.url}`).then((data) => {
    return data.data.data;
  });

  return {
    type: CONSTS.GET_USERS,
    payload: request
  };
};
