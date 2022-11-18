const express = require('express');
const dbConn = require('./connection.js');
const port = 5001

const app = express()

// var studs = require('');

// app.use('/students', studs);

// let router = express.Router();

app.get('/',
    (req, res) => {
        res.send('OK! Microservice is running...')
    })


app.use(express.json());

//get all students api
app.get('/allstudents', (req, res) => {
    dbConn.query("SELECT * FROM `students`", (err, result) => { 
        if (err) throw err
        if (result) {
            res.send({
                status: true,
                data: result
            })
        } else {
            res.send({
                status: false,
                message: 'Something went wrong.'
            })
        }
    });
})


//get single students api
app.get('/singlestudent/:id', (req, res) => {
    dbConn.query("SELECT * FROM `students` WHERE id = ?",[req.params.id], (err, result) => { 
        if (err) throw err
        if (result) {
            res.send({
                status: true,
                data: result
            })
        } else {
            res.send({
                status: false,
                message: 'Something went wrong.'
            })
        }
    });
})


//Create new student
app.post('/newstudents', (req,res) => {
    const user_data = req.body;
    dbConn.query('INSERT INTO `students` SET ?', user_data, function (err, result) {
        if (err) throw err
        if (result) {
            res.send({
                status: true,
                message: 'Student Created Successfully'
            })
        } else {
            res.send({
                status: false,
                message: 'Something went wrong.'
            })
        }
    });
});


//update student if not exist create new student
app.put('/newstudents', (req,res) => {
    const user_data = req.body;
    // console.log(user_data);
    dbConn.query("UPDATE `students` SET ? WHERE id="+user_data.id, [user_data], (err, result) => {
       // console.log(result);
        if (err) throw err
        if (result.affectedRows == 0) {

            // res.send({
            //     status: true,
            //     message: 'Student Updated successfully'
            // })
            dbConn.query('INSERT INTO `students` SET ?', user_data, (err, result) => {
                if (err) throw err
                if (result) {
                    res.send({
                        status: true,
                        message: `Student Created Successfully With ID Number ${result.insertId}`
                    })
                } else {
                    res.send({
                        status: false,
                        message: 'Something went wrong.'
                    })
                }
            });

        } else if(result.affectedRows == 1){
            res.send({
                status: true,
                message: 'Student Updated Successfully.'
            })
        } else {
            res.send({
                status: false,
                message: 'Something Went Wrong.'
            })
        }
    });
});


//Delete student
app.delete('/deletestudent/:id', (req,res) => {
    //const user_data = req.body;
    dbConn.query('DELETE FROM `students` WHERE id = ?', [req.params.id],  (err, result) => {
        if (err) throw err
        if (result) {
            res.send({
                status: true,
                message: 'Student Deleted Successfully'
            })
        } else {
            res.send({
                status: false,
                message: 'Something went wrong.'
            })
        }
    });
});


app.listen(port, () => {
    console.log(`App listining on port ${port}`);
})
