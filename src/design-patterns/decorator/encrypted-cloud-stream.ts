import CloudStream from "./cloud-stream";
import Stream from "./stream";

class EncryptedCloudStream implements Stream {
  private stream: Stream;

  constructor(stream: Stream) {
    this.stream = stream;
  }

  public write(data: string): void {
    let encrypted = this.encrypt();
    this.stream.write(encrypted);
  }

  private encrypt(): string {
    return "@#&^$(IGCYg%)";
  }
}

export default EncryptedCloudStream;
