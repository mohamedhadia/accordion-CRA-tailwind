## live version : 

https://accordion-cra-tailwind-i44o3xov5.vercel.app/


## download the rep and || `npm install` to install the dependencies

## on production remeber to go to tailwiond.config.js file and change this to `true`

purge: {
    `enabled: false`,
    content: [
      "./src/**/*.html",
      "./src/**/*.js",
      "./src/*.js",
      "./src/**/*.jsx",
    ],
  },

this so you get a very small css file from tailwind , it baisicly deletes the unused styles 
