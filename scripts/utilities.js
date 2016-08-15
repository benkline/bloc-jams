function forEach(array, callback) {
  for (i in array){
    callback(array[i]);
  }
};
