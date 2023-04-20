import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from '../note/note.component';

@Component({
  selector: 'app-notes-list[notes]',
  standalone: true,
  imports: [CommonModule, NoteComponent],
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesListComponent {
  @Input() notes: Note[] = [];

  constructor(){
  }
}
export interface Note {
  id?: number;
  writer: string;
  description: string;
  rating: number;
  img: string;
  date: Date;
}
