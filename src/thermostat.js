class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSavingMode = false;
    this.maxTemperature = 32;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    if (this.temperature < this.maxTemperature) {
      this.temperature += 1;
    }
  }

  down() {
    if (this.temperature >= 11) {
      this.temperature -= 1;
    } 
  }

  getPowerSavingMode() {
    return this.powerSavingMode;
  }

  setPowerSavingMode() {
    this.powerSavingMode = !this.powerSavingMode
    if (this.powerSavingMode === true) {
      this.maxTemperature = 25;
    } else {
      this.maxTemperature = 32;
    }
  }

  getMaxTemperature() {
    return this.maxTemperature;
  }

  reset() {
    this.temperature = 20;
  }

  getUsage() {
    if (this.temperature < 18) {
      return 'low-usage';
    }
    else if (this.temperature <= 25) {
      return 'medium-usage';
    }
    else
      return 'high-usage';
  }
}
