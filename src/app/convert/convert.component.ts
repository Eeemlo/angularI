import { Component } from '@angular/core';
import { CelsiusConverterComponent } from '../celsius-converter/celsius-converter.component';
import { MeterConverterComponent } from '../meter-converter/meter-converter.component';

@Component({
  selector: 'app-convert',
  standalone: true,
  imports: [CelsiusConverterComponent, MeterConverterComponent],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.css'
})
export class ConvertComponent {

}
