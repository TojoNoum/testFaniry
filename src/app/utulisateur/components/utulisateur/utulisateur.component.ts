import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { GlobalServiceService } from 'src/app/core/services/global-service.service';
import { filter, map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-utulisateur',
  templateUrl: './utulisateur.component.html',
  styleUrls: ['./utulisateur.component.scss']
})
export class UtulisateurComponent implements OnInit {

   users!: Observable<any>;

  constructor(private globaleService: GlobalServiceService) { }

  ngOnInit(): void {
    // this.users = this.globaleService.getUsers();

    this.users = this.globaleService.getImport().pipe(
       map(user =>{
         const users = user.results;
         return users;
       }),
       tap((results:any) => console.log(results[0]))
     );
   
    
  }

  

}
