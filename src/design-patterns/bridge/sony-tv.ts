import Device from "./device";

class SonyTV implements Device {
  public turnOn(): void {
    console.log("Sony Turn On!");
  }

  public turnOff(): void {
    console.log("Sony Turn Off!");
  }

  public setChannel(number: number): void {
    console.log("The channel is set to: ", number);
  }
}

export default SonyTV;
