import Stream from "./stream";

class CloudStream implements Stream {
  public write(data: string) {
    console.log("Storing", data);
  }
}

export default CloudStream;
