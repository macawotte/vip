
let model = require("../models/vip.js");

// ///////////////////////// R E P E R T O I R E    D E S     S T A R S

module.exports.Repertoire = 	function(request, response){
   response.title = 'Répertoire des stars';

   model.ListeLettreVip(function(err, result){  // appel le module test qui exécute la requete SQL
       if (err) {
           console.log(err);
           return;
       }
      response.lettreVip = result; // result contient : [ RowDataPacket { NB: 37 } ]

        response.render('repertoireVips', response);
  } );


};



module.exports.DetailLettre = function(request,response){
  let lettre = request.params.lettre;

  model.listeVip(lettre,function(err, result){  // appel le module test qui exécute la requete SQL
      if (err) {
          console.log(err);
          return;
      }
     response.listeVip = result; // result contient : [ RowDataPacket { NB: 37 } ]
     response.render('repertoireVips', response);

   } );

};
