import CloudStream from "./cloud-stream";
import Stream from "./stream";

class CompressedCouldStream implements Stream {
  private stream: Stream;

  constructor(stream: Stream) {
    this.stream = stream;
  }

  write(data: string): void {
    const compressedData = this.compress(data);
    this.stream.write(compressedData);
  }

  private compress(data: string): string {
    return data.substring(0, 5);
  }
}

export default CompressedCouldStream;
