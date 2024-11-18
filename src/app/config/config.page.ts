import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /*método do modo escuro */
  toggleDarkTheme(shouldAdd: boolean) { 
    document.body.classList.toggle('dark-theme', shouldAdd); 
  }

  /*método para mudar a fonte */
  public currentFont: string = 'font-default';
  changeFont(fontClass: string) {
    this.currentFont = fontClass;
  }

  /*método para mudar o tamanho da fonte */
  public currentFontSizeClass: string = 'font-medium';  
  changeFontSize(fontSizeClass: string) { 
    this.currentFontSizeClass = fontSizeClass; 
  }

  /*método para mudar o contraste da fonte */
  public currentContrastClass: string = 'contrast-medium'; 
  changeContrast(contrastClass: string) { 
    this.currentContrastClass = contrastClass; 
  }
}


