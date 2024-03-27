import { Component } from '@angular/core';

@Component({
  selector: 'app-section5',
  templateUrl: './section5.component.html',
  styleUrls: ['./section5.component.css']
})
export class Section5Component {

  imgSrc: string = '../../assets/11.jpg';

  sliades = [
    { span: 'Update', prag: 'Apolian Spotlight: Ashley Kalila Meijer'},
    { span: 'Update', prag: 'Simplifying Wedding Planning with Process Mining: Real-Life Case'},
    { span: 'Update', prag: 'Celonis Payment Term Checker'},
  ]
}
