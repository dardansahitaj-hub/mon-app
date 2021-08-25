// @ts-ignore

import {Component, OnInit, Directive, ViewChild, ElementRef} from '@angular/core';
import { Renderer2} from "@angular/core";

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.page.html',
  styleUrls: ['./calculatrice.page.scss'],
})
export class CalculatricePage implements OnInit {

  constructor(private render: Renderer2) {
  }

  ngOnInit() {
  }

  clickOnNumber(number){
    let reponseUser = document.getElementById('reponseUser');
    console.log(reponseUser.innerHTML);
    reponseUser.insertAdjacentHTML( 'afterend', '');
    reponseUser.insertAdjacentHTML( 'afterend', number);
    let reponse = new ElementRef('reponseUser');
    console.log(reponse);
  }
}
