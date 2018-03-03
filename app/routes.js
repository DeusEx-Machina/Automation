/**
 * Created by TheTower on 3/1/2018.
 */
var Inventory = require('./models/inventory');

function getItems(res) {
	Inventory.find(function (err, items) {

		// if there is an error retrieving, send the error. nothing after res.send(err) will execute
		if (err) {
			res.send(err);
		}

		res.json(items); // return all items in JSON format
	});
};

module.exports = function (app) {

	// api ---------------------------------------------------------------------
	// get all items
	app.get('/api/items', function (req, res) {
		// use mongoose to get all items in the database
		getItems(res);
	});

	// create an item and send back all items after creation
	app.post('/api/items', function (req, res) {

		// create an item, information comes from AJAX request from Angular
		Inventory.create({
			            text: req.body.text,
						url: req.body.url,
						category: req.body.category,
			            done: false
		            }, function (err, item) {
			if (err)
				res.send(err);

			// get and return all the items after you create another
			getItems(res);
		});

	});

	// delete a todo
	app.delete('/api/items/:item_id', function (req, res) {
		Inventory.remove({
			            _id: req.params.item_id
		            }, function (err, item) {
			if (err)
				res.send(err);

			getItems(res);
		});
	});

	// application -------------------------------------------------------------
	app.get('*', function (req, res) {
		res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};