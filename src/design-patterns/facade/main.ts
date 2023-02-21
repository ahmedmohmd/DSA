import NotificationServer from "./netification-server";
import NotificationService from "./notification-service";

class Main {
  public static render(): void {
    const data = {
      ipAddress: "192.168.1.1",
      appID: "1324",
      appKey: "JDHAED",
      target: "target",
    };
    const server = new NotificationService(data);

    server.send("Hello there!");
  }
}

export default Main;
