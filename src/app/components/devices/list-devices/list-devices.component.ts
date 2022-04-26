import { Component, OnInit } from '@angular/core';
import { DeviceModule } from 'src/app/Model/device/device.module';
import { SuportDevicesService } from 'src/app/services/suport-devices.service';

@Component({
  selector: 'app-list-devices',
  templateUrl: './list-devices.component.html',
  styleUrls: ['./list-devices.component.css'],
})
export class ListDevicesComponent implements OnInit {
  constructor(private suport_device_service: SuportDevicesService) {}
  devices: DeviceModule[] = [];
  ngOnInit(): void {
    this.devices = this.suport_device_service.getAll();
  }

  removeDevice(id: number) {
    this.suport_device_service.remove(id);
  }
}
