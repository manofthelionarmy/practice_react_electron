import HobbiesList from '../../components/hobbies/HobbiesList';
import {connect} from 'react-redux';
import {addItem} from '../../actions/hobbies/hobbyActions';


const mapDispatchToProps = dispatch => {
  return {
    addItem: (hobby) => {
      dispatch(addItem(hobby));
    }
  }
}

const mapStateToProps = state => ({
  hobbies: state.hobbies.hobbies
})

export default connect(mapStateToProps, mapDispatchToProps)(HobbiesList);
