import React from 'react';

function MyButton() {
  return (
    <button>
      Click Me!
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}