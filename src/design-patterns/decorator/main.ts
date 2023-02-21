import CloudStream from "./cloud-stream";
import CompressedCouldStream from "./compressed-cloud-stream";
import EncryptedCloudStream from "./encrypted-cloud-stream";
import Stream from "./stream";

class Main {
  public static render(): void {
    const cloudStream = new CloudStream();
    const encryptedCouldStream = new EncryptedCloudStream(cloudStream);
    const compressedCloudStream = new CompressedCouldStream(
      encryptedCouldStream
    );

    Main.storeCreditCard(compressedCloudStream);
  }

  private static storeCreditCard(stream: Stream) {
    stream.write("6478-6541-6321-6478");
  }
}

export default Main;
