import { Injectable } from '@angular/core';
import { Developer } from './developer';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {
  
  private baseUrl: string = 'https://dev-bios-api-dot-cog01hprmn542jqme4w772bk1dxpr.uc.r.appspot.com/developers/';

  devs: Developer[] = [];

  postHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  })

  // constructor() {
  //   this.devs = [new Developer(1, 'Apoorv', 'Chauhan', 'Python', 2022), 
  //     new Developer(2, 'Blah', 'Vlah', 'C', 1970),
  //   ]
  // }

  constructor(private httpClient: HttpClient) {}

  // getAllDevelopers(): Developer[] {
  //   return this.devs;
  // }

  getAllDevelopers(): Observable<Developer[]> {
    return this.httpClient.get<Developer[]>(this.baseUrl+'all').pipe(
      map(response => this.devs = response)
    );
  }

  addDeveloper(developer: Developer): boolean {
    this.httpClient.post<Developer>(this.baseUrl+'add', developer, {headers: this.postHeaders}).pipe(
      tap((newDev: Developer) => {
        this.devs.push(newDev);
      })
    ).subscribe();
    return true;
  }

  getDeveloperById(id: string): Developer | undefined {
    return this.devs.find(dev => dev.id === id);
  }
}
