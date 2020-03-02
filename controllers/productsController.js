const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
    products: (req, res) => {

        let log1 = req.session.login;
        res.render('productos', {productos: products,
                                login: log1,
        
        })
    },
    productDetail: (req, res) => {
        let log1 = req.session.login;
        let id = req.params.idProducto
        let producto = products.find(p => p.id == id)
        res.render('productdetails', {
            producto: producto,
            login: log1,
        })
    },
    createForm: (req, res) => {
        let log1 = req.session.login; 
        let userid = req.session.userid;
        
        
        res.render('addproduct', {
			
			login: log1,
		})

    },
    create: (req, res) => {

        	//asignar id //#endregion
		let listanumeros = [];
		let numeromayor = 0 ;

		let idcontrol = products.forEach( product => {
        
       	if (product.id > numeromayor)  {
            numeromayor = product.id ;

       } 
       listanumeros.push(product.id) ;

		})
		

        ++numeromayor;




        let producto = [ 
            {
            id : numeromayor,
            name : req.body.name,
            description : req.body.description,
            category : req.body.category,
            color : req.body.colors,
            price : req.body.price,
            img1: req.body.img1,
            img2: req.body.img2,
            img3: req.body.img3
        }
    ]

        let union = [...products, ...producto];

		let data = JSON.stringify(union);
		fs.writeFileSync(productsFilePath, data);
		

		res.redirect('/');


//res.send(numeromayor);

    },
    edit: (req, res) => {
        let log1 = req.session.login; 
        let userid = req.session.userid;
        let id = req.params.idProducto
        let producto = products.find(p => p.id == id)

        res.render('editProduct', {
            producto: producto,
            login: log1,
            
        })
    },
    update: (req,res) => {
        let prid = req.params.idProducto;
        
        let productlist = products.filter(function (m) {
			return m.id != prid;
		   });

           let producto = [ 
            {
            id : prid,
            name : req.body.name,
            description : req.body.description,
            category : req.body.category,
            color : req.body.colors,
            price : req.body.price,
            img1: req.body.img1,
            img2: req.body.img2,
            img3: req.body.img3
        }            
        ]

        let union = [...productlist, ...producto];


  //      res.send(prid);    
        	let data = JSON.stringify(union);
		fs.writeFileSync(productsFilePath, data);
		

		res.redirect('/');

		
    }
}

module.exports = controller