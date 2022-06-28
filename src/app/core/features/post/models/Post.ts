import { User } from '../../user/models/User';

export type Post = {
  id: number;
  created: string;
  title: string;
  description: string;
  page_url: string;
  repo_url: string;
  rank: number;
  visits: number;
  has_top_answer: boolean;
  author_last_activity: PostActivity;
  last_activity: PostActivity;
  answers: number;
  categories: PostCategory[];
};

export type PostActivity = {
  type: ActivityType;
  created: string;
  author: User;
};

export type ActivityType = 'created' | 'answered' | 'modified';

export type PostCategory = {
  id: number;
  name: string;
};
