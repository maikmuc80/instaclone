import { Component, Input } from '@angular/core';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-single-post',
  imports: [],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss'
})
export class SinglePostComponent {
  @Input({ required: true }) post!: Post;

  toggleLike() {
    this.post.isLiked = !this.post.isLiked;
    this.post.likes = this.post.isLiked ? this.post.likes + 1 : this.post.likes - 1;
  }
}
