'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

    it("should return 20 for the starting temperature", function() {
      expect(thermostat.temperature).toEqual(20);
    });

    it("should increase the thermostat's temperature", function(){
        thermostat.increase();
        expect(thermostat.temperature).toEqual(21);
    });

    it("should decrease the thermostat's temperature", function(){
      thermostat.decrease();
      expect(thermostat.temperature).toEqual(19);
    });

    it("should reset the thermostats's temperature to 20", function(){
      thermostat.increase();
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20)
    });

    it("has a minimum temperature of 10 degrees", function() {
      for (var i = 0; i < 11; i++) {
        thermostat.decrease();
      };
      expect(thermostat.temperature).toEqual(10)
    });

    it("has power saving mode on by default", function(){
      expect(thermostat.isPowerSavingModeOn()).toBe(true)
    });

    it("can switch PSM off", function(){
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false)
    });

    it('can switch PSM back on', function() {
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
      thermostat.switchPowerSavingModeOn();
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    it("can return the thermostats current energy usage", function(){
      expect(thermostat.energyUsage()).toContain("usage")
    });

    describe("when the thermostats temperature is below 18", function() {
      it("returns Low-usage", function() {
      for (var i = 0; i < 5; i++) {
        thermostat.decrease();
      }
      expect(thermostat.energyUsage()).toEqual("Low-usage")
      });
    });

    describe("when the thermostats temperature is between 18 and 25", function() {
      it("returns Medium-usage", function() {
      expect(thermostat.energyUsage()).toEqual("Medium-usage")
      });
    });

    describe("when the thermostats temperature is above 25", function() {
      it("returns High-usage", function() {
      thermostat.switchPowerSavingModeOff();
      for (var i = 0; i < 6; i++) {
      thermostat.increase();
      }
      expect(thermostat.energyUsage()).toEqual("High-usage")
      });
    });
});
