import fetch from 'isomorphic-fetch';

const headers = {
  'Content-Type': 'application/json',
  Authorization: process.env.REACT_APP_TOKEN,
};

export function get(url) {
  const config = {
    method: 'GET',
    headers,
  };
  return fetch(url, config).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw response;
  });
}

export function post(url, data = {}) {
  const config = {
    method: 'POST',
    headers,
    body: JSON.stringify(data),
  };
  return fetch(url, config).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw response;
  });
}
