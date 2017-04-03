import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {MessagesActions, UsersActions} from '../../actions';
import {Messages} from '../../components/components';

function mapStateToProps (state) {
  return {
    messages: state.messages
  };
};

function mapDispatchToProps (dispatch) {
  return {
    MessagesActions: bindActionCreators({...MessagesActions}, dispatch),
    UsersActions: bindActionCreators({...UsersActions}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
