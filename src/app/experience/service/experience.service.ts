import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

/*------------------ Experience Interface ------------------*/
import { Experiences } from '../interface/experiences';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private apiURL= 'http://localhost:3000/exp'

  constructor(private http: HttpClient) { }


  //  getById(id: Number): Observable<Experiences> {
  //    return this.http.get<Experiences>(this.apiURL + `datail/${id}`)
  //  }

    getExp(): Observable<Experiences> {
      return this.http.get<Experiences>(this.apiURL)
    }

  /*------------------ Summit Experiences form to DB --------------------*/
  addExp(exp: Experiences): Observable<Experiences> {
    return this.http.post<Experiences>(this.apiURL, exp, httpOptions)
  }



  

}
