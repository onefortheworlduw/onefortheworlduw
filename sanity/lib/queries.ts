import { groq } from 'next-sanity';

export const TEAM_MEMBERS_QUERY = groq`
  *[_type == "teamMember"] | order(order asc, name asc) {
    _id,
    name,
    position,
    image,
    order
  }
`;

export const EVENTS_QUERY = groq`
  *[_type == "event"] | order(order asc, _createdAt desc) {
    _id,
    title,
    date,
    location,
    description,
    images,
    isUpcoming,
    order
  }
`;

export const CHARITIES_QUERY = groq`
  *[_type == "charity"] | order(order asc) {
    _id,
    name,
    statBadge,
    category,
    description,
    link,
    order
  }
`;
