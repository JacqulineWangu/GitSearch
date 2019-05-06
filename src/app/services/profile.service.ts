import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {

  private username: string;
  private clientid = "";
  private clientsecret = "";

  constructor(private http: HttpClient) {
    console.log("service is now ready!");
    this.username = 'JacqulineWangu';
  }

  getProfileInfo() {
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id." + this.clientid + "&client_secret=" + this.clientsecret)
    .map(res => res.json());
  }

  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id." + this.clientid + "&client_secret=" + this.clientsecret)
    .map(res => res.json());
  }
}
