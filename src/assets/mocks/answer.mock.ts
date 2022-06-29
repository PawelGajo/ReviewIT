import { AUTHOR_MOCK } from './author.mock';
import { Answer } from '../../app/core/features/post/models/Answer';

export const ANSWERS_MOCK: Answer[] = [
  {
    id: 1,
    created: '20.12.2022',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis beatae itaque sunt nihil cum amet aliquam, sapiente asperiores. Ex ratione consequuntur vero veritatis et ab deserunt incidunt nisi est quod? Beatae suscipit praesentiu ',
    is_top_answer: true,
    rank: 5,
    author_last_activity: {
      author: AUTHOR_MOCK,
      created: '20.12.2022',
      type: 'created'
    },
    reviewed_categories: [
      {
        id: 1,
        category: {
          id: 1,
          name: 'Design'
        },
        rank: 5,
        review_nodes: [
          {
            id: 1,
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laboriosam nostrum doloribus atque quae nam dicta consequatur rem dolore deleniti libero sed neque, blanditiis amet soluta explicabo laudantium molestiae! Beatae .Sapiente, delectus neque maiores non aut obcaecati ea beatae ad placeat corrupti consequatur et temporibus nobis quibusdam autem pariatur soluta officiis dolore qui distinctio porro harum, impedit laborum. Ea, iste.',
            type: 'pro'
          },
          {
            id: 2,
            description: 'not great',
            type: 'con'
          }
        ]
      },
      {
        id: 2,
        category: {
          id: 1,
          name: 'SEO'
        },
        rank: 5,
        review_nodes: [
          {
            id: 1,
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laboriosam nostrum doloribus atque quae nam dicta consequatur rem dolore deleniti libero sed neque, blanditiis amet soluta explicabo laudantium molestiae! Beatae .Sapiente, delectus neque maiores non aut obcaecati ea beatae ad placeat corrupti consequatur et temporibus nobis quibusdam autem pariatur soluta officiis dolore qui distinctio porro harum, impedit laborum. Ea, iste.',
            type: 'pro'
          },
          {
            id: 2,
            description: 'not great',
            type: 'con'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    created: '20.12.2022',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis beatae itaque sunt nihil cum amet aliquam, sapiente asperiores. Ex ratione consequuntur vero veritatis et ab deserunt incidunt nisi est quod? Beatae suscipit praesentiu ',
    is_top_answer: false,
    rank: 5,
    author_last_activity: {
      author: AUTHOR_MOCK,
      created: '20.12.2022',
      type: 'created'
    },
    reviewed_categories: [
      {
        id: 1,
        category: {
          id: 1,
          name: 'Design'
        },
        rank: 5,
        review_nodes: [
          {
            id: 1,
            description: 'great',
            type: 'pro'
          },
          {
            id: 2,
            description: 'not great',
            type: 'con'
          }
        ]
      }
    ]
  }
];
