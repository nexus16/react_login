import axios from 'axios';

import * as api from './api';

export async function login (data) {
  try {
    let res = await axios.post(api.LOGIN, data)
    if (res.data)
      return res.data
  } catch (error) {
    return {error: 1}
  }
}

export function handler(err) {
  let error = err;

  if (err.response && err.response.data.hasOwnProperty("message"))
      error = err.response.data;
  else if (!err.hasOwnProperty("message")) error = err.toJSON();

  return new Error(error.message);
}