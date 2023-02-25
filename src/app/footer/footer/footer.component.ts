import { Component } from '@angular/core';

/*------------------ Font Awesome ------------------------*/
import { FaIconLibrary, FaConfig } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(private library: FaIconLibrary, private faConfig: FaConfig) {
    library.addIconPacks(fas, fab);
    faConfig.fixedWidth = true;
  }

  scrollTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

}
