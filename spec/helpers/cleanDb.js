const cleanDb = async (db) => {
  await db.Author.remove({});
  await db.Post.remove({});
}
module.exports = cleanDb
