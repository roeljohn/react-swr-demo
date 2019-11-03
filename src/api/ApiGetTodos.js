



import React, { Component } from 'react';
import useSWR from 'swr';
class ApiGetTodos extends Component {
  render() {
    const data = useSWR('https://5cea41c50c871100140bf437.mockapi.io/api/v1/todos/2', fetch);
    return (
      <div>
        {data}
      </div>
    );
  }
}

export default ApiGetTodos;