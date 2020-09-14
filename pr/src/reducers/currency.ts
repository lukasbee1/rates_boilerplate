import { AnyAction } from 'redux'
import {
  START_FETCHING,
  STOP_FETCHING,
} from 'actions/currency'

const initState = {
  fetching: false,
  data: [],
}

export interface ICurrencyState {
  fetching: boolean,
  data: Array<any>,
}

function currencyReducer(state: ICurrencyState = initState, { type, payload = [] }: AnyAction) {
  switch (type) {
    case START_FETCHING: {
      return {
        fetching: true,
        data: [],
      }
    }
    case STOP_FETCHING: {
      return {
        fetching: false,
        data: payload.data,
      }
    }

    default:
      return state
  }
}

export default currencyReducer