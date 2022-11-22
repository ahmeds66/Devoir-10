import { Categorie } from './../model/categorie.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../model/produit.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styles: [
  ]
})
export class UpdateProduitComponent implements OnInit {
  currentProduit: Produit = new Produit();
  categories!: Categorie[];
  updatedCatId!: number;
  constructor(private activatedRoute: ActivatedRoute,
              private produitservise: ProduitService,
              private router: Router) { }

  ngOnInit(): void {
    //console.log(this.route.snapshot.params.id);
    this.categories=this.produitservise.listeCategories();
    this.currentProduit = this.produitservise.consulterProduit(this.activatedRoute.snapshot.params['id']);
    this.updatedCatId = this.currentProduit.categorie.idCat;
    //console.log(this.currentProduit);
  }
  updateProduit()
  { //console.log(this.currentProduit);
  this.currentProduit.categorie = this.produitservise.consulterCategorie(this.updatedCatId);
  this.produitservise.updateProduit(this.currentProduit);
  this.router.navigate(['produits']);
  }
}
