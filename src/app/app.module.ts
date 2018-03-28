import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { CkEditorComponent } from './ck-editor/ck-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    CkEditorComponent
  ],
  imports: [
    BrowserModule,
    CKEditorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
