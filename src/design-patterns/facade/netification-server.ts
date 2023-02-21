import AuthToken from "./auth-token";
import Connection from "./connection";
import Message from "./message";

class NotificationServer {
  public connect(ipAddress: string): Connection {
    return new Connection();
  }

  public authunticate(appID: string, key: string): AuthToken {
    return new AuthToken("I44GGYGWW8766BVCTC");
  }

  public send(token: AuthToken, message: Message, target: string): void {
    console.log("Sedning a Message...");

    setTimeout(() => console.log("Message sent!"), 3000);
  }
}

export default NotificationServer;
