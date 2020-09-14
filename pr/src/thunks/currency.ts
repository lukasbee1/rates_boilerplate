import {startFetchingCurrency, stopFetchingCurrency} from 'actions/currency'

export const getCurrency = (currency: string) => dispatch => {
    dispatch(startFetchingCurrency());

    const today = new Date();
    let result = new Date();
    result.setDate(today.getDate() - 6);
    const dateTo = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const dateFrom = result.getFullYear() + '-' + (result.getMonth() + 1) + '-' + result.getDate();

    console.log(dateTo)
    console.log(dateFrom)
    console.log(currency);

    fetch(`https://www.nbrb.by/api/exrates/rates/dynamics/${currency}?&startdate=${dateFrom}&enddate=${dateTo}&periodiciti=0`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const payload = {data}
            console.log(payload)
            return dispatch(stopFetchingCurrency(payload))

        })
}