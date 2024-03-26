import PageTitle from '@/components/globals/pageTitle';
import Container from '@/components/layouts/container';
import PostsList from '@/components/globals/postsList';
import Filter from '@/components/globals/filter';

export default function Home() {
  return (
    <>
      <PageTitle>Event Hub</PageTitle>
      <main className='mb-6'>
        <Container>
          <Filter />
          <PostsList />
        </Container>
      </main>
    </>
  );
}
