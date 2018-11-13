/**
 * CONFIGURATION DE L'APPLICATION 
 * Il faut créer "_development.js" et "_production.js"
 * dans le répertoire "config" à partir de ce fichier.
 **/

const defaultConfig = {
    zohoLogin: ``,
    zohoPsswd: ``,
    zohoScope: `ZohoRecruit`,
    zohoToken: ``, // laisser a vide  
    zohoUrlAccount: function() {},
    zohoUrlRecruit: function() {},
    urlBack: ``
}

export default defaultConfig
