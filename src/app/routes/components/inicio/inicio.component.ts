import { Component } from '@angular/core';
import { movieSerie } from 'src/app/shared/interfaces/movieSerie.interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})


export class InicioComponent {

  movies_series: movieSerie[] = [
    {
      id: 1,
      name: 'Ant-Man y la Avispa: Quantumanía',
      description: 'La pareja de superhéroes Scott Lang y Hope van Dyne regresa para continuar sus aventuras como Ant-Man y la Avispa. Los dos, junto a los padres de Hope, Hank Pym y Janet van Dyne y la hija de Scott, Cassie Lang, se dedican a explorar el Mundo Cuántico, interactuando con nuevas y extrañas criaturas y embarcándose en una aventura que les llevará más allá de los límites de lo que creían posible.',
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jTNYlTEijZ6c8Mn4gvINOeB2HWM.jpg',
      rating: 0,
      category: 'movie'
    },
    {
      id: 2,
      name: 'Titanic',
      description: 'Durante las labores de recuperación de los restos del famoso Titanic, una anciana norteamericana se pone en contacto con la expedición para acudir a una plataforma flotante instalada en el Mar del Norte y asistir "in situ" a la recuperación de sus recuerdos',
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rBTJZrf5UWaxzg5YJd2eqpeaSvm.jpg',
      rating: 0,
      category: 'serie'
    },
    {
      id: 3,
      name: 'Infinity Pool',
      description: 'Mientras se hospedan en un resort aislado en una isla, James y Em disfrutan de unas vacaciones perfectas en playas vírgenes, un personal excepcional y tomando el sol. Pero guiados por la seductora y misteriosa Gabi, se aventuran fuera de los terrenos del resort y se encuentran en una cultura llena de violencia, hedonismo y horror indescriptible',
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5DNRr2juXdwtvktwXxwuk9Usk8O.jpg',
      rating: 0,
      category: 'movie'
    },
  ]

}
