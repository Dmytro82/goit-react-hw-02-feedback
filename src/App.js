import React from 'react';

// js

import Statistics from './components/statistics/statistics';

// dataJson

import statistics from './data-json/statistics.json';

function App() {
  return (
    <>
      <Statistics title="Upload stats" stats={statistics} />
      <Statistics stats={statistics} />
    </>
  );
}

export default App;
