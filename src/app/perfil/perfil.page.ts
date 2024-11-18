import { Component, OnInit } from '@angular/core';
//minhas importações

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor() { }
  ngOnInit() {
  }

  /*método do modo escuro */
  toggleDarkTheme(shouldAdd: boolean) { 
    document.body.classList.toggle('dark-theme', shouldAdd); 
  }
}


