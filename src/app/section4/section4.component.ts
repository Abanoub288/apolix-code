import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.css']
})
export class Section4Component {

  title = 'mouse-hover';
  showImage: boolean;
  // arrowImage = "../../assets/11.jpg";

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const x = event.clientX;
    const y = event.clientY;
    this.moveArrow(x, y);
  }

  moveArrow(x: number, y: number) {
    const arrow = document.querySelector('.mouse-pointer') as HTMLImageElement;
    arrow.style.left = x + 'px';
    arrow.style.top = y + 'px';
  }
  // @ViewChild(myImg) picImg : ElementRef;

  constructor () {
    this.showImage = false;
  }

  showpic (show: boolean) {

    this.showImage = show;
  }




}
