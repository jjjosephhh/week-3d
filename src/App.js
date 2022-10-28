import { useState } from 'react';
import './App.css';
import useInput from './hooks/useInput';

function App() {
  const [title, handleTitleChange] = useInput();
  const [description, handleDescriptionChange] = useInput();

  const [job, handleJobChange] = useInput();
  const [hobbies, handleHobbiesChange] = useInput();

  return (
    <div>
      <h1>My custom hook example</h1>

      <input
        placeholder="Title here"
        value={title}
        onChange={handleTitleChange} />

      <input
        placeholder="Description here"
        value={description}
        onChange={handleDescriptionChange} />

      <input
        placeholder="Job"
        value={job}
        onChange={handleJobChange} />

      <input
        placeholder="Hobbies"
        value={hobbies}
        onChange={handleHobbiesChange} />

      <button onClick={() => {
        console.log('====================');
        console.log('title:', title);
        console.log('description:', description);
        console.log('job:', job);
        console.log('hobbies:', hobbies);
        console.log('====================');
      }}>Show me the data</button>
    </div>
  );
}

export default App;
