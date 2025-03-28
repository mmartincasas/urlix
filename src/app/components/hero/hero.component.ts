import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UrlService } from '../../services/url.service';
import { FeaturesComponent } from "../features/features.component";
import { ShareButtonsComponent } from "../share-buttons/share-buttons.component";

@Component({
  selector: 'app-hero',
  imports: [ReactiveFormsModule, CommonModule, FeaturesComponent, ShareButtonsComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  urlService = inject(UrlService);

  formUrl: FormGroup;
  shortUrl: string = '';
  isNotUrl: boolean = false;
  isShortError: boolean = false;

  copied = false;

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
      this.isNotUrl = false;
      this.isShortError = false;
      const originalUrl = this.formUrl.value.original_url;
      this.urlService.createShortUrl(originalUrl).subscribe({
        next: (response) => {
          this.shortUrl = response.short_url;
        },
        error: (error) => {
          console.error('Error acortando la URL', error);
          this.isShortError = true;
          this.shortUrl='';
        }
      });
    } else {
      console.log('Formulario no válido');
      this.isNotUrl= true;
      this.shortUrl='';
    }
  }

}
