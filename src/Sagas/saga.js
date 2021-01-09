import {takeLatest , put ,all} from 'redux-saga/effects';
//  function * fetchNews(){
//      console.log("function called  successfully ")
//      const json = yield fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
//         response.json()}  )
//      console.log("json " ,json)
//      yield put({ type : 'NEWS_RECEIVED' , json : json  })
//  }
 function* fetchNews(data) {
     console.log("data" , data)
    
    const json = yield fetch('http://localhost:8000/createStu' , 
    {
        method : 'POST',
        body : data,
        header :{'Content-Type' : 'application/json'}
    })
          .then(response => response.json());  

          let z = [];
          z.push(data);
          z.push(json); 
          console.log("json data   " , json)
    yield put({ type: "NEWS_RECEIVED", json: z });
  }
 function* actionWatcher(){
     console.log("action watcher calles")
     yield takeLatest('GET_NEWS',fetchNews)
 }
 export default function* rootSaga(){
     yield all([
         actionWatcher()
     ])
 };
