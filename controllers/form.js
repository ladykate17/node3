var formController = {
	form: function(req, res) {
		res.redirect('/success');
	},
	success: function(req, res){
		res.render('success');
	}
};

module.exports = formController;