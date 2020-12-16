import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BooksModel } from 'src/app/shared/models/books.model';
import { GoogleBooksService } from 'src/app/shared/services/google-books.service';
import { SearchBooksService } from 'src/app/shared/services/search-books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bookSeacrh: BooksModel[];
  activeSearch: boolean = false;
  iconSearch: boolean = false;
  iconHide: boolean = false;
  formg: FormGroup;
  appearance: string = 'outline';
  reponsiveBool: boolean = false;
  bookHome: BookHome = {
    recomendados: [],
    populares: [],
    masVendidos: [],
    novelas: [],
    fantasia: [],
    cienciaFiccion: [],
    terror: [],
    romanticas: [],
    aventuras: [],

  }
  show: boolean = false;
  show1: boolean = false;
  show2: boolean = false;
  show3: boolean = false;
  show4: boolean = false;
  show5: boolean = false;
  show6: boolean = false;
  show7: boolean = false;
  show8: boolean = false;

  recomendados: string[] = ['ciudades de papel', 'crepúsculo', 'el sótano natasha', 'latidos de una bala',
    'la selección kiera cass', 'una corte de rosas y espinas'];
  populares: string[] = ['la madre de frankenstein', 'a corazon abierto', 'y julio reto a los dioses',
    'la chica de nieve', 'el dominio mental', 'las tinieblas del alba'];
  masVendidos: string[] = ['donde se acaba el norte', 'las tinieblas y el alba', 'linea de fuego',
    'el enigma de la habitación 622', 'rey blanco', 'reina roja'];
  novelas: string[] = ['cien años de soledad', 'crimen y castigo', 'orgullo y prejuicio',
    '1984', 'don quijote de la mancha', 'los pilares de la tierra'];
  fantasia: string[] = ['el señosr de los anillos', 'el nombre del viento', 'el hobbit',
    'juego de tronos', 'la voz de las espadas', 'el silmarillion'];
  cienciaFiccion: string[] = ['La máquina del tiempo', '1984 - George Orwell (1949)', 'Fahrenheit 451 - Ray Bradbury (1953)',
    'Soy leyenda - Richard Matheson (1954)', 'El fin de la eternidad', 'El problema de los tres cuerpos'];
  románticas: string[] = ['La villas de las telas, de Anne Jacobs', 'Toda la verdad de mis mentiras, de Elísabet Benavent', 'Sigo siendo yo, de Jojo Moyes',
    'El chico de mi vida, de Jana Aston', 'Pídeme lo que quieras, de Megan Maxwell', 'Cuando vuelva a encontrarte, de Mar Carrión'];
  aventuras: string[] = ['la isla del tesoro', 'robinson crusoe', 'Las aventuras de Huckleberry Finn',
    'moby-dick', 'la vuelta al mundo el ochenta dias', 'la flecha negra'];
  terror: string[] = ['dracula', 'it', 'el resplandor',
    'la llamada de cthulhu', 'en las montañas de la locura', 'el exorcista'];


  constructor(private apiGoogle: GoogleBooksService, private router: Router, private filter: SearchBooksService, private fb: FormBuilder) {
    this.createForm();

  }

  ngOnInit(): void {
    this.loadBooks();

    //reponsive----
    let width = window.innerWidth;
    if (width > 540) {
      this.appearance = 'outline';
      this.reponsiveBool = false;
    } else {
      this.appearance = 'legacy';
      this.reponsiveBool = true;
    }

  }

  icono = setInterval(() => {
    //reponsive----
    let width = window.innerWidth;
    if (width > 500) {
      this.appearance = 'outline';
      this.reponsiveBool = false;
    } else {
      this.appearance = 'legacy';
      this.reponsiveBool = true;
    }

    if (scrollY !== 0) {
      this.iconHide = true;
    } else {
      this.iconHide = false;
    }

  }, 300);


  createForm() {
    this.formg = this.fb.group({
      title: ['', [Validators.required]],
      author: ['', []],
      publication: ['', []],
      categories: ['', []]

    });
  }
  closeDrawer(drawer){
    if (this.formg.status === 'VALID') {drawer.toggle();this.iconSearch= !this.iconSearch;}
  }

  async saveForm() {
    try {
      if (this.formg.status === 'VALID') {
        let result = {
          title: this.formg.get('title').value,
          author: this.formg.get('author').value,
          publication: this.formg.get('publication').value,
          categories: this.formg.get('categories').value
        }
        this.bookSeacrh = await this.filter.searchBooks(`${result.title}`, 40);

        try {
          let newBooks: BooksModel[] = [];


          //----------categories---------------
          if ((result.author as string).length > 0) {
            for (let i = 0; i < this.bookSeacrh.length; i++) {
              const element = this.bookSeacrh[i];
              let exis: boolean = false;
              if (element.authors != null) {
                for (const item of element.authors) {
                  let arr: string[] = item.split(' ');
                  for (const it of arr) {
                    if (result.author.toLocaleLowerCase().search(it.toLocaleLowerCase()) >= 0) {
                      exis = true;
                    }
                  }
                }
              }
              if (exis) {
                newBooks.push(element);
              }
            }
            this.bookSeacrh = newBooks;
          }


          newBooks = [];
          //----------publication---------------
          if ((result.publication as string).length > 0) {
            for (let i = 0; i < this.bookSeacrh.length; i++) {
              const element = this.bookSeacrh[i];
              let exis: boolean = false;
              if (element.publishedDate.length > 0) {
                if (element.publishedDate.search((result.publication as string)) > -1) {
                  exis = true;
                }
              }
              if (exis) {
                newBooks.push(element);
              }
              
            }
            
            this.bookSeacrh = newBooks;
          }


          newBooks = [];
          //----------categories---------------
          if ((result.categories as string).length > 0) {
            for (let i = 0; i < this.bookSeacrh.length; i++) {
              const element = this.bookSeacrh[i];
              let exis: boolean = false;
              if (element.categories != null) {
                for (const item of element.categories) {
                  let arr: string[] = item.split(' ');
                  for (const it of arr) {
                    if (result.categories.toLocaleLowerCase().search(it.toLocaleLowerCase()) >= 0) {
                      exis = true;
                    }
                  }
                }
              }
              if (exis) {
                newBooks.push(element);
              }
            }
            this.bookSeacrh = newBooks;
          }




        } catch (error) {
          console.log(error);
        }




        this.activeSearch = true;
      } else {
        this.activeSearch = false;
      }
    } catch (error) {
      this.activeSearch = false;
    }
  }
  get invaTitle() { return this.formg.get('title').status === 'INVALID' && this.formg.get('title').touched === true; }





  async loadBooks() {
    try {

      let time: number = 3000;


      //--recomendados--
      for (let i = 0; i < this.recomendados.length; i++) {
        const search = this.recomendados[i];
        let bok = await this.getBooks(search, 1);
        this.bookHome.recomendados.push(bok[0]);

      }
      this.show = true;


      //--populares--
      for (let i = 0; i < this.populares.length; i++) {
        const search = this.populares[i];
        let bok = await this.getBooks(search, 1);
        this.bookHome.populares.push(bok[0]);

      }
      this.show1 = true;


      await this.wait(time);
      //--mas vendidos--
      for (let i = 0; i < this.masVendidos.length; i++) {
        const search = this.masVendidos[i];
        let bok = await this.getBooks(search, 1);
        this.bookHome.masVendidos.push(bok[0]);

      }
      this.show2 = true;


      await this.wait(time);
      //--novelas--
      for (let i = 0; i < this.novelas.length; i++) {
        const search = this.novelas[i];
        let bok = await this.getBooks(search, 1);
        this.bookHome.novelas.push(bok[0]);

      }
      this.show3 = true;


      await this.wait(time);
      //--fantasia--
      for (let i = 0; i < this.fantasia.length; i++) {
        const search = this.fantasia[i];
        let bok = await this.getBooks(search, 1);
        this.bookHome.fantasia.push(bok[0]);

      }
      this.show4 = true;


      await this.wait(time);
      //--ciencia ficcion--
      for (let i = 0; i < this.cienciaFiccion.length; i++) {
        const search = this.cienciaFiccion[i];
        let bok = await this.getBooks(search, 1);
        this.bookHome.cienciaFiccion.push(bok[0]);

      }
      this.show5 = true;


      await this.wait(time);
      //--romantica--
      for (let i = 0; i < this.románticas.length; i++) {
        const search = this.románticas[i];
        let bok = await this.getBooks(search, 1);
        this.bookHome.romanticas.push(bok[0]);

      }
      this.show6 = true;


      await this.wait(time);
      //--aventuras--
      for (let i = 0; i < this.aventuras.length; i++) {
        const search = this.aventuras[i];
        let bok = await this.getBooks(search, 1);
        this.bookHome.aventuras.push(bok[0]);

      }
      this.show7 = true;


      await this.wait(time);
      //--terror--
      for (let i = 0; i < this.terror.length; i++) {
        const search = this.terror[i];
        let bok = await this.getBooks(search, 1);
        this.bookHome.terror.push(bok[0]);

      }
      this.show8 = true;





    } catch (error) {

    }
  }

  //------------------------------------------
  async getBooks(search: string, quantity: number) {
    try {

      let books = await this.apiGoogle.getSearchBooks(search, quantity);

      for (let i = 0; i < books.length; i++) {
        if (books[i].description.length <= 0) {
          books[i].description = "Lo sentimos la descripción de este libro no está disponible.";
        }


        let title = books[i].title;

        if (title.length > 70) {

          books[i].title = `${title.substring(0, 70)}...`;

        }


        let width = window.innerWidth;
        if (width <= 530) {
          if (title.length > 30) {
            books[i].title = `${title.substring(0, 30)}...`;
          }
        }

      }


      return books;

    } catch (error) {

    }
  }


  getId(id: String) {

    this.router.navigate([`details/${id}`])

  }






  animTitle(event) {

    let target: HTMLElement = event.target;

    target.classList.remove('title-card-home-anim');

    console.log(target);
    setTimeout(() => {
      target.classList.add('title-card-home-anim');
    }, 300);
  }


  wait(time: number) {
    return new Promise((resolve, rejects) => {

      setTimeout(() => {
        resolve(true);
      }, time);

    });
  }



}

interface BookHome {
  recomendados: BooksModel[],
  populares: BooksModel[],
  masVendidos: BooksModel[],
  novelas: BooksModel[],
  fantasia: BooksModel[],
  cienciaFiccion: BooksModel[],
  terror: BooksModel[],
  romanticas: BooksModel[],
  aventuras: BooksModel[]

}