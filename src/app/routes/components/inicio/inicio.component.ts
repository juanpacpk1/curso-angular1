import { Component } from '@angular/core';
import { MovieSerie } from 'src/app/shared/interfaces/movieSerie.interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})


export class InicioComponent {

  movies_series : MovieSerie[] = [
    {
      id: 1,
      name: 'Ant-Man y la Avispa: Quantumanía',
      description: 'La pareja de superhéroes Scott Lang y Hope van Dyne regresa para continuar sus aventuras como Ant-Man y la Avispa. Los dos, junto a los padres de Hope, Hank Pym y Janet van Dyne y la hija de Scott, Cassie Lang, se dedican a explorar el Mundo Cuántico, interactuando con nuevas y extrañas criaturas y embarcándose en una aventura que les llevará más allá de los límites de lo que creían posible.',
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jTNYlTEijZ6c8Mn4gvINOeB2HWM.jpg',
      rating: 0,
      category: 'Pelis'
    },
    {
      id: 2,
      name: 'The Walking Dead',
      description: '"The Walking Dead" está ambientada en un futuro apocalíptico con la Tierra devastada por el efecto de un cataclismo, que ha provocado la mutación en zombies de la mayor parte de los habitantes del planeta',
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hUblG1KZCTRpHc3wqqoU0DW98Q3.jpg',
      rating: 0,
      category: 'Series'
    },
    {
      id: 3,
      name: 'Infinity Pool',
      description: 'Mientras se hospedan en un resort aislado en una isla, James y Em disfrutan de unas vacaciones perfectas en playas vírgenes, un personal excepcional y tomando el sol. Pero guiados por la seductora y misteriosa Gabi, se aventuran fuera de los terrenos del resort y se encuentran en una cultura llena de violencia, hedonismo y horror indescriptible',
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5DNRr2juXdwtvktwXxwuk9Usk8O.jpg',
      rating: 0,
      category: 'Pelis'
    },
  ]

  selected: string = 'Todos';

  paraBuscar: string = '';
  
  cambiarCategoria(value: string){
    this.selected = value;
  }

  buscar(value: string) {
    console.log(this.paraBuscar);
  }



}
