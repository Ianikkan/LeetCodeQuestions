var minCostToConnectRopes = ropes => {
  if (ropes == null) {
    return 0;
  }
  if (ropes.length < 2) {
    return ropes[0];
  }
  ropes.sort((a, b) => a - b);
  let currCost = ropes[0] + ropes[1];
  let costs = [currCost];
  for (let i = 2; i < ropes.length; i++) {
    currCost += ropes[i];
    costs.push(currCost);
  }
  let result =  costs.reduce((acc, cur) => acc  + cur)
  return result
};

minCostToConnectRopes([1, 2, 5, 10, 35, 89]);
