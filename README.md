# KMaar Portfolio

## Overview

Welcome to **KMaar Portfolio**! This repository contains the source code for my personal portfolio website. It showcases my skills, projects, work experience, and provides insights into my journey as a developer. Feel free to explore and learn more about me.

**Live Demo:** [KMaar Portfolio](https://kmaar.vercel.app)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Portfolio Presentation:** Showcase your skills, projects, and work experience.
- **Responsive Design:** Ensure a seamless experience across various devices and screen sizes.
- **Interactive Components:** Engage visitors with interactive animations and user-friendly components.
- **Sanity CMS Integration:** Manage and update your content easily through the Sanity headless CMS.
- **SEO Optimized:** Enhance your online presence with search engine optimization techniques.
- **Page Transitions:** Smooth and elegant animations while navigating between sections.
- **Highly Customizable:** Tailor the portfolio to your own style and preferences.

## Technologies Used

- Frontend Framework: [Next.js](https://nextjs.org/)
- Styling: [Tailwind CSS](https://tailwindcss.com/)
- CMS: [Sanity](https://www.sanity.io/)
- Animation: [Framer Motion](https://www.framer.com/motion/)
- Deployment: [Vercel](https://vercel.com/)

## Getting Started

1. Clone this repository: `git clone https://github.com/SudoKMaar/kmaar.git`
2. Navigate to the project directory: `cd kmaar`
3. Install dependencies: `yarn install`
4. Configure your Sanity CMS credentials in `.env.local` (See [Configuration](#configuration))
5. Start the development server: `yarn dev`
6. Open your browser and visit: `http://localhost:3000`

## Configuration

1. Create a `.env.local` file in the root directory.
2. Set up your Sanity CMS credentials:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your-service-id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your-template-id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your-public-key
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-sanity-project-id
   NEXT_PUBLIC_SANITY_DATASET=your-sanity-dataset
   NEXT_PUBLIC_SANITY_API_VERSION=your-sanity-api-version
   NEXT_PUBLIC_BASE_URL=your-project-url
   ```
3. Replace the placeholders (`your-service-id`, `your-template-id`, `your-public-key`, `your-sanity-project-id`, `your-sanity-dataset`, `your-sanity-api-version`, and `your-project-url`) with your actual values.

Remember to keep this `.env.local` file private and not share it in public repositories as it contains sensitive information.

Once you've set up your `.env.local` file with these variables, you can reference them in your code using `process.env.NEXT_PUBLIC_VARIABLE_NAME`. For example:

```javascript
const emailjsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
// ... and so on
```

Make sure to use these variables wherever they are needed in your code to keep your credentials secure and separate from your source code.

## Usage

1. Customize the content in Sanity CMS to match your portfolio details.
2. Modify the code and components in the project to fit your personal brand.
3. Update the metadata, keywords, and social media information in the `METADATA` section.
4. Add your own projects, skills, and experiences by following the provided schema definitions.

## Screenshots

## Contributing

Contributions are welcome! Feel free to open issues and pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
