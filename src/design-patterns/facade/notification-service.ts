import Message from "./message";
import NotificationServer from "./netification-server";

class NotificationService {
  private _ipAddress: string;
  private _appID: string;
  private _appKey: string;
  private _target: string;

  constructor({ ipAddress, appID, appKey, target }) {
    this._ipAddress = ipAddress;
    this._appID = appID;
    this._appKey = appKey;
    this._target = target;
  }

  public send(message: string) {
    const server = new NotificationServer();
    const connection = server.connect(this._ipAddress);
    const authToken = server.authunticate(this._appID, this._appKey);
    server.send(authToken, new Message(), this._target);
  }
}

export default NotificationService;
