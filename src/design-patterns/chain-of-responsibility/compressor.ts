import Handler from "./handler";
import HttpRequest from "./http-request";

class Compressor extends Handler {
  public doHandle(request: HttpRequest): boolean {
    console.log("Compressing request is completed...");
    return false;
  }
}

export default Compressor;
