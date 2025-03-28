import { Component, Input } from '@angular/core';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-share-buttons',
  imports: [],
  templateUrl: './share-buttons.component.html',
  styleUrl: './share-buttons.component.scss'
})
export class ShareButtonsComponent {

  @Input() shortUrl: string = '';
  qrDataUrl: string = '';

  isCopied = false;

  ngOnChanges(): void {
    if (this.shortUrl) {
      this.generateQR();
    }
  }  

  copyToClipboard(){
    if (this.shortUrl) {
      navigator.clipboard.writeText(this.shortUrl).then(() => {
        this.isCopied = true;
        setTimeout(() => {
          this.isCopied = false;
        }, 2500);
      }).catch(err => {
        console.error('Error al copiar la URL:', err);
      });
    }
  }

  generateQR() {
    QRCode.toDataURL(this.shortUrl, {
      margin: 1,
      width: 300,
      color: {
        dark: '#000000',
        light: '#FFFFFF'
      }
    }).then((url: string) => {
      this.qrDataUrl = url;
    }).catch((err: any) => {
      console.error('Error generando QR:', err);
    });
  }

  downloadQR() {
    if (!this.qrDataUrl) return;

    const link = document.createElement('a');
    link.href = this.qrDataUrl;
    link.download = 'qr-urlix.png';
    link.click();
  }

}
