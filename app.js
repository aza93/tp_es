const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: 'http://localhost:9200' })

const csvFilePath = 'Data.csv';
const csv = require('csvtojson');

csv({
  delimiter: ';',
	trim: false,
	noheader: true,
  headers: ['title', 'seo_title', 'url', 'author', 'date', 'category', 'locales', 'content'],
})
.fromFile(csvFilePath)
.then(blogs => {  
  const formattedBlogs = blogs.map((blog) => { // Je format le fichier en json
    return  {
      title: blog['title'],
      seo_title: blog['seo_title'],
      url: blog['url'],
      author: blog['author'],
      date: blog['date'],
      category: blog['category'],
      locales: blog['locales'],
      content: blog['content']
    }
  })

  formattedBlogs.map((formattedBlog, index) => {
    //console.log('index = ', index)
    //console.log(formattedBlog);
    
    client.create({
      index: "groupe_8",
      type: "g8",
      id: index,
      body: formattedBlog
    }, function(error, response) {
      if (error) {
        console.error(error);
        return;
      }
      else {
        console.log(response); 
      }
    });
  })

}).catch(err => {
  console.log(err);
});