const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push("Ralph");
}

function destructivelyPrependDriver(name) {
  drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  const newDrivers = [...drivers,name];
  return newDrivers
}

function prependDriver(name) {
  const newDrivers = [name, ...drivers];
  return newDrivers
}

function removeLastDriver() {
  const lastDriver = drivers.slice(0, 2);
  return lastDriver
}

function removeFirstDriver() {
  const firstDriver = drivers.slice(1);
  return firstDriver
}
