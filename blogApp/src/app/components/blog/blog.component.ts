import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/interfaces/news'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  arrNews: News[] = [];
  n_title: string = "";
  n_image: string = "";
  n_content: string = "";
  n_date: string = "";

  id: number = 3;

  addNews: string = "";

  /**
   * The constructor is a function that is called when a new instance of the class is created
   */
  constructor() {
    /* It's creating an array of objects. */
    this.arrNews = [
      { id: 2, title: 'El Alavés solicitará nueve años y medio de prisión para Dimitry Piterman y José Nereo', image: "https://imagenes.elpais.com/resizer/01RdFghZcxDSp9_mZ5FT6CJkxl4=/414x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/WHEW2CJKKM5E56WHF3AQVWWAFM.jpg", content: 'El Deportivo Alavés anunció este miércoles que solicitará en total nueve años y medio de prisión para Dimitry Piterman y José Nereo Ruiz Vicente por "la presunta comisión de delito continuado de apropiación indebida, falsedad contable y delito societario" durante su etapa en el club vitoriano entre 2004 y 2007.', date: '29/06/2022' },
      { id: 1, title: 'El Deportivo Alavés regresa a Primera División en San Mamés frente al Athletic (4-0)', image: "https://www.manquepierda.com/historiarealbetis/files/2018/08/Alav%C3%A9s-2016-17-400x200.jpg", content: 'Veintiún años, cinco meses y diecisiete días después de su primer descenso a Segunda -26 de marzo de 1933-, el Deportivo Alavés regresa a la máxima categoría futbolística estatal: Primera División. Lo hace en un campo mítico: San Mamés. Frente a un rival histórico: Athletic. ¡El Glorioso ha vuelto!', date: '16/05/2016' }
    ]
  }

  /**
   * A lifecycle hook that is called after data-bound properties of a directive are initialized.
   */
  ngOnInit(): void {
    this.drawNews();
    console.log(this.arrNews);
  }

  /* It's checking if the fields are empty and if they are not, it's adding the news to the array. */
  uploadNews(): void {
    if (this.n_title !== "" && this.n_image !== "" && this.n_content !== "" && this.n_date !== "") {
      /* It's checking if the title already exists in the array. */
      let exists = this.arrNews.find(news => news.title === this.n_title);
      if (exists === undefined) {
        let newNews: News = {
          id: this.id,
          title: this.n_title,
          image: this.n_image,
          content: this.n_content,
          date: this.n_date
        }
        this.arrNews.unshift(newNews);
        this.id++;
        this.drawNews();
        this.n_title = "";
        this.n_image = "";
        this.n_content = "";
        this.n_date = "";
      }
      else {
        alert('El titulo ya existe.')
      }
    } else {
      alert('Los campos no pueden estar vacios.');
    }

  }

  /**
   * We're looping through the array of news items and adding each one to the addNews variable
   */
  drawNews(): void {
    this.addNews = "";
    this.arrNews.forEach((news) => {
      this.addNews +=
        `<article class="news-item">
          <img src="${news.image}"
              alt="" class="news-image">
          <h1 class="news-title">
            ${news.title}
          </h1>
          <p class="news-content">
            ${news.content}
          </p>
          <span class="news-date">${news.date}</span>
        </article>
      `;
    });
  }
}
