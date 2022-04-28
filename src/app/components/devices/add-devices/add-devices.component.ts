import { Component, OnInit } from '@angular/core';
import { DeviceModule } from 'src/app/Model/device/device.module';
import { SuportDevicesService } from 'src/app/services/suport-devices.service';
import { Apollo, gql } from 'apollo-angular';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-add-devices',
  templateUrl: './add-devices.component.html',
  styleUrls: ['./add-devices.component.css'],
})
export class AddDevicesComponent implements OnInit {
  constructor(
    private suport_device_service: SuportDevicesService,
    private apollo: Apollo
  ) {}

  GET_DOGS = gql`
    query {
      characters(page: 2, filter: { name: "rick" }) {
        info {
          count
        }
        results {
          name
        }
      }
      location(id: 1) {
        id
      }
      episodesByIds(ids: [1, 2]) {
        id
      }
    }
  `;
  private querySubscription: Subscription = new Subscription();
  marca: string = '';
  modelo: string = '';
  estado: string = '';
  loading: boolean = true;
  posts: any;

  ngOnInit(): void {
    this.querySubscription = this.apollo
      .watchQuery({
        query: this.GET_DOGS,
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        console.log(data);
      });
  }

  addDevice() {
    const temp: DeviceModule = new DeviceModule();
    temp.estado = this.estado;
    temp.marca = this.marca;
    temp.modelo = this.modelo;
    this.suport_device_service.add(temp);
  }
}
