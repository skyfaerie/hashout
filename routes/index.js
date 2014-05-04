exports.create = function(req, res){
				res.render('create', {title: 'HashOut'});
			};

exports.home = function(req, res){
				res.render('home',{title: 'HashOut'});
			};

exports.signin = function(req, res){
				res.render('signin', {title: 'HashOut'})
			};

exports.signup = function(req, res){
				res.render('signup', {title: 'HashOut'})
			};
