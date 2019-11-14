import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Animals } from '../models/Animals';

@Injectable({
  providedIn: 'root'
})
export class BirdService {

  constructor(private http:HttpClient) { 
    console.log('ctor BirdsService');
    let u = 'https://raw.githubusercontent.com/daffriedman/ZooWithJson/master/src/assets/birds.json';
    http.get(u)
      .subscribe(data => {
        console.log('ctgetor Birds inside subscribe');
        this.birds = data as Animals[]
        this.currentBird = this.birds[0]
      })
    console.log('ctor BirdsService end');

  }

  birds:Animals[] = []

  currentBirdIndex = 0
  currentBird:Animals

    
  }
  

