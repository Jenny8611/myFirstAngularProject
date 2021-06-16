import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrayImg = [ '10-367x267.jpg','1000-367x267.jpg','1003-367x267.jpg','1004-367x267.jpg','1019-367x267.jpg']
  jsonImg = [
    {
      title:'10',
      url: '10-367x267.jpg',
      author: 'Jack',
    },
    {
      title:'1000',
      url: '1000-367x267.jpg',
      author: 'Jean',
    },
    {
      title:'1003',
      url: '1003-367x267.jpg',
      author: 'Michel',
    },
    {
      title:'1004',
      url: '1004-367x267.jpg',
      author: 'George',
    },
    {
      title:'1019',
      url: '1019-367x267.jpg',
      author: 'Luna',
    },
    {
      title:'10',
      url: '10-367x267.jpg',
      author: 'Jack',
    },
  ];

  randomIndex= Math.round(Math.random()*this.arrayImg.length)
  sourceImg = this.arrayImg[this.randomIndex];

  console(str:string){
    console.log(str);
  }

  changeRandom(){
    this.randomIndex= Math.floor(Math.random()*this.arrayImg.length);
    this.console('randomIndex' + this.randomIndex);
  }

valColor = 'red';

textPrimary = false
displayParagraph = true

displaySwitch = 1;

incSwitch(){
  this.displaySwitch++;
  this.displaySwitch=this.displaySwitch>3 ? 1 : this.displaySwitch;
  // if (this.this.displaySwitch>3) { this.displaySwitch=1 } else { this.displaySwitch = this.displaySwitch }
}




  constructor() { }

  ngOnInit(): void {
    console.log('randomIndex',this.randomIndex);
    console.log('sourceImg',this.sourceImg);
    console.log('jsonImgRandomTitle',this.jsonImg[this.randomIndex].title)
  }

}
