## 🖖Separation Anxiety ! 

### before you begin, you may want to add the CORS extension to Chrome: 
https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en


### This repo is designed to help you think through designing an app that has a back end API consumed by a front-end Angular app. 

#### The goal of this repo is simply to give you a starting point to understand how these connections are made. 

The CONNECTIONS are the most important thing, because a good deal of the process includes understanding how to set up and deploy your secret files ( environmental variables, etc. ) and using those to connect to a remote database. 

* Because of this, I have included a couple of secret files for you , so you can see where these files are located.  To get this working on your end, you will have to modify my personal credentials files to get it working on your machine * . 


Here is a graphic that outlines what we will be doing.  No reason to build any of this... it's already in the repo.  Just read and think about what we are doing. 

### one config option
![](https://github.com/gSchool/angular-unit-3-g18/blob/master/02-separate_deployment/layout1.png)
### another config option
![](https://github.com/gSchool/angular-unit-3-g18/blob/master/02-separate_deployment/layout2.png)
### another config option:  (anything you can get to work !) 

You will work through this section of the repo using milestones

#### 🍎Step 1: 

* Assuming you have this repo forked and cloned, cd into the 02-separate_deployment folder
* create a database called animals in postgres
*  in the 02-separate-deployment folder, attempt to run knex migrate:latest --env development
*  You will get an error: _No knexfile found in this directory. Specify a path with --knexfile_ 
*  Refer to the pretty diagram with the folders above. Note that there's something different going on with our package.json

``` 

{
  "name": "separation",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./separation/bin/www"
  },
  "dependencies": {
    "body-parser": "~1.13.2",
    "cookie-parser": "~1.3.5",
    ....etc ... etc..
  }
}

```

Under scripts: start is pointing to separation/bin/www instead of just ./bin/www. Why is this ?  what does this do ? 

You've just stumbled upon a minor detail needed to navigate this app.   our package.json is located in the root folder, which also contains our .git tracking.  This root foldler will be deployed to Heroku.  Heroku needs to see a package.json file in order to know what kind of app this is. (It needs to know that this is a Node app) .    There are ways to use a Procfile to tell Heroku where to find the package.json file. However, its also possible to simply put the package.json file in the root directory and point to the separation folder as to where our app actually lives. 

There's a reason we're having this conversation, so thank you for your patience !!!! It directly relates to getting our app running.  We know that EXPRESS APP root is /separation. Based on that knowledge, get yourself to where you need to be to run your migration and your seeds. 

#### ⛳️ Milestone 1: You have run your migrations, your seeds, and you have also figured out where to run the nodemon command to run the entire app. 

When you reach this milestone, take a jump back.  Kiss yourself. You're ready for step 2. 


#### 🍎Step 2: 
* Now that you have a server running, visit http://localhost:3000/cats
* You should see the json output of all of your cats. Visit http://localhost:3000/cats/1 to see a single cat
* cd into your ang_app folder
* run _firebase serve_ in that folder to start an http server ( similar to Simple Http Server ) 
* make sure that your CORS Chrome browser plugin is active and running: 
![](https://github.com/gSchool/angular-unit-3-g18/blob/master/02-separate_deployment/cors.png)
* Visit localhost:5000 .  You should see that your Angular app is hitting the Express API. 
* Modify your Controller so that your app uses routes. ( you can use ngRoute and $routeProvider or whichever method you desire ). 
* modify your firebase.json file to map all of your routes to /index.html... it should look  something like this : 

```

{
  "firebase": "yourfirebaseapp",
  "rewrites": [
{
  "source": "**/**/**",
  "destination": "/index.html"
}
],
    "ignore": [
    "firebase.json",
    "**/.*",
    "**/node_modules/**"
  ]
}

```
This helps your app become a 'true' single page app.  This was covered in Angular Unit 2.  We will discuss this more later, but essentially, it's mapping ALL REQUESTS on the server to index.html so that we can get rid of the # sign in our routes, which was essentially a bootleg way of achieveing "single page app" functionality by using anchor tags. 


* You should have /cats/ and /cats/:id routes

#### ⛳️ Milestone 2:

* When you add a cat in psql command line or in Postico, it should appear in your Angular app, which is pulling it from the Express api. 


#### 🍎Step 3: 

* We want to make a form and add a route to create a new Cat from angular. 
* Your Cat should persist in the database, which means that you have a Service or Factory sending a POST route to the Express API
* The Express API, obviously, should be able to handle this POST route. 

Question: when the EXPRESS route finishes the POST , do you think it should redirect the user on the backend ?  Why or why now ?  Think about this and discuss it with your dog.    

#### ⛳️ Milestone 3:
You have reached milestone 3 when you can create a Cat from your Angular app that's persisted in the database. 



#### 🍎Step 4: 

* In your CatsController, ( or whatever you call it )  inject $location into the controller so that after a user creates a cat, it redirects them to the /cats route.

#### ⛳️ Milestone 4:
You have reached milestone 4 if you can create a new Cat through your Angular app. 


=== STRETCH GOALS ===

#### 🍎Stretch A:  
It's a bit of typing to hand write various repetitive API calls in your service.  There's a way to inject $resource into your Service or Factory.  Look into $resource and how you can call $resource to make all of your API calls for you inside of your Angular app. $resource assumes that you have restful routes set up in your Express back end ( and I'm sure you do ! ) . Here's an example of $resource being used in a Factory: 

``` 

app.factory('AngelsFactory', function($resource) {
   return $resource('http://localhost:3000/angels/:id', {id: '@id'},
      {
        'update': { method:'POST' }
      }
 );
});

```
That one factory will now handle ALL of your CRUD activities from the Angular end !  If you're interested in that, look it up and see if you can get it working.  Again, it assumes a restful back end, and there are a few rules in terms of how you make the calls from your controllers.  But it's a pretty useful resource and it works great. 
