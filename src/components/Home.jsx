import { useState } from 'react';
import MediaIcons from './MediaIcons';
import Landing from './Landing';
import Bio from './Bio';

export default function Home() {

  const [page, setPage] = useState('LANDING');

  return (
    <div>
      <main>
        {page === 'LANDING' && <Landing setPage={setPage} />}
        {page === 'BIO' && <Bio />}
        <MediaIcons />
      </main>
    </div>
  );
};