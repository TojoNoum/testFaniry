import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {

  user = [
    {
      name: "faniry",
      firstName: "lebe",
      telephone: "0345786509"
    },
    {
      name: "sedy",
      firstName: "kely",
      telephone: "0345779009"
    },
    {
      name: "hoby",
      firstName: "antony",
      telephone: "034549509"
    }
  ]

  getUsers(){
    return this.user;
  }
}
