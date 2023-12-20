import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return (
    <div className='container section'>
    <h3>Questions and Answers about Login</h3>
    <section className='info' data = {data}>
      {data.map((question) => {
        return <SingleQuestion key={question.id} {...question} />;
      })}
    </section>
    </div>
  );
}

export default App;
