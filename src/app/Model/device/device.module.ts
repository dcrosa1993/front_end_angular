import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class DeviceModule {
  marca: string = '';
  modelo: string = '';
  estado: string = '';

  getData() {
    return {
      marca: this.marca,
      modelo: this.modelo,
      estado: this.estado,
    };
  }
}
