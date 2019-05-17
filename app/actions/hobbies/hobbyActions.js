import {ADD_ITEM, EDIT_ITEM, REMOVE_ITEM} from './types';

/**
 *
 * @param {Hobby} addedHobby Hobby Object that holds the newly added Hobby in HobbiesList
 */
export const addItem = (addedHobby) => {
  return {
    type: ADD_ITEM,
    hobby: addedHobby
  }
}

/**
 *
 * @param {Hobby} editedHobby Hobby Object holds the most recent updated information
 */
export const editItem = (editedHobby) => {
  return {
    type: EDIT_ITEM,
    hobby: editedHobby
  }
}

/**
 *
 * @param {number} id Has the key of the Hobby item in the HobbiesList
 */
export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id: id
  }
}
