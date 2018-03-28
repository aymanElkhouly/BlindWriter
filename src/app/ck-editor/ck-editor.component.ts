import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-ck-editor',
  templateUrl: './ck-editor.component.html',
  styleUrls: ['./ck-editor.component.css']
})
export class CkEditorComponent  {
  content: string;
  ckeditorContent: string;
  constructor() {
    this.content = '<p>Hello <strong>World !</strong></p>';
    this.ckeditorContent = '<p>Hello This Is Another config</p>';
  }
}
