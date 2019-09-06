import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-name-form',
  templateUrl: './my-name-form.component.html',
  styleUrls: ['./my-name-form.component.scss'],
})
export class MyNameFormComponent implements OnInit {
  nameInput;

  @Output() submitName = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  submitForm(value: string) {
    this.submitName.emit(value);
  }
}
