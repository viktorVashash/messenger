import React, {Component} from 'react';
import Divider from 'material-ui/Divider';
import './styles.css';

export default class Messeges extends Component {
  render () {
    return (
      <div className='messegesContainer'>
        <form onSubmit={this.handleSubmit} encType="multipart/form-data">
           <input type="file" />
         </form>
        <Divider />
      </div>
    );
  }
}
