import { Component, signal } from '@angular/core';
import { Post } from '../interfaces/post.interface';
import { SinglePostComponent } from './single-post/single-post.component';

@Component({
  selector: 'app-main-page',
  imports: [SinglePostComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  posts = signal<Post[]>([
    {
      username: 'max_mustermann',
      avatar: 'https://picsum.photos/id/1005/40/40',
      img: 'https://picsum.photos/id/1015/600/600',
      likes: 0,
      caption: 'Mein erstes Angular Projekt sieht schon aus wie Instagram! 🚀',
      isLiked: false
    },
    {
      username: 'erika_musterfrau',
      avatar: 'https://picsum.photos/id/1011/40/40',
      img: 'https://picsum.photos/id/1016/600/600',
      likes: 0,
      caption: 'Signals sind wirklich angenehm zu benutzen. ✨',
      isLiked: false
    },
  ]);
}

