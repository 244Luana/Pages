import type { PostProps } from "../../types/PostType";

type Props = {
  posts: PostProps[];
};

export function Post({ posts }: Props) {
  return (
    <section style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      {posts.map((post) => (
        <div key={post.id} style={{ width: "150px", textAlign: "center" }}>
          <img src={post.figure} alt={post.title} style={{ width: "100%" }} />
          <h3>{post.title}</h3>
          <p>{post.autor}</p>
        </div>
      ))}
    </section>
  );
}
