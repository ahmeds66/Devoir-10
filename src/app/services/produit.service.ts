import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  apiurl = "http://localhost:8080/produits";
  produits : Produit[]; //un tableau de produits
  produitsRecherche!: Produit[];
  produit!: Produit;
  categories :any;
  constructor() { 
    this.categories = [
      {idCat: 1, nomCat: 'Ordinateur'},
      {idCat: 2, nomCat: 'Imprimante'},
      {idCat: 3, nomCat: 'Tablette'}];

    this.produits = [{idProduit : 1, nomProduit : "PC Asus", prixProduit : 3000.600, dateCreation : new Date("01/14/2011"), categorie : this.categories[0]},
                     {idProduit : 2, nomProduit : "Imprimante Epson", prixProduit : 450, dateCreation : new Date("12/17/2010"), categorie : this.categories[1]},
                     {idProduit : 3, nomProduit :"Tablette Samsung", prixProduit : 900.123, dateCreation : new Date("02/20/2020"), categorie : this.categories[2]},
                    ];
    
  }

  listeProduits():Produit[] {
    return this.produits;
  }
  listeCategories(): Categorie[] {
    return this.categories;
  }

  ajouterProduit( prod: Produit){
      this.produits.push(prod);
    }
  supprimerProduit( prod: Produit){ 
        //supprimer le produit prod du tableau produits 
        const index = this.produits.indexOf(prod, 0);
        if (index > -1) { this.produits.splice(index, 1); }
  }
 
  consulterProduit(id: number): Produit {
    this.produit= this.produits.find(p => p.idProduit == id)!;
    return this.produit;
  }

  consulterCategorie(id:number): Categorie{ 
    return this.categories.find((cat: { idCat: number; })=> cat.idCat == id)!; 
  }
  trierProduits() {
    this.produits = this.produits.sort((n1,n2) => {
      if (n1.idProduit! > n2.idProduit!) {
        return 1;
      }
      if (n1.idProduit! < n2.idProduit!) {
        return -1;
      }
      return 0;
    });
  }
  
  updateProduit(p: Produit) {
    this.supprimerProduit(p);
    this.ajouterProduit(p);
    this.trierProduits();
  }
  rechercherParCategorie(idCat: number): Produit[]{
    this.produitsRecherche = [];
   
    this.produits.forEach((cur, index) => {
     if(idCat == cur.categorie.idCat) {
         console.log("cur "+cur);
        this.produitsRecherche.push(cur);
         }
   });
   return this.produitsRecherche;
   }
   rechercherParNom(nom: String): Produit[]{
    this.produitsRecherche = [];

    this.produits.forEach((cur, index) => {
     if(nom == cur.nomProduit) {
         console.log("cur "+cur);
        this.produitsRecherche.push(cur);
         }
   });
   return this.produitsRecherche;
   }
}
