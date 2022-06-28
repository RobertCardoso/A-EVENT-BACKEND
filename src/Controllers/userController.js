let db = require("../model/db")

let argon = require("argon2")


let jwt = require("jsonwebtoken")

let register = async function(req, res){
 console.log("register")

 let sql = "insert into users(email, pw_hash) values (? , ?)"
 let email = req.body.email
 let password = req.body.password
 let pwHash = await argon.hash(password);

 let params = [email, pwHash]

 db.query(sql, params, function(err, results) {
    if(err){
        console.log("Could not add user", err)
        res.sendStatus(500)
    } else{
        res.sendStatus(204)
    }
 })
};

let login = async function (req, res) {
    console.log("login")

    let email = req.body.email
    let password = req.body.password;

    let sql = "select pw_hash from users where email = ?";
    let params = [email]
    db.query(sql, params, async function(err, results){
        if(err) {
            console.log("Could not get password hash", err)
            res.sendStatus(500)
            return;
        }

        if(results.length > 1){
        console.log("returned more than 1 row for ", email)
        res.sendStatus(500)
        return;
    }

    if (results.length == 0) {
        res.sendStatus(400)
        return
    }


    let hash = results[0].pw_hash;
    let userId = results[0].id
    let goodPassword = await argon.verify(hash, password);

    let token = {
        "email": email,
        "user_id": userId
    };

    if (goodPassword) {
        let signedToken = jwt.sign(token, process.env.JWT_SECRET)
        res.send(signedToken);
    } else {
        res.sendStatus(400);
    }
    })
};


module.exports = {
    register,
    login
}