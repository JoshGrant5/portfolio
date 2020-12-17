import { useState } from 'react';
import MediaIcons from './MediaIcons';
import Landing from './Landing';
import Home from './Home';

export default function Index() {

  const [page, setPage] = useState('LANDING');

  return (
    <div>
      <main>
        {page === 'LANDING' && <Landing setPage={setPage} />}
        {page === 'HOME' && <Home />}
        <MediaIcons />
      </main>
    </div>
  );
};