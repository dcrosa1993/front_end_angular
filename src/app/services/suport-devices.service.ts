import { Injectable } from '@angular/core';
import { DeviceModule } from '../Model/device/device.module';

@Injectable({
  providedIn: 'root',
})
export class SuportDevicesService {
  constructor() {}

  private devices: DeviceModule[] = [];

  add(device: DeviceModule) {
    this.devices.push(device);
  }

  edit(device: DeviceModule) {}

  remove(id: number) {
    this.devices.splice(id, 1);
  }

  get(id: number): DeviceModule {
    return this.devices[id];
  }

  getAll(): DeviceModule[] {
    return this.devices;
  }
}
