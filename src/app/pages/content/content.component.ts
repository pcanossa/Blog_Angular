import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input()
  imgCover: string = 'https://cdn.pixabay.com/photo/2018/05/31/16/51/beer-3444480_960_720.jpg';
  @Input()
  contentTitle: string = 'NOTÍCIA QUENTINHA';
  @Input()
  contentDescription: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit natus odio error! Possimus reiciendis atque quidem rem, est animi quam. Sint optio molestiae iusto saepe ab. Magni, id commodi. Culpa? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima soluta, necessitatibus dolore rem a id recusandae enim repellendus laboriosam illum reiciendis, nesciunt cupiditate neque molestiae tempore sint! Ad, vero numquam!Lorem';

  constructor() { }

  ngOnInit(): void {
  }

}
