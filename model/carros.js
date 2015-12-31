Carros = new Mongo.Collection('carros');

Carros.allow({
  insert: function(userId, carro) {
    carro.createdAt = new Date();
    carro.nome_sort = carro.nome.toLowerCase();
    return true;
  },
  update: function(userId, carro, fields, modifier) {
    carro.updatedAt = new Date();
    carro.nome_sort = carro.nome.toLowerCase();
    return true;
  },
  remove: function(userId, carro) {
    return true;
  }
});
