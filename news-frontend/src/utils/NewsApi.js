export const getNews = (searchParams) => {
    return fetch(`http://newsapi.org/v2/everything?q=${searchParams}&from=2021-02-06&sortBy=publishedAt&apiKey=26dc51c3aa4d49d4afb1bbbc7f6e79e1`, {
      method: "GET",
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
  
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
