import { Component } from '@angular/core';
import { Note } from 'src/components/notes-list/notes-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'notes-app';
  notes: Note[] = [];
  constructor(){
    this.notes = [
      {
        id: 1,
        writer: 'John Doe',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquet nunc nisl eget nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquet nunc nisl eget nunc.',
        rating: 4.5,
        img: 'https://icon-library.com/images/user-icon-jpg/user-icon-jpg-17.jpg',
        date: new Date()
      },
      {
        id: 2,
        writer: 'Jane Doe',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquet nunc nisl eget nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquet nunc nisl eget nunc.',
        rating: 3.5,
        img: 'https://icon-library.com/images/user-icon-jpg/user-icon-jpg-17.jpg',
        date: new Date()
      }
    ]
  }
}
