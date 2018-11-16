const validatePort = port => port.replace(/\D+/g, '')

const increase = function (num) {
  return num += 1;
}

const MYSTIC_CONDITION = function (num) {
  return num > 2
}

const mysticFunction = function (num) {
  if (MYSTIC_CONDITION(num)) {
    document.location.reload();
  }
}

module.exports = {
  validatePort,
  increase,
  mysticFunction,
}