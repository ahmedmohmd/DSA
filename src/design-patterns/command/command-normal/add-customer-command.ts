import Command from "./command";
import CustomerService from "./customer-service";

class AddCustomerCommand implements Command {
  private service: CustomerService;

  constructor(service: CustomerService) {
    this.service = service;
  }

  public excute(): void {
    this.service.addCustomer();
  }
}

export default AddCustomerCommand;
