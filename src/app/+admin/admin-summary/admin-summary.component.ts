import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user-service/user-service.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-summary',
  templateUrl: './admin-summary.component.html',
  styleUrls: ['./admin-summary.component.scss'],
})
export class AdminSummaryComponent implements OnInit {
  name = this.userService.getName('Kevin');
  users$ = this.userService.users$;

  constructor(private userService: UserService) {}

  ngOnInit() {}
}
