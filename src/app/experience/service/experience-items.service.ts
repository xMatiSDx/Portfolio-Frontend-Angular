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
export class ExperienceItemsService {

  private apiURL= 'http://localhost:3000/exp'

  constructor(private http: HttpClient) { }


/*------------------ Get Experiences from DB --------------------*/
  getExp(): Observable<Experiences[]> {
    return this.http.get<Experiences[]>(this.apiURL)
  }

}
