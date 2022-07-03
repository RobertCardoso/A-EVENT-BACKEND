let jwt = require("jsonwebtoken")

let verifyJWT = function(req, res, next){
   let header = req.get("Authorization");
   let signedToken;
   if(header){
    let parts = header.split(" ");
    signedToken = parts[1];
   }

   if(signedToken){
      try{
         let token = jwt.verify(signedToken, process.env.JWT_SECRET);
         req.newtoken = token
         console.log("TOKEN", token )
         next();
      } catch(err){
         res.sendStatus(400);
      }
   } else {
      res.sendStatus(400);
   }
   //  jwt.verify(signedToken, process.env.JWT_SECRET, function(err, token){
   //     if(err){
   //          res.sendStatus(400);
   //     } else{
   //      next();
   //     }
   //  });
}

module.exports = {
   verifyJWT
}