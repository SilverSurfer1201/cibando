import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../../../services/recipes.service';
import { Recipe } from '../../../models/recipes.model';

@Component({
  selector: 'app-detail',
  standalone: false,

  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {
  private recipeService = inject(RecipesService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  ricetta: Recipe | undefined;

  percorsoStelline = "../../../../assets/images/difficolta-";

  ngOnInit(): void {
    this.onGetDetail();
  }

  onGetDetail() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get("_id"));  //per prendere i parametri dall'url (1 parametro)

    if(id) {
      this.recipeService.getDetail(id).subscribe({
        next: res => {
          this.ricetta = res;
        },
        error: e => console.log(e)
      })
    }
  }

  onGetDetail2(): void {
    this.activatedRoute.params.subscribe((urlParams) => { //per prendere i parametri dall'url (più parametri); essendo un observable
                                                          //rimane sempre in ascolto per intercettare i parametri che sto cercando
      const id = urlParams['_id'];
      const idNumerico = Number(id);

      if(idNumerico) {
        this.recipeService.getDetail(idNumerico).subscribe(res => this.ricetta = res);
      }

      //const title = urlParams['title']
    })
  }
}

