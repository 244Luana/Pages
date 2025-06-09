import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Post } from "../../components/Post";
import { mockPosts } from "../../mocks/PostMock";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ padding: "1rem" }}>
        <h2>Livros Populares</h2>
        <Post posts={mockPosts} />
      </main>
      <Footer />
    </>
  );
}
