import { Component,Input } from '@angular/core';
import { Recipe } from '../../../models/recipes.model';

@Component({
  selector: 'app-recipe-card',
  standalone: false,

  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss'
})
export class RecipeCardComponent {
 @Input() recipes : Recipe[] | undefined

}

//classe figlio questa, dove creo una variabile che contiene un array di ricette.
//abbiamo fatto una variabile di tipo input che e fatta apposta per ircevere dati da qualcun altro,
//ora il padre può vedere la variabile
