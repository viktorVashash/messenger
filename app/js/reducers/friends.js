import CONSTS from '../constants/index';

export default function (state = null, action) {
  switch (action.type) {
    case CONSTS.GET_USERS:
      return action.payload;
    default:
      return state;
  }
};
