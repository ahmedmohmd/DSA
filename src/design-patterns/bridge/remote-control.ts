import Device from "./device";

class RemoteControl {
  protected device: Device;

  constructor(device: Device) {
    this.device = device;
  }
  public turnOn(): void {
    this.device.turnOn();
  }
  public turnOff(): void {
    this.device.turnOff();
  }
}

export default RemoteControl;
