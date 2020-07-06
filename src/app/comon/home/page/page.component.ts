import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/class/product';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  Products :Product[] =[]
  itme :any
  cunnt:number=1
  constructor() { }

  ngOnInit(): void {
    for (let index = 0; index < 100; index++) {
    this.someFun('toy'+index,100-index,"https://github.com/ChaimBaror/ajax/blob/master/db/img/img_forest.jpg?raw=true")
  }
}
  // this.itme.name='toy';
  // this.itme.amount=100;
  // this.itme.img="";

  someFun(name,amount,img){
    this.itme=new Product()
    this.itme.id=++this.cunnt;
    this.itme.name=name;
    this.itme.amount=amount;
    this.itme.img=img;
    this.Products.push(this.itme)
  }

  onEdit(){

  }
  show = true

  isShow() {
    console.log(this.show);
    this.show = !this.show
    

}


}
