const Todo = require("../models/Todo");

module.exports = app => {
	var data = [{ item: "Learn React" }, { item: "Learn JEE" }];

	//listing the todos
	app.get("/todo", (req, res) => {
		Todo.find({})
			.then(data => {
				res.render("todo", { data: data });
			})
			.catch(err => {
				if (err) return err;
			});
	});

	//creating the todos
	app.post("/todo", (req, res) => {
		const newToDo = new Todo(req.body);

		newToDo
			.save()
			.then(data => {
				res.json(data);
			})
			.catch(err => {
				if (err) return err;
			});
	});

	//delete the todo
	app.delete("/todo/:item", (req, res) => {
		var item = req.params.item;
		Todo.deleteOne({ item: item.replace(/\-/g, " ") })

			.then(data => {
				res.json(data);
			})
			.catch(err => {
				if (err) return err;
			});
	});
};
