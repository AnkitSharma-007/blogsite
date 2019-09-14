# Prerequisites
Install the following software.
 - [Nodejs (LTS Version)](https://nodejs.org/en/)
 - [Angular CLI](https://cli.angular.io/)
 - [Visual Studio Code](https://code.visualstudio.com/)
# Create a new Angular app
Run the command shown below to create a new Angular app named as blogsite.

    ng new blogsite

Provide the answers for the options as shown below.

 - Would you like to add Angular routing? (y/N) – N
 - Which stylesheet format would you like to use? – SCSS


# Configuring firebase
We will create a project on firebase and configure cloud firestore database for it. We will use this databse for our angular application. the steps are shown below.
### Creating a project on firebase
To create a new project on firebase follow the steps mentioned below.
 - Navigate to
   [https://console.firebase.google.com/](https://console.firebase.google.com/)
   and login using your Gmail account.
 -  Click on “Create a Project” button.
 - Enter you project name. You can give any name of your choice. Here we
   will use the name `ngBlog`.
 - Accept the terms and click on Continue.
 - Select “Not right now”, click on “Create your project”.
 - Once the project is ready click Continue.
### Add Firebase configuration to your application
 - Click on the “Web” icon on the page.
 - Provide a nickname for your app and click on “Register app”. 
 - Copy the script under “web app's Firebase configuration”.
 - Put the script in `src\environments\environment.ts` as shown at [https://github.com/AnkitSharma-007/blogsite/blob/ed374620053380e75d8300932bea69b612760210/src/environments/environment.ts#L7-L15](https://github.com/AnkitSharma-007/blogsite/blob/ed374620053380e75d8300932bea69b612760210/src/environments/environment.ts#L7-L15)
 - Similarly, add the script to `src\environments\environment.prod.ts` file as shown at https://github.com/AnkitSharma-007/blogsite/blob/ed374620053380e75d8300932bea69b612760210/src/environments/environment.prod.ts#L3-L11
 - Add reference in app.module.ts as shown at https://github.com/AnkitSharma-007/blogsite/blob/ed374620053380e75d8300932bea69b612760210/src/app/app.module.ts#L12

### Create Database for Firebase project

 - Navigate to Project overview page of your project. 
 - Select “Database”under “Develop” menu from the list on the left.
 - Click on “Create database” button. 
 - Select “Start in test mode”. Click Next. Click “Done”
The Cloud Firestore database is now configured for your Firebase project.
# Install @angular/fire and firebase as dependencies for your app
Run the command shown below in the command prompt

    npm install firebase @angular/fire --save
Import the libraries in `app.module.ts` as shown below.
   
    import { AngularFireModule } from '@angular/fire';
    import { AngularFirestoreModule } from '@angular/fire/firestore';

    @NgModule({
    ...
    imports: [
	    // other imports
	    AngularFireModule.initializeApp(environment.firebaseConfig),
	    AngularFirestoreModule,],
    ...
    })
# Add Angular material package

To install Angular material in our app we will execute the following command in the console.

    npm install --save @angular/material @angular/cdk @angular/animations

After installation we will import it in `app.module.ts` file as shown below.

    import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
    
    @NgModule({
    imports: [
	    // other imports
	    BrowserAnimationsModule],
    })

Some features of Angular material require `HammerJS`. Therefore, we will install it using the command shown below.

    npm install --save hammerjs

After installing, we will import it in the `src/main.ts`. This file is the entry point of our app.

    import 'hammerjs';

# Add a material theme

We will add an inbuilt material theme globally by including the following line in `styles.scss` file.

    @import  "~@angular/material/prebuilt-themes/indigo-pink.css";

# Adding a module for Angular material

We will create a new module to include all the material related components. Run the following command in the console to create a new module.

    ng g m ng-material

open `src\app\ng-material\ng-material.module.ts` file and put the code as shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/ng-material/ng-material.module.ts](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/ng-material/ng-material.module.ts)

Add the reference for this module in `app.module.ts` file as shown below.

    import { NgMaterialModule } from  './ng-material/ng-material.module';
    
    @NgModule({
    
    imports: [
	    // other imports
	    NgMaterialModule
    ],
    })

# Add Bootstrap package

Run the following command to install Bootstrap in your app.

    npm install bootstrap --save

Include the reference of Bootstrap globally in `styles.scss` file as shown below.

    @import  "~bootstrap/dist/css/bootstrap.css";

# Adding Navigation Bar

We will generate a component for navigation bar using following command

    ng g c components/nav-bar

open `components\nav-bar\nav-bar.component.html` and put the following code in it.

    <mat-toolbar  class="nav-bar mat-elevation-z2"></mat-toolbar>

We will add the styling for nav bar in styles.scss as shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/styles.scss#L14-L25](https://github.com/AnkitSharma-007/blogsite/blob/master/src/styles.scss#L14-L25)

# Creating the Home Page

Run the following command to create the HomeComponent

    ng g c components/home

At this point of time we will not add any code in HomeComponent. We will revisit in later part of this workshop.

# Adding Router module

We will add the RouterModule in `app.module.ts` file as shown below.

    import { RouterModule } from  '@angular/router';
    
    @NgModule({
    
    imports: [
    // other imports
    
	    RouterModule.forRoot([
		    { path:  '', component:  HomeComponent, pathMatch:  'full' },    
		    { path:  '**', component:  HomeComponent }  
	    ])
    ],
    })

# Updating the app.component.html file

Open `app.component.html` and replace the content of the file with the following code.

    <app-nav-bar></app-nav-bar>
    <div  class="container">
	    <router-outlet></router-outlet>
    </div>

Add the styles as shown in `styles.scss` at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/styles.scss#L6-L12](https://github.com/AnkitSharma-007/blogsite/blob/master/src/styles.scss#L6-L12)

# Add modules for reactive forms FormsModule

We will add the FormsModule in `app.module.ts` as shown below.

    import { FormsModule } from  '@angular/forms';
    
    imports: [
	    // other imports
	    FormsModule,
    ],
    })
# Creating a model

Create a folder `models` under `src\app` folder. Create a new file `post.ts` in models folder. Open the `post.ts` file and put the following code as shown in the file at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/models/post.ts](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/models/post.ts)

# Add CkEditor package

We will use CKEditor for adding and editing our blog post. CKEditor is a Smart WYSIWYG editor which provides us great editing capabilities.

Execute the commands shown below to install the CKEditor WYSIWYG editor component for Angular.

    npm install --save @ckeditor/ckeditor5-angular

Run the command shown below to install one of the official editor builds which is classic editor.

    npm install --save @ckeditor/ckeditor5-build-classic

Add the imports in `app.module.ts` as shown below.

    import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
    @NgModule( {
    imports: [
	    // other imports
	    CKEditorModule,
    ],
    })

# Adding the blog editor

We will create a new component for adding and editing the blog. Run the command as shown below.

    ng g c components/blog-editor

Add the router link for this component in `app.module.ts` as shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/app.module.ts#L43](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/app.module.ts#L43)

Open `components\blog-editor\blog-editor.component.ts` and add the import definitions as shown at  [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/app.module.ts#L43](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/app.module.ts#L43)

We will also initialize some variable as shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-editor/blog-editor.component.ts#L16-L20](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-editor/blog-editor.component.ts#L16-L20)

We will create a method to define the configuration for the blog editor. You can get the method definition from [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-editor/blog-editor.component.ts#L50-L66](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-editor/blog-editor.component.ts#L50-L66)

We will invoke this method inside `ngOnInit` as shown below.

    this.setEditorConfig();

open `components\blog-editor\blog-editor.component.html` and put the code as shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-editor/blog-editor.component.html](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-editor/blog-editor.component.html)

# Creating the blog service

We will create a service to handle our the database operation. Create a new service using the command shown below.

    ng g s services/blog

Open the `src\app\services\blog.service.ts` file and add the following import definitions.

    import { AngularFirestore } from  '@angular/fire/firestore';
    import { Post } from  '../models/Post';
    import { map } from  'rxjs/operators';
    import { Observable } from  'rxjs';

Inject the AngularFirestore in the constructor as shown at 
[https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/services/blog.service.ts#L12](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/services/blog.service.ts#L12)

Now we will add the method to create a new post. The method to add a new blog post is shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/services/blog.service.ts#L14-L17](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/services/blog.service.ts#L14-L17). Put this method in `blog.service.ts` file.

# Add a new blog

We will now implement the feature of adding a new blog to our application. Open blog.service.ts and inject the following service definitions in the constructor.

    private  _route: ActivatedRoute,
    private  datePipe: DatePipe,
    private  blogService: BlogService,
    private  _router: Router

Add the following code in `@Component` decorator for using Date pipe

    providers: [DatePipe]

We will create a new method called `saveBlogPost` which is used to add a new to our databse. The definition for this method is shown below.

    saveBlogPost() {
    this.postData.createdDate = this.datePipe.transform(Date.now(), 'MM-dd-yyyy HH:mm');
    this.blogService.createPost(this.postData).then(
      () => {
    	this._router.navigate(['/']);
      }
    );
    }

This method will be invoked on click of Save button. We will add the following code definition for Cancel button.

    cancel() {
    	this._router.navigate(['/']);
    }

# Adding buttons in Nav bar

We will add the navigation button to blog editor and home page in the nav bar. Add the following code in the `<mat-toolbar>` element.

    <button  mat-button  [routerLink]='[""]'> My blog </button>
    <button  mat-button  [routerLinkActive]='["link-active"]'  [routerLink]='["/addpost"]'>
    Add Post
    </button>

### Updating Styles.scss

We will add styling for blog editor in `styles.scss` file as shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/styles.scss#L22-L56](https://github.com/AnkitSharma-007/blogsite/blob/master/src/styles.scss#L22-L56)

Open the browser and click on “AddPost” button on the nav-bar. You will be navigated to the blog editor page. Add a new blog and click on save button to save the blog in thee database. Open the firebase console, navigate to your project overview page and click on “Database” link in the menu on the left. Here you can see the record for your newly added blog.
# Creating custom pipes

We will add two custom pipes in our app

 - **Excerpt**:  which will shown a summary of blog in blog card.
 - **Slug**:  which will show the URL slug for blog.

Run the following command to generate the excerpt pipe.

    ng g p custompipes/excerpt

Add the code definition as shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/custompipes/excerpt.pipe.ts](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/custompipes/excerpt.pipe.ts)

Run the following command to generate the slug pipe.

    ng g p custompipes/slug

Add the code definition as shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/custompipes/slug.pipe.ts](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/custompipes/slug.pipe.ts)

# Get the blogs from database

We will add the method in `blog.service.ts` file to fetch all the blog from database. The definition for the method `getAllPosts` is shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/services/blog.service.ts#L19-L29](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/services/blog.service.ts#L19-L29)

Run the command shown below to create the blog card component.

    ng g c components/blog-card

Open `blog-card.component.ts` and add import definitions as shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-card/blog-card.component.ts#L2-L3](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-card/blog-card.component.ts#L2-L3)

Inject the Blog Service in the constructor of `BlogCardComponent` class as shown below.

    private blogService: BlogService

Now we will create a method to get the blog post and invoke it inside `ngOnInit`. The method definition is shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-card/blog-card.component.ts#L16-L24](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-card/blog-card.component.ts#L16-L24)

Open the `blog-card.component.html` file and add the code as shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-card/blog-card.component.html](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-card/blog-card.component.html)

Open `components\blog-card\blog-card.component.scss` and put the style definitions as shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-card/blog-card.component.scss](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-card/blog-card.component.scss)

# Revisiting the home component

We will display the blog card on home page. Open `home.component.html` and put the code as shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/home/home.component.html](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/home/home.component.html)

Open `styles.scss` and add the following style definition inside it.

    .left-panel {
    	margin-top: 15px;
    }

# Read a blog

We will add the feature of reading a blog. Run the following command to create the blog component

    ng g c components/blog

Add the router link for this component in `app.module.ts` as shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/app.module.ts#L44](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/app.module.ts#L44)

Add the following method definition in `blog.service.ts` file.

    getPostbyId(postId: string) {
    	const  userDetails = this.db.doc('blogs/' + postId).valueChanges();
    	return  userDetails;
    }

Open `components\blog\blog.component.ts` and add import definitions as shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog/blog.component.ts#L2-L4](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog/blog.component.ts#L2-L4)

Now put the code inside `BlogComponent` class as shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog/blog.component.ts#L13-L30](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog/blog.component.ts#L13-L30)

Open `components\blog\blog.component.html` and put the code as shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog/blog.component.html](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog/blog.component.html)

Finally we will add styling in the `styles.scss` as shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/styles.scss#L62-L85](https://github.com/AnkitSharma-007/blogsite/blob/master/src/styles.scss#L62-L85)
# Deleting a blog

We will add the feature of deleting a blog. Add the following code in the blog service.

    deletePost(blogID: string) {
    	return  this.db.doc('blogs/' + blogID).delete();
    }

Open `components\blog-card\blog-card.component.ts` and add the delete method definition as shown as [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/services/blog.service.ts#L41-L44](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/services/blog.service.ts#L41-L44)
# Edit an existing blog

We will now implement the functionality to edit an existing blog. Add the following code definition in blog service.

    updatePost(postId: string, post: Post) {
    	const  putData = JSON.parse(JSON.stringify(post));
    	return  this.db.doc('blogs/' + postId).update(putData);
    }

Add the routing for edit functionality in `app.module.ts` as shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/app.module.ts#L45](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/app.module.ts#L45)

We will fetch the id of the blog from the URL with the help of `ActivatedRoute` class. Open `blog-editor.component.ts` and add the following code in the constructor.

    if (this._route.snapshot.params['id']) {
    	this.postId = this._route.snapshot.paramMap.get('id');
    }
    
Update the `ngOnInit` method inside the `BlogEditorComponent` class  as shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-editor/blog-editor.component.ts#L31-L43](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-editor/blog-editor.component.ts#L31-L43)

We will add the method to set the edit form when we click on “Edit” button on blog card in the home page. The method definition is shown below.

    setPostFormData(postFormData) {
    	this.postData.title = postFormData.title;
    	this.postData.content = postFormData.content;
    }

Upon clicking on Save we need to handle to case of both adding a new blog as well as editing an existing blog. Hence we will update the `saveBlogPost` as shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-editor/blog-editor.component.ts#L68-L83](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-editor/blog-editor.component.ts#L68-L83)

# Deploy the app on Firebase

The last step is to deploy the app on firebase. We will follow the steps as shown below.

**Step 1**: Install firebase CLI tools via npm. Run the command as shown below.

    npm install -g firebase-tools

**Step 2**: Run the following command to build the app in production configuration.

    ng build --prod

**Step 3**: Open a command prompt window inside the `\dist\blogsite` folder. And run the following command to login using firebase.

    firebase login

It will open a browser window and ask you to login into Firebase. Login using your Google account. Upon successful login navigate back to your CLI.

**Step 4**: Execute the following command to initialize the app

    firebase init

This command will initialize a firebase project. You will be asked a set of questions. Answer them as shown below:
- Are you ready to proceed? – Y
- Which Firebase CLI features do you want to setup for this folder? – select Hosting
- Please select an option - use an existing project. 
- Select a default Firebase project for this directory: Select your project name from the list.
- What do you want to use as your public directory? – blogsite
- Configure as a single-page app (rewrite all urls to /index.html)? – y
- File dist/index.html already exists. Overwrite? – N

You will get a “Firebase initialization complete!” message.

**Step 4**: Deploy on Firebase. Run the following command to deploy your application on Firebase.

    firebase deploy

This command will deploy your angular application on Firebase and upon success it will give you a hosting URL.

This completes our application. We learned how to create a simple blogging application using Angular on frontend and cloud firestore as database.
# Next Steps

We can extend this application by adding new features. Some of them are mentioned below.

- Google Authentication with the help of firebase
- Pagination on the home page
- Post comment on each blog
- Option to share the blog on social media
- Author profile on home page

An advanced version of this app with all the new features is available at [https://github.com/AnkitSharma-007/blogging-app-with-Angular-CloudFirestore](https://github.com/AnkitSharma-007/blogging-app-with-Angular-CloudFirestore)

### Personal blog
You can read articles on Angular on my personal blog at [https://ankitsharmablogs.com/](https://ankitsharmablogs.com/)

### Explore Angular in depth

If you want to explore Angular in depth then refer to  [https://angular.io/start](https://angular.io/start)
