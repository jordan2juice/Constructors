// created the function for the Television

function Television(powerStatus, channel) {
  this.powerStatus = powerStatus; //  on or off
  this.channel = channel; // current channel
}

//  method to turn on the television
Television.prototype.turnOn = function () {
  this.powerStatus = true;
  console.log("The  television is on!");
};

//  method to go channel up
Television.prototype.channelUp = function () {
  this.channel++;
  if (this.channel > 100) {
    this.channel = 1;
  }
  console.log("Current Channel: " + this.channel);
};

// method to go channel down
Television.prototype.channelDown = function () {
  this.channel--;
  if (this.channel < 1) {
    this.channel = 100;
  }
  console.log("Current Channel:" + this.channel);
};

// the get status of the TV. It will return whether the tv is turned on or not.
Television.prototype.getState = function () {
  console.log(this.powerStatus ? "TV is ON" : "TV is OFF");
  console.log(this.channel);
};

//  multiple  objects can be created using the constructor and then methods can be called upon them.
const myTelevision = new Television(true, 25);
const myTelevision2 = new Television(false, 86);
const myTelevision3 = new Television(true, 96);

myTelevision.turnOn ()
myTelevision.channelUp ()
myTelevision.channelDown ()
myTelevision.getState ()

myTelevision2.turnOn()
myTelevision2.channelUp()
myTelevision2.channelDown ()
myTelevision2.getState ()

myTelevision3.turnOn()
myTelevision3.channelUp ()
myTelevision3.channelDown ()
myTelevision3.getState();