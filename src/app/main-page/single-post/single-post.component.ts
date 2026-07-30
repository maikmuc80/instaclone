import { Component, input, output, signal } from '@angular/core';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-single-post',
  imports: [],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss'
})
export class SinglePostComponent {
  post = input.required<Post>();
  index = input.required<number>();

  likeToggled = output<Post>();
  commentAdded = output<{ index: number; text: string }>();

  newComment = signal('');

  toggleLike() {
    this.likeToggled.emit(this.post());
  }

  updateNewComment(event: Event) {
    this.newComment.set((event.target as HTMLInputElement).value);
  }

  addComment() {
    const text = this.newComment().trim();
    if (!text) return;

    this.commentAdded.emit({ index: this.index(), text });
    this.newComment.set('');
  }
}
