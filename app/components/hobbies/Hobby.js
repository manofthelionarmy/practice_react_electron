import React from 'react';

import Edit from '@material-ui/icons/Edit';
import Remove from '@material-ui/icons/Remove';
import styles from './Hobby.css';
import EditContainer from '../../containers/hobbies/EditContainer';

class Hobby extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditFormShowing: false
    };

    this.toggleEditForm = this.toggleEditForm.bind(this);
  }

  toggleEditForm() {
    const { isEditFormShowing } = this.state;

    if (isEditFormShowing) {
      this.setState({
        isEditFormShowing: false
      });
    } else {
      this.setState({
        isEditFormShowing: true
      });
    }
  }

  finishEdit() {
    this.setState({
      isEditFormShowing: false
    });
  }

  addingItem() {
    return (
      <React.Fragment>
        <li className={styles.list_item}>
          <EditContainer
            _id={this.props._id}
            name={this.props.name}
            hobby={this.props.hobby}
            finishEdit={() => this.finishEdit()}
          />

          <span>
            {/**We want to render the button for consistency, but remove the onClick functionality and make it grey*/}
            <button id={styles.cannot_click}>
              <Edit />
            </button>
            <button
              id={styles.remove}
              onClick={() => this.props.removeItem(this.props._id)}
            >
              <Remove />
            </button>
          </span>
        </li>
      </React.Fragment>
    );
  }

  showEditForm() {

    return (
      <React.Fragment>
        <li className={styles.list_item}>
          <EditContainer
            _id={this.props._id}
            name={this.props.name}
            hobby={this.props.hobby}
            finishEdit={() => this.finishEdit()}
          />

          <span>
            <button id={styles.edit} onClick={() => this.toggleEditForm()}>
              <Edit />
            </button>
            <button
              id={styles.remove}
              onClick={() => this.props.removeItem(this.props._id)}
            >
              <Remove />
            </button>
          </span>
        </li>
      </React.Fragment>
    );

  }

  doNotShowEditForm() {
     return (
       <React.Fragment>
         <li className={styles.list_item}>
           {this.props.name} likes {this.props.hobby}
           <span>
             <button id={styles.edit} onClick={() => this.toggleEditForm()}>
               <Edit />
             </button>
             <button
               id={styles.remove}
               onClick={() => this.props.removeItem(this.props._id)}
             >
               <Remove />
             </button>
           </span>
         </li>
       </React.Fragment>
     );
  }

  render() {
    if (this.props.name === '' && this.props.hobby === '') {
      return this.addingItem();
    }

    if (this.state.isEditFormShowing) {
      return this.showEditForm();
    } else {
      return this.doNotShowEditForm();
    }
  }
}

export default Hobby;
