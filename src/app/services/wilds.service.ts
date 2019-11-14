import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Animals } from '../models/Animals';

@Injectable({
  providedIn: 'root'
})
export class WildsService {

  constructor(private http:HttpClient) { 
    console.log('ctor WildsService');
    let u = 'https://raw.githubusercontent.com/bresleveloper/breslev-zoo/master/src/assets/beasts.json';
    http.get(u)
      .subscribe(data => {
        console.log('ctgetor Wilds inside subscribe');
        this.wilds = data as Animals[]
        this.currentWild = this.wilds[0]
      })
    console.log('ctor WildsService end');

  }

  wilds:Animals[] = []

  currentWildsIndex = 0
  currentWild:Animals

    
  }
  