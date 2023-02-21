import CloudStream from "./cloud-stream";
import Stream from "./stream";

class EncryptedCloudStream implements Stream {
  private _stream: Stream;

  constructor(stream: Stream) {
    this._stream = stream;
  }

  public write(data: string): void {
    let encrypted = this.encrypt();
    this._stream.write(encrypted);
  }

  private encrypt(): string {
    return "@#&^$(IGCYg%)";
  }
}

export default EncryptedCloudStream;
