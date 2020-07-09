const BASE_URL = 'https://reqres.in/api';

export const login = (email, password) => {

  const body = JSON.stringify({
    email,
    password,
  });

  return fetch(`${BASE_URL}/login`, {
    method: 'POST',
    body,
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(async (res) => {
      const data = await res.json();
      if (res.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    })

};
