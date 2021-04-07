class Thermostat {
  constructor() {
    this.temperature = 20;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    this.temperature += 1;
  }

  down() {
    if (this.temperature >= 11) {
      this.temperature -= 1;
    } 
  }
}