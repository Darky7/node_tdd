module.exports = (app, db) => {
  app.post('/author', async(req, res) => {
    try {
      const { firstName, lastName } = req.body
      const author = new db.Author({ firstName, lastName })
      const ret = await author.save()
      res.json(author)
    } catch (error) {
      res.status(500).json(error);
    }
  })

  app.get('/authors', async (req, res) => {
    await db.Author.find({}).
      then((result) => { 
        return res.json(result)
      })
    })

  
}
