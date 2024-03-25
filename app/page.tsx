import PageTitle from "@/components/globals/pageTitle";
import Container from "@/components/layouts/container";
import PostsList from "@/components/globals/postsList";

export default function Home() {
  return (
    <>
      <PageTitle>Event Hub</PageTitle>
      <main className='mb-6'>
        <Container>
          <PostsList></PostsList>
        </Container>
      </main>
    </>
  );
}
