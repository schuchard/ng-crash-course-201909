import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @Input() customer: string;
  @Input() count: number;

  todos$ = this.http
    .get<any[]>('https://jsonplaceholder.typicode.com/todos')
    .pipe(map((t) => t.slice(0, 10)));

  constructor(private http: HttpClient) {}

  ngOnInit() {}
}
