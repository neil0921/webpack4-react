import fetch from 'dva/fetch';
import qs from 'qs';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  return response;
}

export const post = (url, params) => {
  const _postData = params && params.body
    ? {
      body: params.data,
    }
    : {
      body: JSON.stringify(params),
    };
  return fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'content-type': 'application/json',
    },
    ..._postData,
  })
    .then(checkStatus)
    .then(parseJSON)
    .catch((err) => ({ err }));
};

export const get = (url, params) => fetch(url + (params ? `?${qs.stringify(params)}&IECach=${new Date().getTime()}` : `?IECach=${new Date().getTime()}`), {
  method: 'GET',
  credentials: 'include',
  cache: 'reload',
  headers: {
    'content-type': 'application/json',
    cache: 'no-cache',
  },
})
  .then(checkStatus)
  .then(parseJSON)
  .catch((err) => ({ err }));
