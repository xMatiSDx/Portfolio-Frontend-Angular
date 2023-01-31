import { Component } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent {

  constructor() { }

  editContent() {
    console.log('Edit!')
  }

  changePicture() {
    console.log('Edit!')
  }

  ngOnInit(): void {
  }


}
