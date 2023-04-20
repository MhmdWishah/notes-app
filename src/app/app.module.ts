import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteComponent } from 'src/components/note/note.component';
import { NotesListComponent } from 'src/components/notes-list/notes-list.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoteComponent,
    NotesListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
