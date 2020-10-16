import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharingService {
  private data: any;
  private connectionId: any = undefined;

  setData(value: any) {
    this.data = value;
  }

  getData() {
    return this.data;
  }

  setConnectionId(connectionId: string) {
    this.connectionId = connectionId;
  }

  getConnectionId() {
    return this.connectionId;
  }
}
