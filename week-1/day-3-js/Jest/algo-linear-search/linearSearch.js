function linearSearch(searchTerm, arr) {
  
  for(let i = 0; i<arr.length; i++){
    if (searchTerm == arr[i]){
      return i;
    }
  }
}

function globalLinearSearch(searchTerm, arr) {
  const res = [];
  for(let i = 0; i<arr.length; i++){
    if (searchTerm === arr[i]){
      res.push(i);
    }
  }
  return res;
}
console.log(globalLinearSearch('a', "bananas".split("")))
module.exports = { linearSearch, globalLinearSearch };
