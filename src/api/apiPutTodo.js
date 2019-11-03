import useSWR from 'swr';

export default function apiPutTodo(id){
    newData = fetch(`https://5cea41c50c871100140bf437.mockapi.io/api/v1/todos/${id}`, {
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
      .then(json => dispatch(
          { type: type, userVote: json }
          ))
      .catch(err => dispatch(
          { type: "ERROR",msg: "Unable to fetch data" }))
    const { error, data } = useSWR(
        `https://5cea41c50c871100140bf437.mockapi.io/api/v1/todos/${id}`,
        newData
      );
}