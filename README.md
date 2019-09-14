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
   will use the name ngBlog.
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
# Install angular/fire and firebase as dependencies for your app
Run the command shown below to install

    npm install firebase @angular/fire --save
import the libraries in app.module.ts as shown below.
   
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
    
    ...
    
    imports: [
    // other imports
    BrowserAnimationsModule],
    
    ...
    
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
    
    ...
    
    imports: [
    
    // other imports
    
    NgMaterialModule
    
    ],
    
    ...
    
    })

# Add Bootstrap package

Run the following command to install Bootstrap in your app.

    npm install bootstrap --save

Include the reference of Bootstrap globally in `styles.scss` file as shown below.

    @import  "~bootstrap/dist/css/bootstrap.css";
<![endif]-->

# Adding Navigation Bar

We will generate a component for navigation bar using following command

    ng g c components/nav-bar

open `src\app\components\nav-bar\nav-bar.component.html` and put the following code in it.

    <mat-toolbar  class="nav-bar mat-elevation-z2"></mat-toolbar>

We will add the styling for nav bar in styles.scss as shown at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/styles.scss#L14-L25](https://github.com/AnkitSharma-007/blogsite/blob/master/src/styles.scss#L14-L25)

# Creating the Home Page

Run the following command to create the HomeComponent

    ng g c components/home

At this point of time we will not add any code in HomeComponent. We will revisit in later part of this workshop.
<![endif]-->

# Adding Router module

We will add the RouterModule in `app.module.ts` file as shown below.

    import { RouterModule } from  '@angular/router';
    
    @NgModule({
    
    ...
    
    imports: [
    
    // other imports
    
    RouterModule.forRoot([
    
    { path:  '', component:  HomeComponent, pathMatch:  'full' },
    
    { path:  '**', component:  HomeComponent }
    
    ])
    
    ],
    
    ...
    
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
    
    FormsModule
    
    ],
    
    ...
    
    })
# Creating a model

Create a folder `models` under `src\app\` folder. Create a new file `post.ts` in models folder. Open the `post.ts` file and put the following code as shown in the file at [https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/models/post.ts](https://github.com/AnkitSharma-007/blogsite/blob/master/src/app/models/post.ts)

# Add CkEditor package

We will use CKEditor for adding and editing our blog post. CKEditor is a Smart WYSIWYG editor which provides us great editing capabilities.

Execute the commands shown below to install the CKEditor WYSIWYG editor component for Angular:

    npm install --save @ckeditor/ckeditor5-angular

Run the command shown below to install one of the official editor builds which is classic editor.

    npm install --save @ckeditor/ckeditor5-build-classic

Add the imports in `app.module.ts` as shown below.

    import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
    
    @NgModule( {
    
    …
    
    imports: [
    
    // other imports
    
    CKEditorModule,
    
    ],
    
    } )



# Adding the blog editor

We will create a new component for adding and editing the blog. Run the command as shown below.

    ng g c components/blog-editor
