import React from 'react';
import useSWR, { SWRConfig, mutate } from 'swr'

function updateTodo(id){
  const newData  = url => fetch(`https://5cea41c50c871100140bf437.mockapi.io/api/v1/todos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      title: 'test'
    })
  })
  .then(response => response.json())
  .catch(err => console.log(err))
  const { error, data } = useSWR(
    `https://5cea41c50c871100140bf437.mockapi.io/api/v1/todos/${id}`,
    newData
  );
  return mutate(`https://5cea41c50c871100140bf437.mockapi.io/api/v1/todos/${id}`, { ...data, title: data.title })
}

function Profile() {
  const ffffffetch  = url => fetch(url)
  .then(response => response.json())
  .catch(err => err)
  const { error, data } = useSWR(
    `https://5cea41c50c871100140bf437.mockapi.io/api/v1/todos`,
    ffffffetch
  );

  return (
    <>
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
