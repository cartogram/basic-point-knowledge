export const title = 'Basis Point Knowledge';

interface Post {
  slug: string;
  title: string;
  date: string;
  tags?: Tag[];
  color?: string;
}

enum Tag {
  Investing = 'investing',
}

export const posts: Post[] = [
  {
    slug: 'financial-risk',
    title: 'Financial Risk',
    tags: [Tag.Investing],
    date: '2020-05-02',
  },
  {
    slug: 'account-types',
    title: 'Account Types',
    tags: [Tag.Investing],
    date: '2020-05-02',
  },
  {
    slug: 'financial-institutions',
    title: 'Financial Institutions',
    tags: [Tag.Investing],
    date: '2020-05-02',
  },
  {
    slug: 'investment-types',
    title: 'Investment Types',
    tags: [Tag.Investing],
    date: '2020-05-02',
  },
];

export const links = [];

export const disclaimer = `Information presented on this website is for news, educational, entertainment purposes only, it is not indented as a solicitation of the sale or purchase of securities, investment strategies, or a substitute for professional investment advice. Please consult with a registered financial advisor before following any of the investment strategies discussed herein.`;
