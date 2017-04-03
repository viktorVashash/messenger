import CONSTS from '../constants/index';

export default function (state = null, action) {
  switch (action.type) {
    case CONSTS.GET_MESSAGES:
      return action.payload;
    case CONSTS.GET_MESSAGES_BY_ID:
      return action.payload;
    default:
      return state;
  }
};
