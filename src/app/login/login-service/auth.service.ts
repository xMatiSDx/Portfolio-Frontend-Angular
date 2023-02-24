import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:3000/user';
  token: any;

  constructor(private http: HttpClient, private router: Router) { }

  login(email: any, password: any) {
    this.http.post(this.url, {email: email, password: password})
    .subscribe((resp: any) => {
      window.location.reload
      localStorage.setItem('auth_token', resp.token);
    });
  };

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['home'])
  }

  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }

}
