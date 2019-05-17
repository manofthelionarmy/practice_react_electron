import Hobby from '../../components/hobbies/Hobby';
import {removeItem} from '../../actions/hobbies/hobbyActions';
import {connect} from 'react-redux';

const mapDispatchToProps = dispatch => {
  return ({
    removeItem: (id) => {
      dispatch(removeItem(id));
    }
  });
}


export default connect(null, mapDispatchToProps)(Hobby);
