import { connect, ConnectedProps } from 'react-redux'
import { getCurrency } from '../../thunks'

import { IAppState } from 'store'
import Component from './Component'

const mapStateToProps = (state: IAppState) => ({
  fetching: state.common.fetching,
  currency: state.currency
})
const mapActionsToProps = (dispatch) => ({
  getCurrency: currency => dispatch(getCurrency(currency))
})


const connector = connect(mapStateToProps, mapActionsToProps)
export type TReduxProps = ConnectedProps<typeof connector>
export default connector(Component)