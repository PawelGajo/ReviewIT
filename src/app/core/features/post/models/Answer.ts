import { PostActivity, PostCategory } from './Post';

export type Answer = {
  id: number;
  created: string;
  description: string;
  is_top_answer: boolean;
  rank: number;
  author_last_activity: PostActivity;
  reviewed_categories: ReviewedCategory[];
};

export type ReviewedCategory = {
  id: number;
  category: PostCategory;
  review_nodes: ReviewCategoryNode[];
  rank: number;
};

export type ReviewCategoryNodeType = 'con' | 'pro';

export type ReviewCategoryNode = {
  id: number;
  type: ReviewCategoryNodeType;
  description: string;
};
