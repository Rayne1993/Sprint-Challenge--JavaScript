// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker2 {
    constructor(attr) {
        this.length = attr.length;
        this.width = attr.width;
        this.height = attr.height;
    }
    volume() {
        return `${this.length}` * `${this.width}` * `${this.height}`;
  
    }
    surfaceArea () {
        return 2 * (`${this.length}` * `${this.width}` + `${this.length}` * `${this.height}` + `${this.width}` * `${this.height}`);
    }
};

class CubeMaker extends CuboidMaker2 {
    constructor(cube) {
        super(cube);
    }
    cubeVolume() {
        return Math.pow(`${this.length}`, 3);
    }
    cubeSurface() {
        return 6 * Math.pow(`${this.length}`, 2);
    }
};
  
  const cuboid2 = new CuboidMaker2({
    length: 4,
    width: 5,
    height: 5,
  });

  const cu = new CubeMaker({
      length: 4,
  });

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
console.log(cu.cubeVolume());
console.log(cu.cubeSurface());