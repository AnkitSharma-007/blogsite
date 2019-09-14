import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { BlogEditorComponent } from './components/blog-editor/blog-editor.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { ExcerptPipe } from './custompipes/excerpt.pipe';
import { SlugPipe } from './custompipes/slug.pipe';
import { BlogComponent } from './components/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    BlogEditorComponent,
    BlogCardComponent,
    ExcerptPipe,
    SlugPipe,
    BlogComponent,
  ],
  imports: [
    BrowserModule,
    CKEditorModule,
    FormsModule,
    NgMaterialModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'addpost', component: BlogEditorComponent },
      { path: 'blog/:id/:slug', component: BlogComponent },
      { path: 'editpost/:id', component: BlogEditorComponent },
      { path: '**', component: HomeComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
