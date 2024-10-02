import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-seccion',
  standalone: true,
  imports: [],
  templateUrl: './seccion.component.html',
  styleUrl: './seccion.component.scss'
})
export class SeccionComponent {
  @Input() placeholderTemplate?: TemplateRef<any>;
}
