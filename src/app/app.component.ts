import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MatSliderModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sliderValue = 0;
  title = 'Fari would you be my Valentines <3 ';
  images = ['./images/images.jpg', './images/heartImage.png', './images/thinking.png', './images/glasseskitty.jpg', './images/imaa.png']
  openPopup = false;
  showBackground = false;

  button1Click() {
    this.openPopup = true;
  }

  closePopup() {
    this.openPopup = false;
  }

  toggleBackground() {
    this.showBackground = !this.showBackground;
  }

  onSliderChange(event: any) {
    this.sliderValue = event.value;
    document.documentElement.style.setProperty('--slider-value', `${this.sliderValue}%`);
  }
}