import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UrlService } from '../../services/url.service';

@Component({
  selector: 'app-hero',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  urlService = inject(UrlService);

  formUrl: FormGroup;
  shortUrl: string = '';

  constructor(private fb: FormBuilder) {
    this.formUrl = this.fb.group({
      original_url: [
        '',
        [Validators.required, Validators.pattern(/https?:\/\/[^\s/$.?#].[^\s]*$/i)]
      ]
    });
  }

  createShortUrl() {

    if (this.formUrl.valid) {
      const originalUrl = this.formUrl.value.original_url;
      this.urlService.createShortUrl(originalUrl).subscribe({
        next: (response) => {
          this.shortUrl = response.short_url;
        },
        error: (error) => {
          console.error('Error acortando la URL', error);
          this.shortUrl='';
        }
      });
    } else {
      console.log('Formulario no válido');
      this.shortUrl='';
    }
  }

}
