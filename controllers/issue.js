let express = require('express')

let issueRouter = express.Router()



const issueSchema = require('../models/issue')

issueRouter.get('/', (req, res)=> {
    issueSchema.find().then((issues)=>{
        console.log(issues)
        res.render('issues/issues', { issues })
    });
});

issueRouter.get('/:issueId', (req, res)=>{
    issueSchema.findById(req.params.id).then((issue)=>{
        console.log(issue)
        res.render('issues/issue', { issue })
    });
});






module.exports = issueRouter;