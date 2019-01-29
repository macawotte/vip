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


module.exports.ListeLettreVip = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT DISTINCT SUBSTRING(VIP_NOM, 1, 1) AS Initiales FROM vip ORDER BY VIP_NOM ASC";
            // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};



module.exports.listeVip = function(lettre,callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT VIP_NOM, VIP_PRENOM, PHOTO_ADRESSE FROM vip v, photo p WHERE v.VIP_NUMERO = p.VIP_NUMERO AND SUBSTRING(VIP_NOM,1,1) = \""+lettre+"\" AND PHOTO_NUMERO=1;";
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};
