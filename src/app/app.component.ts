import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cibando';


  allievi = ['Davide','Francesco','Maria Sole','Gioele'];
  allieviCompleta = [
    {id:1, nome: 'Davide', cognome: 'Rossi'},
    {id:2, nome: 'Giuseppe', cognome: 'Gialli'},
  ]


}
