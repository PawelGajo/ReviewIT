import { Post } from '../../app/core/features/post/models/Post';

export const MOCK_POST_LIST_ITEMS: Post[] = [
  {
    id: 1,
    answers: 2,
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
    description: 'Lorem test impsum test',
    author_last_activity: {
      author: {
        id: 1,
        username: 'Jan Kowalski',
        reputation: 1200,
        avatar_link:
          'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Round&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=WinkWacky&eyebrowType=AngryNatural&mouthType=Concerned&skinColor=Yellow'
      },
      created: '02.14.2022',
      type: 'answered'
    },
    last_activity: {
      author: {
        id: 1,
        username: 'Jan Kowalski',
        reputation: 1200,
        avatar_link:
          'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Round&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=WinkWacky&eyebrowType=AngryNatural&mouthType=Concerned&skinColor=Yellow'
      },
      created: '02.14.2022',
      type: 'answered'
    },
    rank: 4.2,
    title: 'My new special Project',
    visits: 2,
    page_url: 'www.google.com',
    repo_url: 'www.github.com'
  },
  {
    id: 2,
    answers: 4,
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
    has_top_answer: false,
    description: 'another test description',
    author_last_activity: {
      author: {
        id: 1,
        username: 'Jan Kowalski',
        reputation: 1200,
        avatar_link:
          'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Round&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=WinkWacky&eyebrowType=AngryNatural&mouthType=Concerned&skinColor=Yellow'
      },
      created: '02.14.2022',
      type: 'answered'
    },
    last_activity: {
      author: {
        id: 1,
        username: 'Jan Kowalski',
        reputation: 1200,
        avatar_link:
          'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Round&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=WinkWacky&eyebrowType=AngryNatural&mouthType=Concerned&skinColor=Yellow'
      },
      created: '02.14.2022',
      type: 'answered'
    },
    rank: 4.5,
    title: 'My second new special Project',
    visits: 3,
    page_url: 'www.google.com',
    repo_url: 'www.github.com'
  },
  {
    id: 3,
    answers: 0,
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
    has_top_answer: false,
    description: 'Description of super project',
    author_last_activity: {
      author: {
        id: 1,
        username: 'Jan Kowalski',
        reputation: 1200,
        avatar_link:
          'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Round&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=WinkWacky&eyebrowType=AngryNatural&mouthType=Concerned&skinColor=Yellow'
      },
      created: '02.14.2022',
      type: 'answered'
    },
    last_activity: {
      author: {
        id: 1,
        username: 'Jan Kowalski',
        reputation: 1200,
        avatar_link:
          'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Round&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=WinkWacky&eyebrowType=AngryNatural&mouthType=Concerned&skinColor=Yellow'
      },
      created: '02.14.2022',
      type: 'answered'
    },
    rank: 4.5,
    title: 'Some other great project',
    visits: 3,
    page_url: 'www.google.com',
    repo_url: 'www.github.com'
  }
];
