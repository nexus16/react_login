import axios from 'axios';

import * as api from '../constants';

export async function login (data) {
  try {
    let res = await axios.post(api.LOGIN, data)
    return res.data
  } catch (error) {
    handler(error)
  }
}

export function handler(err) {
  let error = err;

  if (err.response && err.response.data.hasOwnProperty("message"))
      error = err.response.data;
  else if (!err.hasOwnProperty("message")) error = err.toJSON();

  return new Error(error.message);
}