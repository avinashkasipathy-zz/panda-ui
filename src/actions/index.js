import featch from 'isomorphic-fetch'

export const fetchData = () => {

  fetch('http://www.reddit.com/r/news.json')
  .then(response => {
    return response.json();
  })
}