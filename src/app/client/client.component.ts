import {Component, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit{
  constructor(private renderer: Renderer2) {}


  ngOnInit(): void {
    this.loadScripts();
    this.loadStyles();
  }

  loadStyles() {
    const styles = [
      'client/css/bootstrap.min.css',
      'client/css/style.css',
      'client/css/responsive.css',
    ];
    styles.forEach(style => {
      const styleElement = this.renderer.createElement('link');
      this.renderer.setAttribute(styleElement, 'href', style);
      this.renderer.setAttribute(styleElement, 'rel', 'stylesheet');
      this.renderer.setAttribute(styleElement, 'type', 'text/css');
      this.renderer.appendChild(document.head, styleElement);
    });
  }

  loadScripts() {
    const scripts = [
      'js/jquery.min.js',
      'js/popper.min.js',
      'js/bootstrap.bundle.min.js',
      'js/jquery-3.0.0.min.js',
      'js/plugin.js',

      'js/jquery.mCustomScrollbar.concat.min.js',
      'js/custom.js'
    ];

    scripts.forEach(script => {
      const scriptElement = this.renderer.createElement('script');
      this.renderer.setAttribute(scriptElement, 'src', script);
      this.renderer.appendChild(document.body, scriptElement);
    });
  }



}
