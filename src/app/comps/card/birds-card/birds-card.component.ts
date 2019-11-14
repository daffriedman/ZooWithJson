import { Component, OnInit } from '@angular/core';
import { BirdsService } from '../../../services/birds.service';

@Component({
  selector: 'app-birds-card',
  templateUrl: './birds-card.component.html',
  styleUrls: ['./birds-card.component.css']
})
export class BirdsCardComponent implements OnInit {

  constructor(public birdsSvc:BirdsService) {
    console.log("in the birdscard constructor "); }

  ngOnInit() {
  }

}
