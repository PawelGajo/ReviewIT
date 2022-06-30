import { Post } from '../../app/core/features/post/models/Post';

export const POST_DETAILS_MOCK: Post = {
  id: 1,
  answers: 4,
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis beatae itaque sunt nihil cum amet aliquam, sapiente asperiores. Ex ratione consequuntur vero veritatis et ab deserunt incidunt nisi est quod? Beatae suscipit praesentium aliquid exercitatione',
  categories: [
    {
      id: 1,
      name: 'Code quality'
    },
    {
      id: 2,
      name: 'Design'
    },
    {
      id: 3,
      name: 'Performance'
    }
  ],
  created: '02.12.2020',
  has_top_answer: true,
  last_activity: {
    author: {
      id: 1,
      username: 'Jan Kowalski',
      reputation: 1200,
      avatar_link:
        'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Round&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=WinkWacky&eyebrowType=AngryNatural&mouthType=Concerned&skinColor=Yellow'
    },
    created: '02.14.2022',
    type: 'created'
  },
  author_last_activity: {
    author: {
      id: 1,
      username: 'Jan Kowalski',
      reputation: 1200,
      avatar_link:
        'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Round&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=WinkWacky&eyebrowType=AngryNatural&mouthType=Concerned&skinColor=Yellow'
    },
    created: '02.14.2022',
    type: 'created'
  },
  rank: 4.2,
  title: 'My new special Project',
  visits: 2,
  page_url: 'www.google.com',
  repo_url: 'www.github.com'
};
