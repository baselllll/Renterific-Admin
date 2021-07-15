import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/service/auth.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  constructor(private myuserservice:AuthService) { }

  ngOnInit(): void {
  }
  getAllUser(){
    
  }
}
