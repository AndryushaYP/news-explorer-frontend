const BASE_URL = "https://api.tagnerdiplom.students.nomoredomains.icu";

//Получить список сохраненных статей
export const getArticles = () => {
  return fetch(`${BASE_URL}/articles`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.jwt}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

//Запрос на добавление статьи в избранное
export const saveArticle = ({ keyword, title, text, date, source, link, image }) => {
  return fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.jwt}`,
    },
    body: JSON.stringify({
      keyword: keyword,
      title: title,
      text: text,
      date: date,
      source: source,
      link: link,
      image: image,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

//Удалить статью
export const deleteArticle = (id) => {
  return fetch(`${BASE_URL}/articles/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.jwt}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

//Авторизация
export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

//Регистрация
export const register = (password, email, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password: password, email: email, name: name }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

//Данные текущего пользователя
export const getUserMe = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.jwt}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  });
};
