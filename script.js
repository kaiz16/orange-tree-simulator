function Orange() {
  this.diameter = 1;
}

function OrangeTree() {
  this.age = 1;

  this._dead = false;

  this.height = 1;

  this._maxAge = 40;

  this.oranges = [];

  this.ageMe = function () {
    this.age += 1;
    if (this.age <= 10) {
      this.height += 10;
    }
    if (this.age >= 3 && this.dead === false) {
      for (let i = 0; i < 3; i++) {
        let orange = new Orange();
        this.oranges.push(orange);
      }
    }
    if (this.age >= this.maxAge) {
      this.dead = true;
    }
  };

  this.hasAnyOranges = function () {
    if (this.oranges.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  this.pickAnOrange = function () {
    if (this.hasAnyOranges()) {
      return this.oranges.pop();
    } else {
      console.log("No oranges in this tree.");
    }
  };
}

Object.defineProperty(OrangeTree.prototype, "dead", {
  get: function () {
    return this._dead;
  },
  set: function (value) {
    this._dead = value;
  },
});

Object.defineProperty(OrangeTree.prototype, "maxAge", {
  get: function () {
    return this._maxAge;
  },
});
