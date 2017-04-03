import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {UsersActions} from '../../actions';
import {Friends} from '../../components/components';

function mapStateToProps (state) {
  return {
    friends: state.friends
  };
};

function mapDispatchToProps (dispatch) {
  return {
    UsersActions: bindActionCreators({...UsersActions}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Friends);
