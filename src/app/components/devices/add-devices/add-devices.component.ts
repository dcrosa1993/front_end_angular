import { Component, OnInit } from '@angular/core';
import { DeviceModule } from 'src/app/Model/device/device.module';
import { SuportDevicesService } from 'src/app/services/suport-devices.service';

@Component({
  selector: 'app-add-devices',
  templateUrl: './add-devices.component.html',
  styleUrls: ['./add-devices.component.css'],
})
export class AddDevicesComponent implements OnInit {
  constructor(private suport_device_service: SuportDevicesService) {}

  marca: string = '';
  modelo: string = '';
  estado: string = '';

  ngOnInit(): void {}

  addDevice() {
    const temp: DeviceModule = new DeviceModule();
    temp.estado = this.estado;
    temp.marca = this.marca;
    temp.modelo = this.modelo;
    this.suport_device_service.add(temp);
  }
}
