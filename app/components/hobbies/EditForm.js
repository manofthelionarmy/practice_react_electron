import React from 'react';
import styles from './EditForm.css';

class EditForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      id: this.props._id,
      name: this.props.name,
      hobby: this.props.hobby
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const hobby = {
      id: this.state.id,
      name: (this.state.name !== '') ? this.state.name: this.props.name,
      hobby: (this.state.hobby !== '') ? this.state.hobby : this.props.hobby
    }

    this.props.editItem(hobby);
    this.props.finishEdit();
  }

  render() {
    return (
      <React.Fragment>
        <form className={styles.edit_form} onSubmit={this.onSubmit}>
          <input
            name="name"
            value={this.state.name}
            placeholder={this.props.name ? this.props.name : 'Enter name'}
            onChange={this.onChange}
          />
          {' '}likes{' '}
          <input
            name="hobby"
            value={this.state.hobby}
            placeholder={
              this.props.hobby ? this.props.hobby : 'Enter hobby'
            }
            onChange={this.onChange}
          />
          <button type="submit" id={styles.submit}>Enter</button>
        </form>
      </React.Fragment>
    );
  }
}


export default EditForm;
