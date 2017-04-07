

function iterate(callback) {
  var array = ["jon"]
  array.forEach(callback)
  return array
}

function doToArray(array, callback) {
  array.forEach(callback)
}


function myFunction(value, index) {
  console.log(`${index}: ${value}`)
}

function iterativeLog(array) {
  array.forEach(myFunction)
}