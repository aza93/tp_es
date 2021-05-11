
const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: 'http://localhost:9200' })

// require csvtojson module
const CSVToJSON = require('csvtojson');

// convert Data.csv file to JSON array
CSVToJSON().fromFile('Data.csv')
  .then(blogs => {
      // blogs is a JSON array
      // log the JSON array
      //console.log(blogs);

      for (var i = 0; i < blogs.length; i++ ) {
        client.create({
          index: "groupe_8", // name your index
          type: "g8", // describe the data thats getting created
          id: i, // increment ID every iteration - I already sorted mine but not a requirement
          body: blogs[i] // *** THIS ASSUMES YOUR DATA FILE IS FORMATTED LIKE SO: [{prop: val, prop2: val2}, {prop:...}, {prop:...}] - I converted mine from a CSV so pubs[i] is the current object {prop:..., prop2:...}
        }, function(error, response) {
          if (error) {
            console.error(error);
            return;
          }
          else {
          console.log(response);  //  I don't recommend this but I like having my console flooded with stuff.  It looks cool.  Like I'm compiling a kernel really fast.
          }
        });
      }

  }).catch(err => {
      // log error if any
      console.log(err);
  });


client.search({
  index: 'groupe_8',
  body: {
    query: {
      match: {  }
    }
  }
}, (err, result) => {
  if (err) console.log(err)
})
