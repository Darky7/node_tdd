module.exports = (app, db) => {
  app.post('/post', async(req, res) => {
    try {
      const { title, content } = req.body
      const post = new db.Post({ title, content })
      const ret = await post.save()
      res.json(ret)
    } catch (error) {
      res.status(500).json(error);
    }
  })
}