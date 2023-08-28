class FavoriteList {
  /**
   * @param {Song} list
   */
  constructor() {
    this.list = [];
  }
  add(newItem) {
    const item = this.list.some((item) => item.id === newItem.id);
    if (!item) {
      this.list.push(newItem);
    }
  }
  serchItem(song) {
    const result = this.list.find((item) => item.name === song);
    return result;
  }
  clear() {
    this.list = [];
  }
}

export const favorite_list = new FavoriteList();
