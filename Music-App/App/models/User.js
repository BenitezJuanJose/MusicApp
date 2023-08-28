export class User {
  /**
   *
   * @param {string} name
   * @param {string} password
   */
  constructor(name, password) {
    this.name = name;
    this.password = password;
    this.favorites = [];
  }
  setFavorite(newFavorite) {
    if (!this.favorites.contains(newFavorite)) {
      this.favorites.push(newFavorite);
    }
  }
  changePassword(newPassword) {
    this.password = newPassword;
  }
}
