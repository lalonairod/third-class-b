import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

enum PAISES{
  'MEXICO',
  'JAPON',
  'RUSIA'
}

@Component({
  selector: 'app-primero',
  templateUrl: './primero.component.html',
  styleUrls: ['./primero.component.scss']
})
export class PrimeroComponent implements OnInit {

  @ViewChild('texto',{static:true}) titulo !: ElementRef; 

  public PAISES = PAISES;

  public flag : boolean = true;
  public paises : any[] = [{
    id: "1",
    nombre:"Mexico"
  },
  {
    id: "2",
    nombre:"EUA"
  },
  {
    id: "3",
    nombre:"Canada"
  }];

  public platillos : any[] = [
  {
    platillo : 'Tacos',
    pais : PAISES.MEXICO
  },
  {
    platillo : 'Enchiladas',
    pais : PAISES.MEXICO
  },
  {
    platillo : 'Ramen',
    pais : PAISES.JAPON
  },
  {
    platillo : 'Sushi',
    pais : PAISES.JAPON
  },
  {
    platillo : 'Vodka',
    pais : PAISES.RUSIA
  }];

  constructor( private render2 : Renderer2) { }

  ngOnInit(): void {
    this.getButton();
    console.log(this.titulo);
    this.render2.setAttribute(this.titulo.nativeElement, 'id', 'Kuma');
    this.render2.setStyle(this.titulo.nativeElement, 'color', 'red');
  }

  getButton(){
    let button = document.getElementById("btn")

    button?.addEventListener("click", () => {
      this.flag=!this.flag;
    })
  }

}
