# Aditi Chaudhari | Portfolio

A personal portfolio built with React and Vite. It presents an introduction, selected projects, skills, resume, and contact information in a single-page site.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Development

1. Clone the repository and open the project directory:

	```sh
	git clone <repository-url>
	cd Portfolio
	```

2. Install dependencies and start the local development server:

	```sh
	npm install
	npm run dev
	```

3. Open the local URL printed by Vite, usually `http://localhost:5173`.

Vite provides hot module replacement while editing. The available project commands are:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Run Oxlint checks |
| `npm run build` | Create the production build in `dist/` |
| `npm run preview` | Serve the production build locally |

## Project Structure

- `src/App.jsx` assembles the page and lazy-loads its main sections.
- `src/components/` contains the About, Projects, Skills, Resume, Contact, and Navbar components.
- `src/App.css` and `src/index.css` contain the application styles.
- `public/images/` contains project screenshots used by the Projects section.
- `public/resume.pdf` is the downloadable resume.

## Production Build and Deployment

Run the checks and create a production build:

```sh
npm run lint
npm run build
npm run preview
```

The static site is generated in `dist/`. Deploy that directory to a static hosting provider such as Netlify, Vercel, or GitHub Pages. For Netlify or Vercel, use `npm run build` as the build command and `dist` as the publish/output directory. For a manual deployment, upload the contents of `dist/`.

The Vite configuration currently assumes the site is served from the domain root. If deploying to a GitHub Pages project URL such as `https://username.github.io/repository/`, set Vite's `base` option to `'/repository/'` in `vite.config.js` before building, then deploy the resulting `dist/` directory. A custom domain or root-domain deployment does not need this change.

## Challenges and Solutions

- **Loading split-out page sections:** The page sections are lazy-loaded in `App.jsx`; React requires a `Suspense` boundary while those imports load. The app wraps the sections in `Suspense` and displays a loading message as its fallback.
- **Serving project images and the resume after deployment:** These files are stored in `public/` and referenced by root-relative URLs. Keep the files in their current public paths; when hosting under a repository subpath, configure Vite's `base` before building so asset URLs are prefixed correctly.
- **Contact form delivery without a server:** The form creates a prefilled email using a `mailto:` link instead of submitting to an API. This keeps the portfolio static and avoids backend hosting, but visitors need an email application configured on their device. Add a form service or backend if direct web-based submission is needed.

## Updating Content

- Edit the relevant component in `src/components/` to change text, links, or project details.
- Replace project images in `public/images/` and keep the filenames in sync with `Projects.jsx`.
- Replace `public/resume.pdf` to update the downloadable resume.
- Update the contact details and social profile URLs in the About and Contact components when they change.
