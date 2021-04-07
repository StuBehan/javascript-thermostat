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
  })
})