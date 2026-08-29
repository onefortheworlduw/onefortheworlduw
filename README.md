## Official One for the World UW - Madison Website

Hello! 

This is a newer version of the One for the World UW - Madison website that is built with Next.js that leverages 
Sanity.io's integration with Next.js to allow team members to edit the content without coding experience. For those who are unfamiliar with Sanity.io,
Sanity.io is a headless CMS (content management system). We currently do not have any backend endpoints and currently rely on external form services
and manual event updating. 

Currently, this website is still going through its DevOps stage, with CI yet to be configured. The website is 
deployed on Vercel and currently still uses Vercel's domain. 

## Contributing

Note that this codebase uses **pnpm** rather than npm to detect any phantom dependencies, optimized monorepo support, and disk space bloat. 
You can still use npm if you want. 

1. Install pnpm if needed.

npm install -g pnpm

2. pnpm install

3. pnpm run dev

To build, please run


pnpm run build

