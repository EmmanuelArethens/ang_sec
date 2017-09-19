import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  bool = true;

  methode(){
    this.title = 'Dofff'
  };

  afficher(){
    if(this.bool==true){
      this.bool=false;
    }
    else if(this.bool==false){
      this.bool=true;
    }
  }
}
