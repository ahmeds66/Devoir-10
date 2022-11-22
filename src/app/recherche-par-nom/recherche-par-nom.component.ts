import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: [
  ]
})
export class RechercheParNomComponent implements OnInit {
  allProducts : any;
  produits!: Produit[];
  searchTerm!: string; 
  produitService: any;
  constructor() { }

  ngOnInit(): void {
    this.produitService.listeProduits().subscribe((prods: any) => {
      this.allProducts = prods;
    });
  }
  onKeyUp(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.produits = this.produitService.rechercherParNom(searchTerm);
  }
  supprimerProduit(p: Produit) {
    //console.log(p);
      let conf = confirm("Etes-vous sûr ?");
      if (conf) 
       this.produitService.supprimerProduit(p); 
  }
}
