import { Component, input } from '@angular/core';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-single-post',
  imports: [],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss'
})
export class SinglePostComponent {
  post = input.required<Post>();

  toggleLike() {
    const post = this.post();
    post.isLiked = !post.isLiked;
    post.likes = post.isLiked ? post.likes + 1 : post.likes - 1;
  }
}
