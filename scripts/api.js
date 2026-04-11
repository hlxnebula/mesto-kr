const config = {
  baseUrl: "https://mesto.nomoreparties.co/v1/wff-cohort-1",
  headers: {
    authorization: "e1ed57ff-779c-48f1-9530-b8dff13e46b9",
    "Content-Type": "application/json",
  },
};

const getResponseData = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

const request = (url, options = {}) => {
  return fetch(url, {
    headers: config.headers,
    ...options,
  }).then(getResponseData);
};

export const getUserInfo = () => {
  return request(`${config.baseUrl}/users/me`);
};

export const getCardList = () => {
  return request(`${config.baseUrl}/cards`);
};

export const setUserInfo = ({ name, about }) => {
  return request(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    body: JSON.stringify({ name, about }),
  });
};

export const setUserAvatar = (avatar) => {
  return request(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    body: JSON.stringify({ avatar }),
  });
};

export const addCard = ({ name, link }) => {
  return request(`${config.baseUrl}/cards`, {
    method: "POST",
    body: JSON.stringify({ name, link }),
  });
};

export const deleteCard = (cardId) => {
  return request(`${config.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
  });
};

export const changeLikeCardStatus = (cardId, isLiked) => {
  return request(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: isLiked ? "DELETE" : "PUT",
  });
};
