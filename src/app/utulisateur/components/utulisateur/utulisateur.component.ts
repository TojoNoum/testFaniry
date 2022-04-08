import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-utulisateur',
  templateUrl: './utulisateur.component.html',
  styleUrls: ['./utulisateur.component.scss']
})
export class UtulisateurComponent implements OnInit {

  users!: User[];

  constructor(private globaleService: GlobalServiceService) { }

  ngOnInit(): void {
    this.users = this.globaleService.getUsers();
  }

  

}
