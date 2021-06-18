import { Component, OnInit } from '@angular/core';

@Component(
  {
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
}
)
export class ContactComponent implements OnInit {

  firstname='';
  lastname='';
  email='';
  message='';


  constructor() { }

onSubmit(formData:any) {

  /* let validation = false; */
  let score = 0;
  let max = 4;
  let errorMessage = '';

  // valider la longueur de firstname
  formData.firstname.length > 2 ? score++ : errorMessage+= 'Firstname must be longer than 2 car\n';
  console.log('Score:', score);

  // valider la longueur de lastname
  formData.lastname.length > 2 ? score++ : errorMessage+= 'Firstname must be longer than 2 car\n';
  console.log('Score:', score);

  // controle la présence de @ dans l'email rentré
  formData.email.indexOf('@') > 1 ? score++ : errorMessage+= 'Email must contain an "@"\n';
  console.log( 'Score:', score);

  /* // controle la présence d'un point (.) dans l'email rentré après le @
  formData.email.indexOf('.') > formData.email.indexOf('@') + 2 ? score++ : errorMessage+= 'Email must contain a "." after "@"\n';
  console.log( 'Score:', score);*/
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+:\.[a-zA-Z0-9-]/.test(formData.email)) {
    score++;
  } else {
    errorMessage += 'Email must be valid\n';
  }

  // controle la présence d'un point (.) dans l'email au moins 3 caractère avant la fin de la chaine
  formData.email.indexOf('.') < formData.email.length - 2 ? score++ : errorMessage+= 'Email must contain a valid domain name\n';
  console.log( 'Score:', score);


  let validation = score == max ? true : null;

  if (validation) {
    console.log('Sending Data', formData);
  } 
  else {
    alert( 'Error validating your form !\n' + errorMessage);
  }

}


  ngOnInit(): void {
  }

}
