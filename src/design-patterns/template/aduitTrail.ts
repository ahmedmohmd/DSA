class AduitTrail {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public record() {
    console.log(this.name);
  }
}

export default AduitTrail;
