import { Component } from '@angular/core'

@Component({
  selector: 'app-template',
  templateUrl: 'template.component.html'
})

export class TemplateComponent {
  title = 'app';
  inputShown: boolean = false;
  bool = true;
  
  personne = {
    nom: '',
    prenom: '',
    age: 0,
    chien: {}
  };

  afficherpersonne() {
    console.log(this.personne);
  };

  methode() {
    this.title = 'Dofff'
  };

  afficher() {
    if (this.bool == true) {
      this.bool = false;
    }
    else if (this.bool == false) {
      this.bool = true;
    }
  }

}