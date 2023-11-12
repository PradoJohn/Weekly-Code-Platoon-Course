import {defineConfig} from 'cypress';

export default defineConfig({
  e2e:{
    baseUrl: "http://localhost:5173/",
    supportFile: false, 
  },
  viewportHeight: 768,
  viewportWidth: 1024,
  video: false,
})