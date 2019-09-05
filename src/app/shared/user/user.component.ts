import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input() name: string;

  f = this.fb.group({
    user: [''],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
}
