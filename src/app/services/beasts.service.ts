import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Animals } from '../models/Animals';

@Injectable({
  providedIn: 'root'
})
export class BeastsService {

  constructor(private http:HttpClient) { 
    console.log('ctor BeastsService');
    let u = 'https://raw.githubusercontent.com/daffriedman/ZooWithJson/master/src/assets/beasts.json';
    http.get(u)
      .subscribe(data => {
        console.log('ctgetor Beasts inside subscribe');
        this.beasts = data as Animals[]
        this.currentBeast = this.beasts[0]
      })
    console.log('ctor BeastsService end');

  }

  beasts:Animals[] = []

  currentBeastIndex = 0
  currentBeast:Animals

    
  }
  

