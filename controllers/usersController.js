const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const { check, validationResult, body } = require('express-validator')

const db = require('../database/models');
const sequelize = db.sequelize;



const userController = {
	create: function (req, res) {
		db.Usuarios.create ({
			nombre: req.body.nombre,
			lastname: req.body.lastname,
			email: req.body.email,
			password: req.body.password,
			avatar: req.body.avatar,
			category: req.body.category
		});

		if (!result.isEmpty()) {
			return res.render('register', {
				errors: result.errors,
				data: req.body,
				login: log1
			})
		}
		
		//asignar id //#endregion
		let listanumeros = [];
		let numeromayor = 0 ;

		let idcontrol = usersf.forEach( users => {
        
       	if (users.id > numeromayor)  {
            numeromayor = users.id ;

       } 
       listanumeros.push(users.id) ;

		})
		


		let idp = numeromayor+1;


		let pwduser = bcrypt.hashSync(req.body.password, 10);

		//controlar si selecciono o no avatar

		if(req.files.length <1){
		
			var addUser = [
				{
					"id": idp,
					"name": req.body.firstname,
					"lastname": req.body.lastname,
					"email": req.body.email,
					"password": pwduser,
					"avatar": "default",
					"category": 1
					
				   }
			
			
			
			]
	
		}else {
			
	
			var addUser = [
				{
					"id": idp,
					"name": req.body.firstname,
					"lastname": req.body.lastname,
					"email": req.body.email,
					"password": pwduser,
					"avatar": req.files[0].filename,
					"category": 1
					
				   }
			
			
			
			]

		}	
	
		
		

		let union = [...usersf, ...addUser];

		let data = JSON.stringify(union);
		fs.writeFileSync(usersFilePath, data);
		

		res.redirect('/users/login');



	},



	login: (req, res) => {
		// Do the magic
	
let	emailuser = req.body.email;

	let selectuser = usersf.filter(function (m) {
         return m.email === emailuser;
        });

	let	pwd = selectuser[0].password;
	let pwdp = req.body.password;
	let iduser = selectuser[0].id;	

	let checkuser = bcrypt.compareSync(pwdp, pwd);

if(checkuser == true) {

	req.session.login = true;

	req.session.userid = iduser;
	req.session.class = selectuser[0].category;

		res.redirect('/');

//	res.send(iduser);
//		res.send('contraseña correcta');

}else {

	res.send('contraseña incorrecta')

}


//	res.send(pwd);




	},

	//perfil de usuario

	details: (req, res) => {

		let log1 = req.session.login; 
		let userid = req.session.userid;

		let selectuser = usersf.filter(function (m) {
			return m.id == req.params.id;
		   });
	
		   
		   res.render('userdetails', {
			user: selectuser[0],
			login: log1,
		})

		
	 


	},






	panel: (req, res) => {
		let log1 = req.session.login; 
		let userid = req.session.userid;
		let classuser = req.session.class;

		res.render('panel', {
			userid: userid,
			login: log1,
			classuser: classuser,
		})



	},







	edit: (req, res) => {
		// Do the magic
		db.Usuarios.finByPk(req.params.id)
			.then(function(usuario){
				res.render("useredit",
				{usuario:usuario});
			})
		
	},

	update: (req, res, next) => {
		db.Usuarios.update({
			nombre: req.body.nombre,
			lastname: req.body.lastname,
			email: req.body.email,
			password: req.body.password,
			avatar: req.body.avatar,
			category: req.body.category
		}, {
			where:{
				id:req.params.id
			}
		})
		
			res.redirect('/');		


	},



	editpwd: (req, res) => {
		// Do the magic
		let log1 = req.session.login;
		let userid = req.session.userid;
		res.render('userpwdedit', {
			userid: userid,
			login: log1,
		})
	},



	updatepwd: (req, res) => {
		let userid2 = req.params.id;

		let selectuser = usersf.filter(function (m) {
			return m.id == userid2;
		   });

		   let	pwd = selectuser[0].password;


		   let pwdp = req.body.opassword;
		   let iduser = selectuser[0].id;	
	   
		   let checkuser = bcrypt.compareSync(pwdp, pwd);
	   
	   if(checkuser == true) {
	   
		let pwduser = bcrypt.hashSync(req.body.npassword, 10);
	   
		let userlist = usersf.filter(function (m) {
			return m.id != userid2;
		   });
		
		   
		   let modificar = [
			{
				"id": userid2,
				"name": selectuser[0].name,
				"lastname": selectuser[0].lastname,
				"email": selectuser[0].email,
				"password": pwduser,
				"avatar": selectuser[0].avatar,
				"category": selectuser[0].category
			   }
		
		
			]
			
		
			let union = [...userlist, ...modificar];
			
			let data = JSON.stringify(union);
			fs.writeFileSync(usersFilePath, data);	


		res.send('contraseña cambiada')
	   
	   //	res.send(iduser);
	   //		res.send('contraseña correcta');
	   
	   }else {
	   
		   res.send('contraseña incorrecta')
	   
	   }


//	 res.send(selectuser);


	},






	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;