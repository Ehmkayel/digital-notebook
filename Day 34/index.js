//The difference between json and object is that the keys has double quotes

//JSON.parse(): This is used to convert JSON to objects

// JSON.parse(json['', reviver])
// // json or text , the data
// // reviver is an optional callback function
// /* JSON.parse(json, (key, value) => {

// })
// */

const usersText = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }`
    
    const usersObj = JSON.parse(usersText, undefined, 4)
    console.log(usersObj)

    const names =`["Lamidi", "Morufat", "Kajogbola"]`
    const parsedNames = JSON.parse(names)
    console.log(parsedNames)

    //converting object to JSON using JSON.stringify()
    //Strings use double quotes. No single quotes or backticks in JSON. 
    //Object property names are double-quoted also. So age:10 becomes "age":10.

    let student = {
        name: 'Ramadan',
        age: 10,
        isAdmin: false,
        courses: ['html', 'css', 'js', 'react', 'tailwind'],
        spouse: null
      };
      
    let json = JSON.stringify(student);
    console.log(json)
      
     