import { Link } from "react-router-dom";
import { SMain } from "./styles";
import type { PostListProps } from "../../types/PostType";

export function Post({ posts }: PostListProps) {
  return (
    <SMain>
      {posts.map((post) => (
        <section key={post.id} className="categoria">
          <header>
            <h3>{post.title}</h3>
            <div>
              <h5>{post.autor}</h5>
            </div>
          </header>
          <div className="carrossel">
            <img src={post.figure} alt={post.title} />
          </div>
          <Link to={`/details/${post.id}`}>Ver</Link>
        </section>
      ))}
    </SMain>
  );
}
