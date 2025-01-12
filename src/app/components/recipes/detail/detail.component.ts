import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../../../services/recipes.service';
import { Recipe } from '../../../models/recipes.model';

@Component({
  selector: 'app-detail',
  standalone: false,

  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  private recipesService = inject(RecipesService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  ricetta: Recipe | undefined;

  ngOnInit():void {
    this.onGetDetail();
  }

  onGetDetail(){
    const id = Number(this.activatedRoute.snapshot.paramMap.get('_id'));

    this.recipesService.getDetail(id).subscribe({
      next: res => {
        this.ricetta = res;
      },
      error: e => console.log(e)
    })
  }

}
