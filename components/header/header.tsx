import React from 'react';
import Container from '@/components/layouts/container';
import Logo from '@/components/globals/logo';
import SearchBar from './searchBar';
import Account from './account';

export default function Header() {
  return (
    <header className='border-t-2 border-solid border-black bg-neutral-200 py-4'>
      <Container>
        <div className='grid items-center sm:grid-cols-1 md:grid-cols-3'>
          <Logo />
          <SearchBar />
          <Account />
        </div>
      </Container>
    </header>
  );
}
