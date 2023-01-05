import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  linkImg: string = 'https://th.bing.com/th/id/R.dd4dabd8a109e6c449d931bc43da58f9?rik=Ow6%2fWiAVYb2WRg&riu=http%3a%2f%2fwww.viralnovelty.net%2fwp-content%2fuploads%2f2014%2f07%2f140.jpg&ehk=XHf7a30yumIvQc7NkICKuzdlu13Bg5pHDL9ckRHNKbM%3d&risl=&pid=ImgRaw&r=0';
  @Input()
  cardTitle: string = 'MAR E SUA SAÚDE';
  @Input()
  cardDescription: string = 'Ir a praia é muito bom, mas você sabia que um bom banho de mar também pode trazer benefícios a sua saúde?'

  constructor() { }

  ngOnInit(): void {
  }

}
