module.exports = (factory, Models) => {
  factory.define('Article', Models.Article, {
    title: 'My awesome content',
    content: 'Lorem ispum bla bla',
    createdAt: new Date(),
    updatedAt: new Date(),
  });
};
