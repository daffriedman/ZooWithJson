import { Component, OnInit } from '@angular/core';
import { WildsService } from '../../../services/wilds.service';

@Component({
  selector: 'app-wilds-panel',
  templateUrl: './wilds-panel.component.html',
  styleUrls: ['./wilds-panel.component.css']
})
export class WildsPanelComponent implements OnInit {

  constructor(public wildSvc:WildsService ) {
    console.log('in the wilds panel constructor');
    
   }

  ngOnInit() {
  }

}
