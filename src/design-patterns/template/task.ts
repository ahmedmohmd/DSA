import AduitTrail from "./aduitTrail";

abstract class Task {
  private aduitTrail: AduitTrail;

  constructor(aduitTrail: AduitTrail) {
    this.aduitTrail = aduitTrail;
  }

  public excute(): void {
    this.aduitTrail.record();
    this.doExcute();
  }

  public abstract doExcute();
}

export default Task;
