describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });
  
  describe('the thermostat has a temperature', function() {
    it('defaults to 20 degrees', function() {
      expect(thermostat.getTemperature()).toEqual(20);
    })

    it('can be increased by the up function', function() {
      thermostat.up();
      expect(thermostat.getTemperature()).toEqual(21);
    })

    it('can be decreased by the down function', function() {
      thermostat.down();
      expect(thermostat.getTemperature()).toEqual(19);
    })

    it('can not be decreasd below 10 degrees', function() {
      var i;
      for (i = 0; i < 11; i++) {
        thermostat.down();
      }
      expect(thermostat.getTemperature()).toEqual(10);
    })

    it('has a max temp of 25 or 32 degrees dependant on power saving mode', function() {
      expect(thermostat.getMaxTemperature()).toEqual(32);
      thermostat.setPowerSavingMode();
      expect(thermostat.getMaxTemperature()).toEqual(25);
    })

    it('has a maximum temperature of 25 when power saving mode is on', function() {
      thermostat.setPowerSavingMode();
      var i;
      for (i = 0; i < 11; i++) {
        thermostat.up();
      }
      expect(thermostat.getTemperature()).toEqual(25);
    })

    it('has a maximum temperature of 32 when power saving mode is off', function() {
      var i;
      for (i = 0; i < 20; i++) {
        thermostat.up();
      }
      expect(thermostat.getTemperature()).toEqual(32);
    })
  })

  describe('power saving mode', function() {
    it('has a power saving mode with a boolean value', function() {
      expect(thermostat.getPowerSavingMode()).toBe(false);
    })

    it('setPowerSavingMode inverts the boolean value', function() {
      thermostat.setPowerSavingMode();
      expect(thermostat.getPowerSavingMode()).toBe(true);
    })
  })
})