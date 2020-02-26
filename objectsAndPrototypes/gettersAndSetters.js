// Getters and setters - attributes on a property that let you specify it's return value using a function
var cat = {
    name: {first:'Alex', last:'Caruso'},
    color: 'White'
}

// Getter function
Object.defineProperty(cat, 'fullName', {
    get: function() {
        return this.name.first + ' ' + this.name.last;
    },
    set: function(value) {
        var nameParts = value.split(' ')
        this.name.first = nameParts[0]
        this.name.last = nameParts[1]
    }
})
console.log(cat.fullName)

// Execute setter function to change fullName AND it's consituent parts, firt and last
cat.fullName = 'Muffin Top'
console.log(cat.name.first)
console.log(cat.name.last)
