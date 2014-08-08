

var Libreria = Backbone.View.extend({
    el: "#app",
    initialize: function(){
        appLibros.on("add", this.mostrarLibro);
        appLibros.fetch();
    },
    mostrarLibro: function(modelo){
        console.log(modelo.toJSON());
        var vista = MostrarLibroView({ model: modelo });
        //$(".libros").append(vista.render().$el);
    }
});

var MostrarLibroView = Backbone.View.extend({
    template: _.template($("#tplMostrarLibro").html()),
    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

var appView = new Libreria();