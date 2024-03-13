String.prototype.toValidInput = function () {
  return this.valueOf().replace(/[^a-zA-ZáéíóúñÁÉÍÓÚÑ0-9\s]/g, "");
};
