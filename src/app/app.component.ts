import { Component, VERSION, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { TextEntry } from './textEntry';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  inputTextControl = new FormControl('');
  textEntries: TextEntry[];
  textEntriesSubscription$: Observable<TextEntry[]>;

  constructor() {
  }
  
  ngOnInit() {
    this.textEntries = [];
  }

  enterText() {
    this.textEntries.push(new TextEntry("", this.inputTextControl.value));
    this.inputTextControl.setValue('');
  }
}
