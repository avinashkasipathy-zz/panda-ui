import fetch from 'isomorphic-fetch'

export const fetchData = (dispatch) => {

  fetch('http://localhost:3000', {
    mode: 'no-cors'
  })
  .then(response => {
    return response.json();
  })
  .then (data => {
    console.log('fetch success', data);
    dispatch({
      type: 'FETCH_SUCCESS',
      testing: data
    })
  })
}

// import featch from 'rest'

// export const fetchData = (dispatch) => {

//   fetch('http://localhost:3000',{
//     mode: 'no-cors'})
//   .then(response => {
//     return response.json();
//   })
//   .then (data => {
//     console.log('fetch success', data);
//     dispatch({
//       type: 'FETCH_SUCCESS',
//       testing: data
//     })
//   })
// }