let db = require('../configDb');


module.exports.test = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT COUNT(*) AS NB FROM vip ;";
              // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};


module.exports.getListeLettreVip = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT DISTINCT SUBSTRING(VIP_NOM, 1, 1) AS Initiales FROM vip ORDER BY VIP_NOM ASC";
            // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};



module.exports.getlisteVip = function(lettre,callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT v.VIP_NUMERO,VIP_NOM, VIP_PRENOM, PHOTO_ADRESSE FROM vip v, photo p WHERE v.VIP_NUMERO = p.VIP_NUMERO AND SUBSTRING(VIP_NOM,1,1) = \""+lettre+"\" AND PHOTO_NUMERO=1";
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};


module.exports.getInfosVip = function(idvip,callback){
    db.getConnection(function(err,connexion){
      if(!err){
        let sql ="SELECT * FROM vip WHERE VIP_NUMERO ="+idvip+";";
        connexion.query(sql, callback);
        connexion.release();
      }
    });
};


module.exports.getPhotoProfilVip = function(idvip,callback){
    db.getConnection(function(err,connexion){
      if(!err){
        let sql ="SELECT PHOTO_ADRESSE FROM photo WHERE VIP_NUMERO ="+idvip+";";
        connexion.query(sql, callback);
        connexion.release();
      }
    });
};


module.exports.getNationalite = function(idvip,callback){
    db.getConnection(function(err,connexion){
      if(!err){
        let sql ="SELECT PHOTO_ADRESSE FROM photo WHERE VIP_NUMERO ="+idvip+";";
        connexion.query(sql, callback);
        connexion.release();
      }
    });
};
