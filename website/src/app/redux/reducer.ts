// Import action type
import { UPDATE_TEXTFIELD } from './TextField'
import {UPDATE_DATE} from './DatePicker'
import {UPDATE_TIME} from './TimePicker'
const initialState = {
    TextField: '', 
    DatePicker:'',
    TimePicker:''
  }
// Reducer function
export default function reducer(state = initialState, action:any) {
  switch(action.type) {
    case UPDATE_TEXTFIELD:
      return {
        ...state,
        TextField: action.text
      } 
    case UPDATE_DATE:
        return{
            ...state,
            DatePicker: action.date


        }
    case UPDATE_TIME:
      return{
        ...state,
        TimePicker:action.time

      }
    default: 
      return state
  }
}