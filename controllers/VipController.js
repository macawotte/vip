
let model = require("../models/vip.js");
let async=require("async");
var hbs = require('hbs');
hbs.registerHelper('dateFormat', require('handlebars-dateformat'));


// ///////////////////////// R E P E R T O I R E    D E S     S T A R S

module.exports.Repertoire = 	function(request, response){
   response.title = 'Répertoire des stars';

   model.getListeLettreVip(function(err, result){  // appel le module test qui exécute la requete SQL
       if (err) {
           console.log(err);
           return;
       }
      response.lettreVip = result; // result contient : [ RowDataPacket { NB: 37 } ]

        response.render('repertoireVips', response);
  } );


};



module.exports.DetailLettre = function(request,response){
  response.title ="Liste des VIP ";
  let lettre = request.params.lettre;

  async.parallel([
      function(callback){
        model.getListeLettreVip(function(err,result){ callback(null,result) });
      },

      function(callback){
        model.getlisteVip(lettre, function(err2,result2){ callback(null,result2) });
      }
  ],

    function (err,result){
      if(err){
        console.log(err);
        return;
      }

     response.lettreVip = result[0];
     response.listeVip = result[1]; // result contient : [ RowDataPacket { NB: 37 } ]
     response.render('repertoireVipsSelect', response);

   } //fin if
 ); //fin async

};


module.exports.DetailPersonne = function(request,response){
  let idvip = request.params.idvip;

  async.parallel([

      function(callback){
        model.getListeLettreVip(function(err,result){ callback(null,result) });
      },

      function(callback){
        model.getInfosVip(idvip,function(err2,result2){ callback(null,result2) });
      },

      function(callback){
        model.getPhotoProfilVip(idvip,function(err3,result3){ callback(null,result3)});
      }


  ],

    function (err,result){
      if(err){
        console.log(err);
        return;
      }

     response.lettreVip=result[0];
     response.infosVip = result[1][0];
     response.photoProfil = result[2][0];
     response.render('detailVips', response);

   } //fin if
 ); //fin async



};
