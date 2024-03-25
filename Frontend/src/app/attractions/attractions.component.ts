// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-attractions',
//   standalone: true,
//   imports: [],
//   templateUrl: './attractions.component.html',
//   styleUrl: './attractions.component.css'
// })
// export class AttractionsComponent {

// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.css']
})
export class AttractionsComponent {
  attractions = [
    { name: 'Christ the Redeemer', image: '/assets/Images/christ.jpg' },
    { name: 'Escadaria Selarón', image:'/assets/Images/christ.jpg' },
    { name: 'Maracanã', image: '/assets/Images/christ.jpg' },
    { name: 'Museu do Amanhã', image: '/assets/Images/christ.jpg' },
    { name: 'Parque Lage', image: '/assets/Images/christ.jpg' },
    { name: 'Copacabana Fort', image: '/assets/Images/christ.jpg' },
    { name: 'AquaRio', image: '/assets/Images/christ.jpg' },
    { name: 'Catedral Metropolitana', image: '/assets/Images/christ.jpg' },
  ];
}
