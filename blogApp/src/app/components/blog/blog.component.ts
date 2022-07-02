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

  constructor() { }

  ngOnInit(): void {
  }

  uploadNews() {

  }

  drawNews() {

  }

}
