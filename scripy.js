function Television(powerStatus, channel) {
  this.powerStatus = powerStatus;
  this.channel = channel;
}

Television.prototype.turnOn = function () {
  this.powerStatus = true;
  console.log("The  television is on!");
};

Television.prototype.channelUp = function () {
  this.channel++;
  if (this.channel > 100) {
    this.channel = 1;
  }
  console.log("Current Channel: " + this.channel);
};

Television.prototype.channelDown = function () {
  this.channel--;
  if (this.channel < 1) {
    this.channel = 100;
  }
  console.log("Current Channel:" + this.channel);
};

Television.prototype.getState = function () {
  console.log(this.powerStatus ? "TV is ON" : "TV is OFF");
  console.log(this.channel);
};

const myTelevision = new Television(true, 25);
const myTelevision2 = new Television(false, 86);
const myTelevision3 = new Television(true, 96);
