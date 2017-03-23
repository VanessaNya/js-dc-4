/*

Working with Objects

Your car from Exercise 1 should have atleast 4 properties, at least one of
which is a method. Use it to answer the prompts below.

*/


/*

Redeclare your car here. It can either by by typing it out again or by
copying and pasting it here. Make sure you're assigning your car object to a
variable and that it meets the conditions above of having at least 4
properties, one of which is a method

*/
var car = {
  make : 'BMW',
  color: 'white',
  mileage: 30,
  seats: function() {
     console.log('shotgun')
  }

}


/*

Get one of the properties from your object using dot notation

*/
car.model


/*

Get one of the properties from your object using bracket notation

*/
car['mileage']

/*

Set one of the values of one of your properties using either dot notation or
bracket notation

*/
car.color = 'black'

/*

Call your car's method

*/
car.seats(4)
car['seats']
