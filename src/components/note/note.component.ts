import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { StarRatingDirective } from '../../directives/star-rating.directive';
import { Note } from '../notes-list/notes-list.component';

@Component({
  selector: 'app-note[note]',
  standalone: true,
  imports: [CommonModule, StarRatingDirective, NgOptimizedImage],
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
  inputs: ['note'],
})
export class NoteComponent {
  note!: Note;
}
