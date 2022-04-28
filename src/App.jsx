import React from 'react';
import Todo from './components/Todo';


function App (){
    return (
      <div>
        <h1>My Todos</h1>
        <Todo text="learn react"/>
        <Todo text="learn vue....?"/>
        <Todo text="Todos are cool"/>
        
        </div>
    )
}

export default App;
