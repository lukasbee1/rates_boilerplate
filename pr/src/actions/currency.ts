import { IAction, IAppState, TAppDispatchThunk } from 'store'
import currencyReducer from 'reducers/currency'

const MODULE_NAME = 'CURRENCY'

export const START_FETCHING = `${MODULE_NAME}/START_FETCHING`
export const STOP_FETCHING = `${MODULE_NAME}/STOP_FETCHING`

export const startFetchingCurrency = (): any => async (dispatch: TAppDispatchThunk<never>): Promise<void> => {
  dispatch({
    type: START_FETCHING,
  })
}
export const stopFetchingCurrency = (currency): any => async (dispatch: TAppDispatchThunk<never>): Promise<void> => {
  dispatch({
    type: STOP_FETCHING,
    payload: currency,
  })
}