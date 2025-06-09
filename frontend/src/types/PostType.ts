export interface PostProps {
  id: string;
  title: string;
  figure: string;
  autor: string;
}
export interface PostListProps {
  posts: PostProps[];
}