import Handler from "./handler";
import HttpRequest from "./http-request";

class Authunticator extends Handler {
  public doHandle(request: HttpRequest): boolean {
    if (request.email && request.password) {
      console.log("Authuntication is Succeeded");
    }

    return false;
  }
}

export default Authunticator;
