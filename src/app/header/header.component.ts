import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  images = [
    { id: 1, path: '../../assets/apolix.png' },
    { id: 2, path: '../../assets/apolix2.jpg' },
    { id: 3, path: '../../assets/apolix.png' },
    { id: 4, path: '../../assets/apolix2.jpg' },
    { id: 5, path: '../../assets/apolix.png' },
    { id: 6, path: '../../assets/apolix2.jpg' },
  ];

  carouselOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: false,
    items: 4,
    dots: true,
    nav: false,
    navText: ['<', '>']
  };

}

