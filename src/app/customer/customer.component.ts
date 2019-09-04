import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent {
  @Output() alert = new EventEmitter<{name: string}>();

  alertName(name: string) {
    this.alert.emit({name});
  }
}
