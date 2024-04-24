import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-celsius-converter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './celsius-converter.component.html',
  styleUrl: './celsius-converter.component.css'
})
export class CelsiusConverterComponent {
ctofnum: number = 0;
result: number = 0;

  //Methods
  celsiusToFahrenheit(): void {
    this.result = this.ctofnum * 1.8 + 32;
  }

  fahrenheitToCelsius(): void {
    this.result = (this.ctofnum - 32) / 1.8;
  }
}
