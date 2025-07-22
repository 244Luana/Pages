export interface BookProps {
  id: string;
  title: string;
  description: string,
  figure: string;
  autor: string;
}
export interface PostListProps {
  posts: BookProps[];
}