import {ADD_ITEM, EDIT_ITEM, REMOVE_ITEM} from '../../actions/hobbies/types';

const initialState = {
  hobbies: [
    {
      id: 1,
      name: 'Armando',
      hobby: 'guitar'
    }
  ]
}

const hobbyReducer = (state = initialState, action) => {

  switch(action.type) {
    case ADD_ITEM: {

      let new_id = 0;

      const hobbies = state.hobbies;

      if(!hobbies[0]) {
        new_id = 1;
      } else {
        new_id = hobbies[0].id + 1;
      }

      const hobby = {
        id: new_id,
        name: action.hobby.name,
        hobby: action.hobby.hobby
      }

      hobbies.unshift(hobby);

      return Object.assign({}, state, {
        hobbies: [...hobbies]
      });
    }
    case EDIT_ITEM: {

      const hobby = action.hobby;

      const hobbies = state.hobbies;

      hobbies.forEach((h) => {
        if(h.id === hobby.id) {
          h.name = hobby.name;
          h.hobby = hobby.hobby;
        }
      });

      return Object.assign({}, state, {
        hobbies: [...hobbies]
      });
    }
    case REMOVE_ITEM: {

      const id = action.id;

      let hobbies = state.hobbies;

      if( hobbies.length === 1) {
        hobbies.splice(0);
      } else {
        hobbies = hobbies.filter((h) => h.id !== id);
      }

      return Object.assign({}, state, {
        hobbies: [...hobbies]
      });
    }
    default:
      return state;
  }
}

export default hobbyReducer;
