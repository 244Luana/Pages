import { Post } from "../../components/Post";
import { mockPosts } from "../../mocks/PostMock"; 
import { Header } from "../../components/Header"; 
import { Footer } from "../../components/Footer"; 

export default function Home() {
  return (
    <> 
      <Header /> 
      <main>
        <h2>Livros Populares</h2>
        <Post posts={mockPosts} />
      </main>
      <Footer /> 
    </>
  );
}