# hello-node
Setting up a node.js project with basic continuous delivery via Heroku.

We'll set up our CI/CD (Continuous Integration/Continuous Deployment) pipeline to a basic Hello World application first so that we can continously push our code changes to a running application in a production environment.

## Initialise a Git repo

1. Install [Git](https://git-scm.com/downloads)
1. Log in to [Github](https://github.com/)
1. Create a new repository.
    - Give it a name & description
    - Check 'Add a README file' and 'Add .gitignore' with the template `Node`.
1. Click on the green code button. 
1. Using HTTPS, copy the URL.
1. Open a terminal window. Navigate to the folder you want to put the project in.
1. Run the command `git clone <url of git repo>`
1. Make a change in the readme.md file. 
1. Now you're ready to practice making a commit! Follow [this Git Workflow guide](git-workflow.md) to make a simple change to test your connection to GitHub.

## Set up a basic node.js app

These steps follow [this guide to set up a Hello World Node.js app](https://medium.com/@adnanrahic/hello-world-app-with-node-js-and-express-c1eb7cfa8a30).

1. Download [Node 14.17.4](https://nodejs.org/en/download/) (Node's latest [LTS release](https://stackoverflow.com/questions/34829167/what-is-the-difference-between-the-lts-version-and-the-stable-version-of-node-js))
    - This will also install NPM (Node Package Manager) to allow you to install and manage other node packages easily.
1. Run `npm init`, "Enter" your way through all of them EXCEPT setting entry point to `app.js`.
1. Open the project in a code editor. There should be three files now - the readme, the gitignore, and a package.json file. 
1. In your terminal, run `npm install express --save`.
1. Create a new file called `app.js`.
1. Have a look at the `app.js` file in this repository to see the basic code for this file. 



## Set up a CI/CD pipeline with Heroku

1. Create an account on [Heroku](https://dashboard.heroku.com/apps)
1. Go to the [getting stared Heroku docs](https://devcenter.heroku.com/start) and choose Node.js.

Setting up a staging environment
- Create a new app
- Connect it to GitHub
- Enable automatic deploys

Create a pipeline
- Adding the above as a staging environment
- Create a new app as a production environment
- Connect to github

Add review apps
- Enable review apps
- Check "Create new review apps for new pull requests automatically"

## Connect to a front end

1. Create index.html and styles.css files.
1. If you haven't already, add the following into app.js:
```
app.use(express.static(__dirname + ''));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});
```




## Call an API
