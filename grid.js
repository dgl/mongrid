// A simple CSS grid, makes a display: grid.

class Grid {
  rootEl;
  columns;
  items=[];

  constructor(rootEl, columns=2, rows=2) {
    this.rootEl = rootEl;
    this.columns = columns;
    this.rows = rows;
    this._setProps();
  }

  add(el) {
    this.items.push(el);
    this.rootEl.appendChild(el);
    this.rootEl.style.gridTemplateColumns = "repeat(" + this.columns + ", 1fr)";
    this._sizeEl(el);
  }

  resize() {
    for(let i in this.items) {
      this._sizeEl(this.items[i]);
    }
  }

  _sizeEl(el) {
    let gridGap = window.getComputedStyle(this.rootEl)["grid-gap"].match(/(\d+)/)[0];
    el.style.height = ((this.rootEl.offsetHeight / this.rows) - gridGap) + "px";
  }

  clear() {
    this.items = [];
    while (this.rootEl.lastChild) {
      this.rootEl.lastChild.remove();
    }
  }

  _setProps() {
    this.rootEl.style.display = 'grid';
  }
}
