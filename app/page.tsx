import PageTitle from "@/components/globals/pageTitle";
import Container from "@/components/layouts/container";
import PostsList from "@/components/globals/postsList";
import Filter from "@/components/globals/filter";
import Loader from "@/components/globals/loader";


export default function Home() {
  return (
    <>
      <PageTitle>Event Hub</PageTitle>
      <main className='mb-6'>
        <Container>
          <Filter></Filter>
          <PostsList></PostsList>
        </Container>
      </main>
    </>
  );
}
