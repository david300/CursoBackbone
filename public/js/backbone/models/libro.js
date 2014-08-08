var Libro = Backbone.Model.extend({
    urlRoot: "/libros",
    initialize: function(){
        appLibros.fetch();
    },
    defaults: {
        autor: "Desconocido"
    },
    validate: function(atributos){
        if(!atributos.titulo){
            return "Debe ingresar el titulo";
        }
    }
});
