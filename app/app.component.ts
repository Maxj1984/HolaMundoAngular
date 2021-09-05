import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoConAngular';
  title2 = 'Prueba con String Interpolation';
  title3 = 'funcion en String Interpolation';
  getTitulo(){
    return this.title3;
  }

  urlimg='https://th.bing.com/th/id/OIP.wUV-QqfzXA1NMKoVdneLVgAAAA?pid=ImgDet&rs=1';
  
  texto='prueba de property binding';
  
  color='blue';

  numero=0;
  numero1=0;
  numero2=0;
  numero3=0;
  
  incrementar(){
    this.numero++;
  }

  decrementar(){
    this.numero--;
  }

  suma():number{
    return this.numero2 + this.numero3;
  }

}
