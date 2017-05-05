import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-body',
  templateUrl: 'body.component.html',
})
export class BodyComponent {
  mostrar:boolean = true
  texto:string = "Holis bebes"
  autor:string = "Milton Lenis"
  talentos:string[] = ["Bailar", "Los chistes", "Programar", "Jugar"]
}
