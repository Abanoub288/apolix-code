import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.css']
})
export class Section3Component {

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      700: {
        items: 3.1
      },
    },
    nav: true
  }

  slides = [
    { id: 1, title: 'Customer success stories', prag: 'Find inspiration in our customer succes stories. We have extensive process and industry knowledge.' },
    { id: 2, title: 'Customer success stories', prag: 'Find inspiration in our customer succes stories. We have extensive process and industry knowledge.' },
    { id: 3, title: 'Customer success stories', prag: 'Find inspiration in our customer succes stories. We have extensive process and industry knowledge.' },
    { id: 4, title: 'Customer success stories', prag: 'Find inspiration in our customer succes stories. We have extensive process and industry knowledge.' },
    { id: 5, title: 'Customer success stories', prag: 'Find inspiration in our customer succes stories. We have extensive process and industry knowledge.' },
  ]
}


