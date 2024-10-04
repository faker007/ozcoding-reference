const Playable = (Base) =>
  class extends Base {
    play() {
      throw new Error("play() must be implemented");
    }
  };

class Instrument {}

class Guitar extends Playable(Instrument) {
  play() {
    console.log("Playing guitar...");
  }
}

const myGuitar = new Guitar();

myGuitar.play();
