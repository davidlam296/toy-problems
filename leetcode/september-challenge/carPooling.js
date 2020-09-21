const carPooling = (trips, capacity) => {
  const map = [];
  let currCount = 0;
  
  trips.sort(([passA, startA, stopA], [passB, startB, stopB]) => {
    if (startA - startB === 0) return stopA - stopB;
    return startA - startB;
  })
  
  const addPassengers = (loc, num) => {
    let start = 0;
    let end = map.length;
    
    while (start < end) {
      const mid = Math.floor((start + end) / 2);
      
      if (loc === map[mid][0]) {
        start = mid;
        break;
      } else if (loc < map[mid][0]) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }
    
    map.splice(start, 0, [loc, num]);
  }
  
  for (const [passengers, start, stop] of trips) {
    while (map.length > 0 && start >= map[0][0]) {
      currCount -= map[0][1];
      map.shift();
    }
    
    currCount += passengers;
    
    if (currCount > capacity) return false;
    
    addPassengers(stop, passengers);
  }
  
  return tru