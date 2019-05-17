import React from 'react';
import EditForm from '../../components/hobbies/EditForm';
import {editItem} from '../../actions/hobbies/hobbyActions';
import {connect} from 'react-redux';

const mapDispatchToProps = dispatch => {
    return {
        editItem: (editedHobby) => {
            dispatch(editItem(editedHobby));
        }
    }
}

export default connect(null, mapDispatchToProps)(EditForm);
