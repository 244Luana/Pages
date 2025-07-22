export interface ReviewProps {
  id: string
  post_id: string
  user_id: string
  comment: string
  date: string
  user?: {
    id: string;
    name: string;
    email: string;
    role: 'user' | 'admin';
  };
}

export interface ReviewListProps {
  comments: ReviewProps[];
}