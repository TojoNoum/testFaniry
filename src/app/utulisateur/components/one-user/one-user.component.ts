import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-one-user',
  templateUrl: './one-user.component.html',
  styleUrls: ['./one-user.component.scss']
})
export class OneUserComponent implements OnInit {

  @Input() user!: any;
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.user);
  }

}
