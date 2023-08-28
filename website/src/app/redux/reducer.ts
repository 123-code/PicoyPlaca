// Import action type
import { UPDATE_TEXTFIELD } from './TextField'
const initialState = {
    TextField: '' 
  }
// Reducer function
export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_TEXTFIELD:
      return {
        ...state,
        TextField: action.text
      } 
    default: 
      return state
  }
}