import { Component } from '@angular/core';
import { PagingService } from './services/paging.service';
import { BirdService } from './services/birds.service';
import { BeastsService } from './services/beasts.service';
import { WildsService } from './services/wilds.service';
// import { getUnpackedSettings } from 'http2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Avra-Zoo';



  constructor(public paging:PagingService, public birds: BirdService, public beasts:BeastsService,public wilds:WildsService){}


getUp(ev){
  console.log('AppComponent  getUp', ev);

  switch (this.paging.currentPanel) {
    case 'birds':
        let newBirdIndex = this.getNewCurrentIndex(
          this.birds.currentBirdIndex, ev, this.birds.birds)
        this.birds.currentBirdIndex = newBirdIndex
        this.birds.currentBird = this.birds.birds[newBirdIndex]
      break;
    case 'beasts':
        let newBeastIndex = this.getNewCurrentIndex(
          this.beasts.currentBeastIndex, ev, this.beasts.beasts)
        this.beasts.currentBeastIndex = newBeastIndex
        this.beasts.currentBeast = this.beasts.beasts[newBeastIndex]
      break;
    case 'wilds':
    let newWildIndex = this.getNewCurrentIndex(
      this.wilds.currentWildsIndex, ev, this.wilds.wilds)
      this.wilds.currentWildsIndex = newWildIndex
      this.wilds.currentWild = this.wilds.wilds[newWildIndex]
    
      break;
        
    default:
      break;
  }

}

private getNewCurrentIndex(current:number, delta:number, array:{}[]) : number{
  let max = array.length -1;
  let newIndex = current + delta
  if (newIndex > max) {
    newIndex = 0
  }    
  if (newIndex < 0) {
    newIndex = max
  }
  return newIndex
}

}