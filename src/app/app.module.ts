import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatSelectModule, MatButtonModule, MatDialogModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { OpenmenuComponent } from './openmenu/openmenu.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { StarratingComponent } from './starrating/starrating.component';
import { TextComponent } from './text/text.component';
import { DynamicrowComponent } from './dynamicrow/dynamicrow.component';
import { QuestionAnswerComponent } from './question-answer/question-answer.component';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    AppComponent,
    OpenmenuComponent,
    StarratingComponent,
    TextComponent,
    DynamicrowComponent,
    QuestionAnswerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    CKEditorModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
