function one() {
  console.log('one')
}

// module.exports.one = one.. you can do this

// module.exports.one = function() {
//   console.log('one')
// }
// module.exports.two = function() {
//   console.log('two')
// }.. or this!!!

// module.exports = [1, 2, 3, 4] .. also this

module.exports = function Person(name, height) {
  this.name = name
  this.height = height
}
