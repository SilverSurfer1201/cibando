import { Component, ViewChild, ElementRef, viewChild } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { Recipe } from '../../models/recipes.model';
import { UserService } from '../../services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @ViewChild('modaleRegistrazione') modale: ElementRef;

  evidenziato = false;
  ricette: Recipe[] = [];
  datiRegistrazione = {};

  constructor(
    private recipesService: RecipesService,
    private userService: UserService,
    private modalService: NgbModal){

    this.recipesService.getRecipes().subscribe({
      next: (res) => {
        this.ricette = res.sort((a,b) => b._id - a._id).slice(0,4);
      },
      error: (e) => console.error(e)
    });

    this.userService.datiUtente.subscribe
    (res => this.datiRegistrazione = res);
    this.openModal(this.modale);


  }

  onEvidenziazione(){
    this.evidenziato = !this.evidenziato;
  }

  openModal(content:any){  //posso mettere anche un id?:string o number, per conferma dell update o delete
    this.modalService.open(content, {centered: true, size: 'lg'}).result.then(
      (res) => {
        console.log('azione da eseguire' + res);
      }
    )
    .catch((error)=> console.log('nessuna azione da eseguire'));

  }

}

/*
openModal(content: any, id?: number, nome?: string){
    this.idModale = id;
    this.nomeModale = nome;
    this.modalService.open(content, {centered: true, ariaLabelledBy: 'modale di benvenuto', size: 'lg'}).result
      .then((result) => {
        console.log('azione da eseguire' + result);
        this.userService.datiUtente.next(null);
      })
        .catch((error) => {
          console.log('nessuna azione da eseguire');
          this.userService.datiUtente.next(null);
        })
  }
*/


/*
Utilizzare localStorage per immagazzinare i dati dell'utente, accetta solo stringhe quindi usiamo stringify
  ngAfterViewInit(): void {
    this.userService.datiUtente.subscribe( response => {
      console.log(response);
      localStorage.setItem('datiRegistrazione', JSON.stringify(response));
    });
    // Utilizzare localStorage per recuperare i dati dell'utente
    if(localStorage.getItem('datiRegistrazione')){
      this.datiRegistrazione = JSON.parse(localStorage.getItem('datiRegistrazione'));
      // Ripuliamo localStorage dei dati dell'utente
      localStorage.removeItem('datiRegistrazione');
    }
  }
*/
