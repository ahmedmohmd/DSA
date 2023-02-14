import Handler from "./handler";
import HttpRequest from "./http-request";

class Logger extends Handler {
  public doHandle(request: HttpRequest): boolean {
    console.log("Logging request is completed...");

    return false;
  }
}

export default Logger;
