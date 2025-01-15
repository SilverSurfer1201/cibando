import { Component } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { Recipe } from '../../models/recipes.model';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  evidenziato = false;
  ricette: Recipe[] = [];

  constructor(private recipesService: RecipesService){
    this.recipesService.getRecipes().subscribe({
      next: (res) => {
        this.ricette = res.sort((a,b) => b._id - a._id).slice(0,4);
      },
      error: (e) => console.error(e)
    })
  }

  onEvidenziazione(){
    this.evidenziato = !this.evidenziato;
  }

}
