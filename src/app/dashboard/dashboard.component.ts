import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RestServiceService as RestService } from '../core/rest-service/rest-service.service';

interface Todos {
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

  todos$ = this.restService
    .get<Todos[]>('https://jsonplaceholder.typicode.com/todos')
    .pipe(map((t) => t.slice(0, 10)));

  constructor(private restService: RestService) {}

  ngOnInit() {}
}
