import { Component, signal } from '@angular/core';

interface Post {
  username: string;
  avatar: string;
  img: string;
  likes: number;
  caption: string;
}

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  posts = signal<Post[]>([
    {
      username: 'max_mustermann',
      avatar: 'https://picsum.photos/id/1005/40/40',
      img: 'https://picsum.photos/id/1015/600/600',
      likes: 42,
      caption: 'Mein erstes Angular Projekt sieht schon aus wie Instagram! 🚀'
    },
    {
      username: 'erika_musterfrau',
      avatar: 'https://picsum.photos/id/1011/40/40',
      img: 'https://picsum.photos/id/1016/600/600',
      likes: 128,
      caption: 'Signals sind wirklich angenehm zu benutzen. ✨'
    }
  ]);
}
