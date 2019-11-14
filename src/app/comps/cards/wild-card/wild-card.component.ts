import { Component, OnInit } from '@angular/core';

import { WildsService } from '../../../services/wilds.service';

@Component({
  selector: 'app-wild-card',
  templateUrl: './wild-card.component.html',
  styleUrls: ['./wild-card.component.css']
})
export class WildCardComponent implements OnInit {

  constructor(public wildSvc:WildsService) { }

  ngOnInit() {
  }

}
