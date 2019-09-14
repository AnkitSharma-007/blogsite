import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {

  blogPost: Post[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.getBlogPosts();
  }

  getBlogPosts() {
    this.blogService.getAllPosts().subscribe(result => {
      this.blogPost = result;
    });
  }

  delete(postId) {
    if (confirm('Are you sure')) {
      this.blogService.deletePost(postId).then(
        () => {
          alert("Blog deleted successfully");
        }
      );
    }
  }

}
