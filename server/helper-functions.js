const helpers = {

    /* takes a string and returns true if it's a valid phone number, false if not */
    phone: function(string){
        let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        return re.test(string)
    },

    /* takes a string and returns true if it's a valid email address, false if not */
    email: function(string) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(string).toLowerCase());
    },

    /* takes an object of any depth and returns an array of all empty properties, 
    and all properties called 'phone' or 'email' that contain an invalid phone number 
    or email address.*/
    validateProperties: object => {
        let badProperties = []

        for(x in object){
            object[x] === '' && badProperties.push(x)

            if((x === 'phone' || x === 'email') && !helpers[x](object[x])){
                console.log('if')
                badProperties.push(x)
            }

            if(typeof(object[x]) === 'object'){
                badProperties.push(...helpers.validateProperties(object[x]))
            }            
        }
        return badProperties
    },
}

console.log(helpers.validateProperties(
    {     
        "name": "Bad Email Address test",
         "address": "503 Queen St",
         "city": "Mississauga",
         "country": "USA",
         "contact": {
             "name": "Chris Fotos",
             "position": "Warehouse Manager",
             phone: "fdsfdsad",
             "email": "paujlainstock.com"
         }
     }
))

module.exports = helpers