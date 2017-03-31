import CONSTS from '../constants/index';

export default function (state = null, action) {
  switch (action.type) {
    case CONSTS.GET_USERS:
      return action.payload
    case CONSTS.START_CHAT:
        return state
    default:
      return state;
  }
}
