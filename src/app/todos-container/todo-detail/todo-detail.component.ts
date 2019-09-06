import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/core/rest-service/rest-service.service';
import { ITodo } from 'src/app/dashboard/dashboard.component';
import { ActivatedRoute, Router } from '@angular/router';
import { map, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss'],
})
export class TodoDetailComponent implements OnInit {
  todo$;
  constructor(
    private restService: RestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.todo$ = this.route.paramMap.pipe(
      map((paramMap) => paramMap.get('id')),
      filter((id) => !!id),
      switchMap((id) =>
        this.restService.get<ITodo>(`https://jsonplaceholder.typicode.com/todos/${id}`)
      )
    );
  }

  returnToSummary() {
    this.router.navigate(['/todos']);
  }
}
