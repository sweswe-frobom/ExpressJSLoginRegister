var exports = module.exports = {}
 //for register
exports.signup = function(req, res) {
 
    res.render('signup');
 
}
//for signing in
exports.signin = function(req, res) {
 
    res.render('signin');
 
}
//for home page
exports.dashboard = function(req, res) {
 
    res.render('dashboard');
 
}

//for profile
exports.profile = function(req, res) {
 
    res.render('profile');
 
}


exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/');
 
    });
 
}