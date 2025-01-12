import { Injectable } from '@angular/core';
import { RECIPES } from '../mocks/recipes.mock';
import { Observable, of } from 'rxjs'; //of solo con dati mockati
import { Recipe } from '../models/recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor() { }
//doppia tipizzazione (con i : si identifica il tipo di ritorno del metodo,
// con <> si da una sorta di generics per dire il tipo di oggetto che il metodo prende
// (cioè le ricette))perche le ricette prendono solo oggetti Recipes,
// ma solo negli observable ci si puo iscrivere
  getRecipes():Observable<Recipe[]> {
    return of (RECIPES)
  }

  getDetail(id:number): Observable<Recipe|undefined>{
    const recipe = RECIPES.find(ricetta=>ricetta._id===id);
    return of(recipe);
  }

}
