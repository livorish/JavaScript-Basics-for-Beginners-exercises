let post = new BlogPost('Python Basics', 'Learn the building blocks of the wonderful general purpose programming language Python.',
   'Craig Dennis')

console.log(post);

function BlogPost(title, body, author) {
   this.title = title;
   this.body = body;
   this.author = author;
   this.views = 0;
   this.comments = [];
   this.isLive = false;
}
