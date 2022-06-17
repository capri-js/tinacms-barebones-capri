This is a [Capri](https://capri.build) site that uses [Tina CMS](https://tina.io/).

It is a port of the [tina-barebones-starter](https://github.com/tinacms/tina-barebones-starter).

## Getting Started

Clone the repository, cd into it and run `npm install`.

### Create a Tina Cloud project

Go to [app.tina.io](https://app.tina.io/) and create a new project.
Add `http://localhost:3000` and `http://localhost:4173` as site URLs.
Copy the _Client ID_ and replace the one in `/.env`.

### Start the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Perform a static build

To perform a static build, make sure the dev server is stopped. Then run:

```bash
npm run build
npm run preview
```

Open [http://localhost:4173](http://localhost:4173) to see the static result. The pages
will be completely free of any JavaScript.

Go to [http://localhost:4173/admin](http://localhost:4173/admin) to open the Tina admin
panel. The site will then be served as SPA and you can view your changes in realtime.
