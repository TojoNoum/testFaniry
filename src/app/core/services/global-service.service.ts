import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Import } from 'src/app/models/import';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {

  constructor(private http: HttpClient) {}

  getImport(){
    return this.http.get<Import>('https://randomuser.me/api/1.2/?seed=fanirye&nat=france&results=500');
  }
}
