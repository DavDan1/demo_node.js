const { expect, factory, pending } = require('../helpers');
const { Association, DataTypes } = require('sequelize');

describe('ArticleModel', () => {
  ArticleModel = factory.factories.Article.Model;
  const { tableName, tableAttributes, associations } = ArticleModel;

  beforeEach(async () => {
    subject = await factory.create('Article');
  });

  describe('Model', () => {
    it('is expected to have table name "Articles', () => {
      expect(tableName).to.equal('Articles');
    });

    describe('is expected to have property:', () => {
      it('title:string', () => {
        expect(tableAttributes)
          .to.have.own.property('title')
          .that.has.property('type')
          .to.be.instanceOf(DataTypes.STRING);
      });
    });

    it('content:string', () => {
      expect(tableAttributes)
        .to.have.own.property('content')
        .that.has.property('type')
        .to.be.instanceOf(DataTypes.TEXT);
    });
  });

  describe('Instance', () => {
    it('is expected to have a valid factory', () => {
      expect(subject).to.include({
        title: 'My awesome content',
        content: 'Lorem ispum bla bla',
      });
    });

    describe('is expected to have properties', () => {
      it('content', () => {
        expect(subject).to.have.property('content').to.be.a('string');
      });
    });
  });
});
