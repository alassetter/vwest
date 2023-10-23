# Starter

A simplish modern web stack.

## Development
### Setup

0. Create a new project by going to [https://github.com/jefflombard/starter](https://github.com/jefflombard/starter) and clicking on `use this template > create new repository`.
1. `git clone https://github.com/jefflombard/starter.git` to clone repo
2. `cd starter` to change your directory
3. `yarn` to install
4. change the project name from `starter` in `package.json` to whatever you want it.
### Stack
This starter uses the following tech:
- [Svelte Framework](https://svelte.dev/) for component based development.
- [Svelte Kit](https://kit.svelte.dev/) for organization and SSR.
- [Tailwind CSS](https://tailwindcss.com/) for styling.
- [Hygen](https://www.hygen.io/) for templating.

### Organization
The project uses SvelteKit's standard folder organization.

### Available Commands

`yarn dev` - to run the project locally
`yarn component <name>` to create a new component will automatically create the component file in the right place.
`yarn page <name>` will create a new page automatically. for example `yarn page about` will create a page that is live at `/about`