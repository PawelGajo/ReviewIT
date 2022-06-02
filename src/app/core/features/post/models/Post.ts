import { User } from '../../user/models/User';

export type PostListItem = {
  id: number;
  created: string;
  title: string;
  page_url: string;
  repo_url: string;
  rank: number;
  answers: number;
  visits: number;
  has_top_answer: boolean;
  last_activity: PostActivity;
  categories: PostCategory[];
};

export type PostActivity = {
  type: string;
  created: string;
  author: User;
};

export type PostCategory = {
  id: number;
  rank: number;
  name: string;
  number_of_answers: number;
};
