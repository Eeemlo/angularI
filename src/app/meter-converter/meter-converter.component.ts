import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-meter-converter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './meter-converter.component.html',
  styleUrl: './meter-converter.component.css'
})
export class MeterConverterComponent {
  // Properties
  mtofeetnum: number = 0;
  result: number = 0;

  //Methods
  meterToFeet(): void {
    this.result = this.mtofeetnum / 0.3048;
  }

  feetToMeter(): void {
    this.result = this.mtofeetnum * 0.3048;
  }
}
