// Code your solution in this file!
function logDriverNames(arr) {
  arr.forEach(function(driver) {
    console.log(driver.name);
  });
}

function logDriversByHometown(arr, hometown) {
  function fromHometown(driver) {
    return driver.hometown === hometown;
  }

  const filtered = arr.filter(fromHometown);

  filtered.forEach(function(driver) {
    console.log(driver.name);
  });
}

function driversByRevenue(drivers) {
  function revenueSorter(driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  }
  return drivers.slice().sort(revenueSorter);
}

function driversByName(drivers) {
  function nameSorter(driver1, driver2) {
    return driver1.name.localeCompare(driver2.name);
  }
  return drivers.slice().sort(nameSorter);
}

function totalRevenue(drivers) {
  function reduceRevenues(agg, el, i, arr) {
    return agg + el.revenue;
  }
  return drivers.reduce(reduceRevenues, 0);
}

function averageRevenue(drivers) {
  const totalRev = totalRevenue(drivers);
  return totalRev / drivers.length;
}
