import React, { useState } from 'react';
import useSWR, { SWRConfig, mutate } from 'swr'

function PostRequest(title){
  fetch('https://5cea41c50c871100140bf437.mockapi.io/api/v1/todos', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: title,
      complete: false,
    })
  });
}

function AddTodo(){
  const [title, setTitle] = useState('');

  return(
    <>
    {title}
      <input type="title" onChange={(e) => setTitle(e.target.value)} />
      <button onClick={() => PostRequest(title)}>Add Todo</button>
    </>
  )
}
function Profile() {
  // const ffffffetch  = url => fetch(url)
  // .then(response => response.json())
  // .catch(err => err)
  // const { error, data } = useSWR(
  //   `https://5cea41c50c871100140bf437.mockapi.io/api/v1/todos`,
  //   ffffffetch
  // );
  const fetcher = url => fetch('https://5cea41c50c871100140bf437.mockapi.io/api/v1/todos').then(r => r.json());
  const { data } = useSWR('/api/data', fetcher)
  return (
    <>
        <AddTodo/>
       {data && data.map((val) => {
         return <p>{val.title}
         <button onClick={()=> this.updateTodo(val.id)}>Test</button></p>;
       })}
    </>
  );
}
function App () {
  // all the SWRs inside will use `refreshInterval: 1000`
  return <SWRConfig>
    <Profile/>
  </SWRConfig>
}

export default App;
