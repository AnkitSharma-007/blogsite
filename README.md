# Overview
- [Prerequisites](https://github.com/AnkitSharma-007/blogsite#prerequisites)
- [Create a new Angular app](https://github.com/AnkitSharma-007/blogsite#create-a-new-angular-app)
- [Configuring firebase](https://github.com/AnkitSharma-007/blogsite#configuring-firebase)
- [Install @angular/fire and firebase](https://github.com/AnkitSharma-007/blogsite#install-angularfire-and-firebase)
- [Install Angular Material packages](https://github.com/AnkitSharma-007/blogsite#install-angular-material-packages)
- [Add a material theme](https://github.com/AnkitSharma-007/blogsite#add-a-material-theme)
- [Add a module for Angular material](https://github.com/AnkitSharma-007/blogsite#add-a-module-for-angular-material)
- [Add Bootstrap CSS package](https://github.com/AnkitSharma-007/blogsite#add-bootstrap-css-package)
- [Serve the application](https://github.com/AnkitSharma-007/blogsite#serve-the-application)
- [Add Navigation Bar](https://github.com/AnkitSharma-007/blogsite#add-navigation-bar)
- [Create the Home Page](https://github.com/AnkitSharma-007/blogsite#create-the-home-page)
- [Add Router module](https://github.com/AnkitSharma-007/blogsite#add-router-module)
- [Update the AppComponent](https://github.com/AnkitSharma-007/blogsite#update-the-appcomponent)
- [Add Forms module](https://github.com/AnkitSharma-007/blogsite#add-forms-module)
- [Creating the data model](https://github.com/AnkitSharma-007/blogsite#creating-the-data-model)
- [Install CkEditor package](https://github.com/AnkitSharma-007/blogsite#install-ckeditor-package)
- [Add the blog editor](https://github.com/AnkitSharma-007/blogsite#add-the-blog-editor)
- [Create the blog service](https://github.com/AnkitSharma-007/blogsite#create-the-blog-service)
- [Add a new blog](https://github.com/AnkitSharma-007/blogsite#add-a-new-blog)
- [Add buttons in Nav bar](https://github.com/AnkitSharma-007/blogsite#add-buttons-in-nav-bar)
- [Create custom pipes](https://github.com/AnkitSharma-007/blogsite#create-custom-pipes)
- [Get the blogs from database](https://github.com/AnkitSharma-007/blogsite#get-the-blogs-from-database)
- [Add a BlogCardComponent](https://github.com/AnkitSharma-007/blogsite#add-a-blogcardcomponent)
- [Add the BlogCardComponent to the home page](https://github.com/AnkitSharma-007/blogsite#add-the-blogcardcomponent-to-the-home-page)
- [Read a blog post](https://github.com/AnkitSharma-007/blogsite#read-a-blog-post)
- [Deploy the app on Firebase Hosting](https://github.com/AnkitSharma-007/blogsite#deploy-the-app-on-firebase-hosting)
- [Delete a blog post](https://github.com/AnkitSharma-007/blogsite#delete-a-blog-post)
- [Edit an existing blog post](https://github.com/AnkitSharma-007/blogsite#edit-an-existing-blog-post)
- [Next Steps](https://github.com/AnkitSharma-007/blogsite#next-steps)


# Prerequisites
Install the following software.
 - [Nodejs (LTS Version)](https://nodejs.org/en/)
 - [Angular CLI](https://cli.angular.io/)
 - [Visual Studio Code](https://code.visualstudio.com/)


# Create a new Angular app
Run the command shown below to create a new Angular app named as blogsite.

    ng new blogsite --routing=false --style=scss

### Open Visual Studio Code
Change directory to the new project and open the project in VS Code.

    cd blogsite
    code .


# Configuring firebase
We will create a project on firebase and configure cloud firestore database for it. We will use this database for our angular application. the steps are shown below.

### Creating a project on firebase
To create a new project on firebase follow the steps mentioned below.
 - Navigate to
   [https://console.firebase.google.com/](https://console.firebase.google.com/)
   and login using your Gmail account.
 -  Click on “Create a Project” button.
 - Enter you project name. You can give any name of your choice. Here we
   will use the name `ngBlog`.
 - Accept the terms and click on Continue.
 - If asked to setup Google Analytics, select “Not right now”
 - Click on “Create your project”.
 - Once the project is ready click Continue.

### Add Firebase configuration to your application
 - Click on the “Web” icon on the page.
 - Provide a nickname for your app and click on “Register app”. 
 - Copy the `firebaseConfig` object from the `<script>` tag.
 - Paste the copied code into [`src/environments/environment.ts`](https://github.com/AnkitSharma-007/blogsite/blob/ed374620053380e75d8300932bea69b612760210/src/environments/environment.ts#L7-L15).
 - Similarly, paste the code into [`src/environments/environment.prod.ts`](https://github.com/AnkitSharma-007/blogsite/blob/ed374620053380e75d8300932bea69b612760210/src/environments/environment.prod.ts#L3-L11).
 - Import the `environment` constant after the `AppComponent` import, into [`src/app/app.module.ts`](https://github.com/AnkitSharma-007/blogsite/blob/ed374620053380e75d8300932bea69b612760210/src/app/app.module.ts#L12).
 - Click "Continue to the console" on the Firebase web page.

### Create "Cloud Firestore" database
 - Navigate to the "Project Overview" page of your Firebase project. 
 - Select “Database” under “Develop” menu from the list on the left.
 - Click on “Create database” button. 
 - Select “Start in test mode”. Click "Next". Click “Done”
The Cloud Firestore database is now configured for your Firebase project.


# Install @angular/fire and firebase
Run the command shown below in the command prompt

    npm install firebase @angular/fire --save

Import the libraries in [`src/app/app.module.ts`](https://github.com/AnkitSharma-007/blogsite/blob/ed374620053380e75d8300932bea69b612760210/src/app/app.module.ts#L3-L4) as shown below.
   
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


# Install Angular Material packages
Execute the following command in the console.

    npm install --save @angular/material @angular/cdk @angular/animations

After installation import it into [`src/app/app.module.ts`](https://github.com/AnkitSharma-007/blogsite/blob/ed374620053380e75d8300932bea69b612760210/src/app/app.module.ts#L5) file as shown below.

    import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
    
    @NgModule({
      ...
      imports: [
        ...
        BrowserAnimationsModule,
      ],
    })

Some features of Angular material require `HammerJS`. Install it using the command shown below.

    npm install --save hammerjs

After installation import it into [`src/main.ts`](https://github.com/AnkitSharma-007/blogsite/blob/ed374620053380e75d8300932bea69b612760210/src/main.ts#L6). This file is the entry point of our app.

    import 'hammerjs';


# Add a material theme
We will add a built-in material theme globally by including the following line in [`src/styles.scss`](https://github.com/AnkitSharma-007/blogsite/blob/ed374620053380e75d8300932bea69b612760210/src/styles.scss#L3) file.

    @import  "~@angular/material/prebuilt-themes/indigo-pink.css";


# Add a module for Angular material
We will create a new module to include all the material related components. Run the following command in the console to create a new module.

    ng g m ng-material

Open `src/app/ng-material/ng-material.module.ts` and replace what is there with the code in [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/ng-material/ng-material.module.ts](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/ng-material/ng-material.module.ts)

Import this new `NgMaterialModule` in [`src/app/app.module.ts`](https://github.com/AnkitSharma-007/blogsite/blob/ed374620053380e75d8300932bea69b612760210/src/app/app.module.ts#L6) file as shown below.

    import { NgMaterialModule } from  './ng-material/ng-material.module';
    
    @NgModule({
      ...
      imports: [
        ...
        NgMaterialModule,
      ],
    })


# Add Bootstrap CSS package
Run the following command to install [Bootstrap](https://getbootstrap.com/) in your app.

    npm install bootstrap --save

Include the reference of Bootstrap globally in [`src/styles.scss`](https://github.com/AnkitSharma-007/blogsite/blob/ed374620053380e75d8300932bea69b612760210/src/styles.scss#L4) file as shown below.

    @import  "~bootstrap/dist/css/bootstrap.css";


# Serve the application
Open a new terminal window and run the following command.

    ng serve

The CLI will now serve the application at `localhost:4200` and recompile and reload whenever a file changes.


# Add Navigation Bar
Run the following command, in the original terminal, to generate a navigation bar component.

    ng g c components/nav-bar

Open `src/app/components/nav-bar/nav-bar.component.html` and replace what is there with the following code.

    <mat-toolbar class="nav-bar mat-elevation-z2"></mat-toolbar>

We will add the styling for nav bar in [`src/app/components/nav-bar/nav-bar.component.scss`](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/nav-bar/nav-bar.component.scss) as shown below

     .nav-bar {
        background-color: #1565C0;
        color: #FFFFFF;
        position: fixed;
        top: 0;
        z-index: 99;
      }
    
      button:focus {
        outline: none;
        border: 0;
      }


# Create the Home Page
Run the following command to create the HomeComponent

    ng g c components/home

At this point in time we will not add any code to `HomeComponent`. We will revisit in a later part of this workshop.


# Add Router module
We will add the `RouterModule` into [`src/app/app.module.ts`](https://github.com/AnkitSharma-007/blogsite/blob/ed374620053380e75d8300932bea69b612760210/src/app/app.module.ts#L7) as shown below.

    import { RouterModule } from '@angular/router';
    
    @NgModule({
      ...    
      imports: [
        ...
        RouterModule.forRoot([
          { path: '', component: HomeComponent, pathMatch: 'full' },
          { path: '**', component: HomeComponent }
        ]),
      ],
    })


# Update the `AppComponent`
Open [`src/app/app.component.html`](https://github.com/AnkitSharma-007/blogsite/blob/ed374620053380e75d8300932bea69b612760210/src/app/app.component.html) and replace the content of the file with the following code.

    <app-nav-bar></app-nav-bar>
    <div  class="container">
      <router-outlet></router-outlet>
    </div>

Add the following styles to [`src/styles.scss`](https://github.com/AnkitSharma-007/blogsite/blob/ed374620053380e75d8300932bea69b612760210/src/styles.scss#L6-L12)

    body {
      background-color: #fafafa;
    }

    .container {
      padding-top: 60px;
    }


# Add Forms module
We will add the `FormsModule` in [`src/app/app.module.ts`](https://github.com/AnkitSharma-007/blogsite/blob/ed374620053380e75d8300932bea69b612760210/src/app/app.module.ts#L8) as shown below.

    import { FormsModule } from  '@angular/forms';
    
    @NgModule({
      ...    
      imports: [
        ...
        FormsModule,
      ],
    })


# Creating the data model
Create new a folder `src/app/models`. Create a new file [`src/app/models/post.ts`]([https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/models/post.ts](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/models/post.ts)) and paste the following code

    export class Post {
	    postId: string;
	    title: string;
	    content: string;
	    createdDate: any;
	    
		    constructor() {
		    this.content = '';
	    }
    }


# Install CkEditor package
We will use [CKEditor](https://ckeditor.com/) for adding and editing our blog post. CKEditor is a Smart WYSIWYG editor which provides us great editing capabilities.

Execute the commands shown below to install the CKEditor WYSIWYG editor component for Angular.

    npm install --save @ckeditor/ckeditor5-angular

Run the command shown below to install one of the official editor builds which is classic editor.

    npm install --save @ckeditor/ckeditor5-build-classic

Imports the `CKEditorModule` in [`src/app/app.module.ts`](https://github.com/AnkitSharma-007/blogsite/blob/ed374620053380e75d8300932bea69b612760210/src/app/app.module.ts#L9) as shown below.

    import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

    @NgModule( {
      imports: [
        ...
        CKEditorModule,
      ],
    })


# Add the blog editor

We will create a new component for adding and editing the blog. Run the command as shown below.

    ng g c components/blog-editor


### Add a route to the addpost page
Add the route for this component in `app.module.ts` as shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/app.module.ts#L42](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/app.module.ts#L42)

    RouterModule.forRoot([
      ...
      { path: 'addpost', component: BlogEditorComponent },
      ...
    ])

### Add CKEditor to `BlogEditorComponent`
Open `src/app/components/blog-editor/blog-editor.component.ts` and add the import definitions as shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-editor/blog-editor.component.ts#L2-L6](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-editor/blog-editor.component.ts#L2-L6)

    import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
    import { Post } from 'src/app/models/post';
    import { DatePipe } from '@angular/common';
    import { BlogService } from 'src/app/services/blog.service';
    import { Router, ActivatedRoute } from '@angular/router';

We will also initialize some properties as shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-editor/blog-editor.component.ts#L16-L20](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-editor/blog-editor.component.ts#L16-L20)

    public Editor = ClassicEditor;
    ckeConfig: any;
    postData = new Post();
    formTitle = 'Add';
    postId = '';
    
We will create a method to define the configuration for the blog editor. You can get the method definition from [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-editor/blog-editor.component.ts#L50-L66](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-editor/blog-editor.component.ts#L50-L66)

    setEditorConfig() {
      this.ckeConfig = {
        removePlugins: ['ImageUpload', 'MediaEmbed'],
        heading: {
          options: [
            { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
            { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
            { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
            { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
            { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
            { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
            { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' },
            { model: 'Formatted', view: 'pre', title: 'Formatted' },
          ]
        }
      };
    }

We will invoke this method inside `ngOnInit` as shown below.

    ngOnInit() {
      this.setEditorConfig();
    }

### Update the BlogEditorComponent template
Open `src/app/components/blog-editor/blog-editor.component.html` and put the code as shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-editor/blog-editor.component.html](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-editor/blog-editor.component.html)

    <h1>{{formTitle}} Post</h1>
    <hr />
    <form #myForm="ngForm" (ngSubmit)="myForm.form.valid && saveBlogPost()" accept-charset="UTF-8" novalidate>
        <input type="text" class="blogHeader" placeholder="Add title..." class="form-control" name="postTitle"
            [(ngModel)]="postData.title" #postTitle="ngModel" required />
        <span class="text-danger" *ngIf="myForm.submitted && postTitle.errors?.required">
            Title is required
        </span>
        <br />
        <div class="form-group">
            <ckeditor name="myckeditor" [config]="ckeConfig" [(ngModel)]="postData.content" #myckeditor="ngModel"
                debounce="300" [editor]="Editor"></ckeditor>
        </div>
        <div class="form-group">
            <button type="submit" mat-raised-button color="primary">Save</button>
            <button type=" button" mat-raised-button color="warn" (click)="cancel()">CANCEL</button>
        </div>
    </form>


# Create the blog service
We will create a service to handle our the database operation. Create a new service using the command shown below.

    ng g s services/blog

Open the [`src/app/services/blog.service.ts`](https://github.com/AnkitSharma-007/blogsite/blob/ed374620053380e75d8300932bea69b612760210/src/app/services/blog.service.ts#L2-L5) file and add the following import definitions.

    import { AngularFirestore } from  '@angular/fire/firestore';
    import { Post } from  '../models/post';
    import { map } from  'rxjs/operators';
    import { Observable } from  'rxjs';

Inject the `AngularFirestore` in the constructor.

    constructor(private db: AngularFirestore) { }

Now we will add the method to create a new post. The method to add a new blog post is shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/services/blog.service.ts#L14-L17](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/services/blog.service.ts#L14-L17). Put this method in `blog.service.ts` file.

    createPost(post: Post) {
      const postData = JSON.parse(JSON.stringify(post));
      return this.db.collection('blogs').add(postData);
    }


# Add a new blog
We will now implement the feature of adding a new blog to our application. Open [`src/app/components/blog-editor.component.ts`](https://github.com/AnkitSharma-007/blogsite/blob/ed374620053380e75d8300932bea69b612760210/src/app/components/blog-editor/blog-editor.component.ts#L22-L25) and inject the following service definitions in the constructor.

    constructor(private  _route: ActivatedRoute,
      private  datePipe: DatePipe,
      private  blogService: BlogService,
      private  _router: Router) { }

Add the following code in `@Component` decorator `DatePipe` can be injected.

    @Component({
      ...
      providers: [DatePipe]
    }

We will create a new method called `saveBlogPost` which is used to add a new post to our database. The definition for this method is shown below.

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


# Add buttons in Nav bar
We will add the navigation button to blog editor and home page in the nav bar. Add the following code to the `<mat-toolbar>` element in [`src/app/components/nav-bar/nav-bar.component.html`](https://github.com/AnkitSharma-007/blogsite/blob/ed374620053380e75d8300932bea69b612760210/src/app/components/nav-bar/nav-bar.component.html#L2-L5).

    <mat-toolbar class="nav-bar mat-elevation-z2">
        <button mat-button [routerLink]='[""]'> My blog </button>
        <button mat-button [routerLinkActive]='["link-active"]' [routerLink]='["/addpost"]'>
            Add Post
        </button>
    </mat-toolbar>


### Add BlogEditorComponent styles 
We will add styling for blog editor in `styles.scss` file as shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/styles.scss#L14-L43](https://github.com/AnkitSharma-007/blogsite/blob/master/src/styles.scss#L14-L43)

    .ck-editor__editable {
      max-height: 350px;
      min-height: 350px;
    }
    
    pre {
      display: block;
      padding: 9.5px;
      margin: 0 0 10px;
      font-size: 13px;
      line-height: 1.42857143;
      color: #333;
      word-break: break-all;
      word-wrap: break-word;
      background-color: #f5f5f5;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    blockquote {
      display: block;
      padding: 10px 20px;
      margin: 0 0 20px;
      font-size: 17.5px;
      border-left: 5px solid #eee;
    }

    img{
      max-width: 100%;
    }

### Test it out
Open the browser and click on “AddPost” button on the nav-bar. You will be navigated to the blog editor page. Add a new blog and click on save button to save the blog in thee database. Open the firebase console, navigate to your project overview page and click on “Database” link in the menu on the left. Here you can see the record for your newly added blog.


# Create custom pipes
We will add two custom pipes in our app

 - **Excerpt**:  which will show a summary of post in blog card.
 - **Slug**:  which will show the URL slug for a post.

Run the following command to generate the excerpt pipe.

    ng g p custompipes/excerpt

Replace the `transform` method with the following, as shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/custompipes/excerpt.pipe.ts](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/custompipes/excerpt.pipe.ts)

    transform(content: string) {
      const postSummary = content.replace(/(<([^>]+)>)/ig, '');
      if (postSummary.length > 300) {
        return postSummary.substr(0, 300) + ' [...]';
      } else {
        return postSummary;
      }
    }

Run the following command to generate the slug pipe.

    ng g p custompipes/slug

Replace the `transform` method with the following, as shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/custompipes/slug.pipe.ts](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/custompipes/slug.pipe.ts)

    transform(title: string) {
      const urlSlug = title.trim().toLowerCase().replace(/ /g, '-');
      return urlSlug;
    }


# Get the blogs from database
We will add the `getAllPosts` method in `src/app/services/blog.service.ts` file to fetch all the blog posts from database. The definition for `getAllPosts` is shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/services/blog.service.ts#L19-L29](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/services/blog.service.ts#L19-L29)

    getAllPosts(): Observable<any> {
      const blogs = this.db.collection('blogs', ref => ref.orderBy('createdDate', 'desc')).snapshotChanges().pipe(
        map(actions => {
          return actions.map(
            c => ({
              postId: c.payload.doc.id,
              ...c.payload.doc.data()
            }));
        }));
      return blogs;
    }


# Add a BlogCardComponent
Run the command shown below to create the blog card component.

    ng g c components/blog-card

Open [`src/app/components/blog-card.component.ts`](https://github.com/AnkitSharma-007/blogsite/blob/ed374620053380e75d8300932bea69b612760210/src/app/components/blog-card/blog-card.component.ts) and add the following imports

    import { BlogService } from 'src/app/services/blog.service';
    import { Post } from 'src/app/models/post';

Inject the Blog Service in the constructor of `BlogCardComponent` class as shown below.

    constructor(private blogService: BlogService) { }

Add a property to hold the current blog post.

    blogPost: Post[] = [];

Now we will create a method to get the blog post and invoke it inside `ngOnInit`.

    ngOnInit() {
      this.getBlogPosts();
    }

    getBlogPosts() {
      this.blogService.getAllPosts().subscribe(result => {
        this.blogPost = result;
      });
    }

Open `src/app/components/blog-card.component.html` and replace what is there with the HTML shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-card/blog-card.component.html](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-card/blog-card.component.html)

Open `src/app/components/blog-card/blog-card.component.scss` and replace what is there with the style definitions shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-card/blog-card.component.scss](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-card/blog-card.component.scss)


# Add the BlogCardComponent to the home page

We will display the blog card on home page. Open [`src/app/components/home.component.html`](https://github.com/AnkitSharma-007/blogsite/blob/ed374620053380e75d8300932bea69b612760210/src/app/components/home/home.component.html#L1-L5) and replace what is there with the following HTML.

    <div class="row left-panel">
        <div class="col-md-9">
            <app-blog-card></app-blog-card>
        </div>
    </div>

Open [`src/app/components/home/home.component.scss`]([https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/home/home.component.scss](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/home/home.component.scss)) and add the following style definition inside it.

    .left-panel {
    	margin-top: 15px;
    }


# Read a blog post

We will add the feature of reading a blog. Run the following command to create the blog component

    ng g c components/blog

Add the router link for this component in [`app.module.ts`](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/app.module.ts#L44) as shown below

	{ path: 'editpost/:id', component: BlogEditorComponent },
	
Add the following method definition in [`blog.service.ts`](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/services/blog.service.ts#L31) file.

    getPostbyId(postId: string) {
    	const  userDetails = this.db.doc('blogs/' + postId).valueChanges();
    	return  userDetails;
    }

Open [`src/app/components/blog/blog.component.ts`](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog/blog.component.ts) and add import definitions as shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog/blog.component.ts#L2-L4](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog/blog.component.ts#L2-L4)

    import { Post } from 'src/app/models/post';
    import { ActivatedRoute } from '@angular/router';
    import { BlogService } from 'src/app/services/blog.service';

Now put the code inside `BlogComponent` class as shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog/blog.component.ts#L13-L30](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog/blog.component.ts#L13-L30)


Open [`src/app/components/blog/blog.component.html`](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog/blog.component.html) and replace what is there with the code shown below.

    <div class="docs-example-viewer-wrapper">
        <h1 class="entry-title">{{postData.title}}</h1>
        <mat-card-subtitle class="blog-info">
            <i class="fa fa-calendar" aria-hidden="true"></i> {{postData.createdDate | date:'longDate'}}
        </mat-card-subtitle>
        <mat-divider></mat-divider>
        <div class="docs-example-viewer-body">
            <div [innerHTML]="postData.content">
            </div>
        </div>
    </div>

Finally we will add styling for `BlogComponent`. Open `src/app/components/blog/blog.component.scss` and replace what is there with the style definitions shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog/blog.component.scss](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog/blog.component.scss)


# Deploy the app on Firebase Hosting

The last step is to deploy the app on firebase. We will follow the steps as shown below.

**Step 1**: Install firebase CLI tools via npm. Run the command as shown below.

    npm install -g firebase-tools

**Step 2**: Run the following command to build the app in production configuration.

    ng build --prod

**Step 3**: Open a command prompt window inside the `/dist/blogsite` folder. And run the following command to login using firebase.

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


# Delete a blog post

We will add the feature of deleting a blog. Add the following code in the blog service.

    deletePost(blogID: string) {
    	return  this.db.doc('blogs/' + blogID).delete();
    }

Open [`src/app/components/blog-card/blog-card.component.ts`](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-card/blog-card.component.ts) and add the delete method definition as shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-card/blog-card.component.ts#L26-L34](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-card/blog-card.component.ts#L26-L34)

    delete(postId) {
    if (confirm('Are you sure')) {
      this.blogService.deletePost(postId).then(
    	() => {
    	  alert("Blog deleted successfully");
    	}
      );
	 }
    }


# Edit an existing blog post

We will now implement the functionality to edit an existing blog. Add the following code definition in [`blog.service.ts`](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/services/blog.service.ts#L36).

    updatePost(postId: string, post: Post) {
    	const  putData = JSON.parse(JSON.stringify(post));
    	return  this.db.doc('blogs/' + postId).update(putData);
    }

Add the routing for edit functionality in `app.module.ts` as shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/app.module.ts#L44](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/app.module.ts#L44)

    RouterModule.forRoot([
      ...
      { path: 'editpost/:id', component: BlogEditorComponent },
      ...
    ])

We will fetch the id of the blog from the URL with the help of `ActivatedRoute` class. Open [`blog-editor.component.ts`](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-editor/blog-editor.component.ts#L26) and add the following code in the constructor.

    if (this._route.snapshot.params['id']) {
    	this.postId = this._route.snapshot.paramMap.get('id');
    }
    
Update the `ngOnInit` method inside the `BlogEditorComponent` class  as shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-editor/blog-editor.component.ts#L31-L43](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-editor/blog-editor.component.ts#L31-L43)

    ngOnInit() {
    this.setEditorConfig();
    if (this.postId) {
      this.formTitle = 'Edit';
      this.blogService.getPostbyId(this.postId).subscribe(
    	(result: Post) => {
    	  if (result) {
    		this.setPostFormData(result);
    	  }
    	}
      );
     }
    }

We will add the method to set the edit form when we click on “Edit” button on blog card in the home page. The method definition is shown below.

    setPostFormData(postFormData) {
    	this.postData.title = postFormData.title;
    	this.postData.content = postFormData.content;
    }

Upon clicking on Save we need to handle to case of both adding a new blog as well as editing an existing blog. Hence we will update the `saveBlogPost` as shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-editor/blog-editor.component.ts#L68-L83](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/components/blog-editor/blog-editor.component.ts#L68-L83)


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
