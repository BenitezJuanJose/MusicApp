export class Song {
  /**
   * @param {number} id
   * @param {string} name
   * @param {string} author
   * @param {string} src
   * @param {string} img
   */
  constructor(id, name, author, src, img) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.src = src;
    this.img = img;
    this.audio = new Audio(src);
  }
  play() {
    this.audio.play();
  }
  stop() {
    this.audio.pause();
  }
}
