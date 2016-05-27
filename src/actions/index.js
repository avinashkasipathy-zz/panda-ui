import request from 'superagent'

export const fetchData = (dispatch) => {
  request
  .get('http://localhost:3000')
  .end((error, response) => {
    if(error){
      console.log(error);
    }else {
      console.log(response.body);
      dispatch({
        type: 'FETCH_SUCCESS',
        testing: response.body
      })
    }
  })
}
