import axios from 'axios';
import { createAction } from 'redux-actions';
import { browserHistory } from 'react-router';
// import * as AuthActionTypes from '../constants/AuthActionTypes';

// export const setUser = createAction(AuthActionTypes.SET_USER);

export function fetchTour() {
  const url = `http://api.bandsintown.com/artists/susto/events.json?api_version=2.0&app_id=the-artisanals`;
  const headers = new Headers({"Access-Control-Allow-Origin" : '*'});

  return dispatch =>
    axios.get(url, headers)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log('err', err);
      })
}
