import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user-service/user-service.service';

@Component({
  selector: 'app-admin-summary',
  templateUrl: './admin-summary.component.html',
  styleUrls: ['./admin-summary.component.scss'],
})
export class AdminSummaryComponent implements OnInit {
  name = this.userService.getName('Kevin');

  constructor(private userService: UserService) {}

  ngOnInit() {}
}
