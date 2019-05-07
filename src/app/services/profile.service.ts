import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Repository } from '../repository';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  constructor(private http: HttpClient) {
    console.log('service is now ready!');
    this.username = 'JacqulineWangu';
  }

  getProfileInfo(): Observable<Repository> {
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://api.github.com/users/' + this.username + '?access_token=' + environment.token_key);
  }

  getProfileRepos(): Observable<Repository> {
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?access_token=' + environment.token_key);
  }

  updateProfile(username: string) {
    this.username = username;
  }

}
