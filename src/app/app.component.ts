import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Propriété "title qui ressemble à une variable"
  title = "This is my title from TypeScript";

  nb=0;

  // Méthode alert() qui ressemble à une fonction
  alert(){
    // On peut déclarer des constantes et des variables
    //dans les méthodes
    const message = "This is a message";
    /*alert(message);*/
    
    //On peit utiliser tous les outils de javascript dans
    // les méthodes
    console.log(message);

    this.nb++; /* this.nb=this.nb + 1; */
    console.log("You have clicked :",this.nb + " times");

  }

}
