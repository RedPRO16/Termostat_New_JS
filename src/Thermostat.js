'use strict';

function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.powerSavingMode = true;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.LOW_ENERGY_USAGE_LIMIT = 18
  this.MEDIUM_ENERGY_USAGE_LIMIT = 25
};

Thermostat.prototype.temperature = function() {
  return this.temperature;
};

 Thermostat.prototype.increase = function() {
  if (this.isMaximumTemperature()) {
    return;
  };
  this.temperature += 1;
 };

Thermostat.prototype.decrease = function() {
  if (this.isMinimumTemperature()) {
    return;
  };
  this.temperature -= 1;
};

Thermostat.prototype.reset = function() {
  this.temperature = this.DEFAULT_TEMPERATURE;
}

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
};

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSavingMode = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function() {
  this.powerSavingMode = true;
}

Thermostat.prototype.isMaximumTemperature = function() {
  if (this.isPowerSavingModeOn() === false) {
    return this.temperature === this.MAX_LIMIT_PSM_OFF;
  }
  return this.temperature === this.MAX_LIMIT_PSM_ON;
}

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < this.LOW_ENERGY_USAGE_LIMIT ) {
    return "Low-usage";
  } else if (this.temperature >= this.LOW_ENERGY_USAGE_LIMIT && this.temperature <= this.MEDIUM_ENERGY_USAGE_LIMIT) {
    return "Medium-usage";
  } else {
    return "High-usage";
  };
};
