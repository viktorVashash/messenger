import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Header, Friends, Messeges} from '../components/components';
import Divider from 'material-ui/Divider';

function mapStateToProps (state) {
  return {
    friends: state.friends,
    messeges: state.messeges
  }
}

class Main extends Component {
  render() {
    return(
      <div className='mainContainer'>
        <Header />
        <Divider />
        <div className='mainBlock'>
          <Friends friends={this.props.friends}/>
          <Messeges />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Main);
