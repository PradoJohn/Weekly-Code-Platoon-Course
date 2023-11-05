
<!-- when working with Vite otherwise remove postcss autoprefixer -->
npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

<!-- in tailwind.config.js file -->
insert these content[] section 

"./index.html",
"./src/**/*.{js,ts,jsx,tsx}"

<!-- in index.css -->

@tailwind base,
@tailwind components;
@tailwind utilities



<!-- Bootstrap -->

npm install react-bootstrap bootstrap

