exports.getPosts = (req, res, next) => {
  //send the required data using res.json() method
  res.status(200).json({
    posts: [{ title: "FirstPost", content: "this is the first Post" }]
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  //create  post in db
  res.status(201).json({
    message: "post created successfully",
    post: { id: new Date().toISOString(), title: title, content: content }
  });
};
