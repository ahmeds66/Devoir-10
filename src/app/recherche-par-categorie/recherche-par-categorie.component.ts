import { ProduitService } from './../services/produit.service';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';
@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styles: [
  ]
})
export class RechercheParCategorieComponent implements OnInit {
  produits!: Produit[];
  categories! : Categorie[];
  IdCategorie!: number;
  constructor(private produitService :ProduitService ) { }

  ngOnInit(): void {
    this.produits = this.produitService.listeProduits();
    this.categories = this.produitService.listeCategories();
  }
  onChange() {
    // console.log(this.IdCategorie);
     this.produits =  this.produitService.rechercherParCategorie(this.IdCategorie);
     console.log(this.produits);
     
     }
  supprimerProduit(p: Produit) {
    //console.log(p);
      let conf = confirm("Etes-vous sûr ?");
      if (conf) 
       this.produitService.supprimerProduit(p); 
  }
}
