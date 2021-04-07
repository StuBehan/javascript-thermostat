describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });
  
  describe('the thermostat has a temperature', function() {
    it('defaults to 20 degrees', function() {
      expect(thermostat.getTemperature()).toEqual(20);
    })

    it('can be increased by the up function', function(){
      thermostat.up();
      expect(thermostat.getTemperature()).toEqual(21);
    })
  })

});