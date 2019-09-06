import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/core/rest-service/rest-service.service';
import { ITodo } from 'src/app/dashboard/dashboard.component';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-todo-summary',
  templateUrl: './todo-summary.component.html',
  styleUrls: ['./todo-summary.component.scss'],
})
export class TodoSummaryComponent implements OnInit {
  todos$ = this.restService
    .get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
    .pipe(map((t) => t.slice(0, 5)));

  constructor(private restService: RestService) {}

  ngOnInit() {}
}
