import Device from "./device";
import RemoteControl from "./remote-control";

class AdvancedRemoteControl extends RemoteControl {
  constructor(device: Device) {
    super(device);
  }

  public setChannel(number: number) {
    this.device.setChannel(number);
  }
}

export default AdvancedRemoteControl;
