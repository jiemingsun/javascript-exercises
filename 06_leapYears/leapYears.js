if (yrInput % 4 == 0) {
    if (yrInput % 100 == 0) {
      if (yrInput % 400 == 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }
  
  return false;

// Do not edit below this line
module.exports = leapYears;
