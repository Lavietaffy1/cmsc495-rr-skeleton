---/* || DEPENDENCIES INSTALLED ON BACKEND */---

- (Production)
Express.js (Node.js web framework), 
Mongoose (ODM for MongoDB on Node.js)
CORS (Cors Middleware for Express.js)

- (Dev)
nodemon (Automated server restart)
dotenv (populate process.env with your .env file if you wish to use it)

---/* || To install dependencies when you download/clone repo from github */---

- run the command "npm install" in terminal 

---/* || Scripts included ON BACKEND */---

- (To run the script named "start" in package.json)
"npm start" in the terminal within the directory that contains the package.json file 
  1. -(I included this script so that you do not need to restart the server after everytime you make a change)

- (To run any other script you define in package.json)
npm run <script name> in the terminal

---/* || About BACKEND */---

- This is a skeleton, if you wish to check it out the backend,
    1. Run npm start in the backend directory
    2. open your browser to http://localhost:4000
    3. To check out the sample route besides index - http://localhost:4000/subdir
    4. For now, the backend will run on this origin 

- This skeleton has been organized with MVC. 
    1. The route handlers will be mostly in the controllers directory
    2. Anything to do with interacting with the database will come from the models directory
    3. The views will come from the frontend portion. 
    4. I included some empty files, and possible TODOS

- Middleware so far:
    1. express.json()/express.urlencoded() - used for populating req.body with json/form data when we will receive a request from the client (recipe data)

- .gitignore included for .env file and node_modules