import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RestService as RestService } from '../core/rest-service/rest-service.service';
import { timer } from 'rxjs';

export interface ITodos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @Input() customer: string;
  @Input() count: number;

  time$ = timer(0, 1000).pipe(map(() => new Date()));

  todos$ = this.restService
    .get<ITodos[]>('https://jsonplaceholder.typicode.com/todos')
    .pipe(map((t) => t.slice(0, 10)));

  constructor(private restService: RestService) {}

  ngOnInit() {}
}
