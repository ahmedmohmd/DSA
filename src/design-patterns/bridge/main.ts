import RemoteControl from "./remote-control";
import SonyTV from "./sony-tv";

class Main {
  public static render(): void {
    const sonyDevice = new SonyTV();
    const remoteControl = new RemoteControl(sonyDevice);

    remoteControl.turnOn();
    remoteControl.turnOff();
  }
}

export default Main;
