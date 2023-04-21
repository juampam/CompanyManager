// function js
const db = require('../database/connection')


//const function = {};

function getAllCompanies (req, res) {
  const sql = 'SELECT * FROM companys';
  db.query(sql, (err, result) => {
    if (err) {
	res.send("empty")
    }else{
    	res.send(result);
    }
  });
};

function getCompanyById(req, res){
	params = req.body
	companyid = params.id
	console.log(companyid)
  const sql = `SELECT * FROM companys WHERE id = ${companyid}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

function createCompany(req, res){
  const { comercial_name, business_name,address,city,country, email,phone, NIT, status } = req.body;
  const sql = `INSERT INTO companys (comercial_name, business_name, address, city ,country, email, phone, NIT, status) VALUES ('${comercial_name}', '${business_name}', '${address}', '${city}', '${country}', '${email}', '${phone}','${NIT}','${status}')`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log('Company created successfully');
    res.send(result);
  });
};

function updateCompany  (req, res) {
  const { id,comercial_name, business_name,address,city,country, email,phone, NIT, status } = req.body;
  const sql = `UPDATE companys SET comercial_name = '${comercial_name}', business_name = '${business_name}',address = '${address}',city = '${city}', country = '${country}',phone = '${phone}', email = '${email}', NIT = '${NIT}', status = '${status}' WHERE id = ${id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(`Company with id ${id} updated successfully`);
    res.send(result);
  });
};


function deleteCompany (req, res) {
  const sql = `DELETE FROM companys WHERE id = ${req.body.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(`Company with id ${req.body.id} deleted successfully`);
    res.send(result);
  });
};


module.exports ={
	
	getAllCompanies,
	getCompanyById,
	createCompany,
	updateCompany,
	deleteCompany
}
