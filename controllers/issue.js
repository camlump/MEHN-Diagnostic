let express = require('express')

let issueRouter = express.Router()



const issueSchema = require('../models/issue')

issueRouter.get('/', (req, res)=> {
    issueSchema.find().then((issues)=>{
        console.log(issues)
        res.render('issues/issues', { issues })
    });
});

issueRouter.get('/new', (req, res)=>{
    res.render('issues/newIssueForm')
})
issueRouter.get('/:issueId', (req, res)=>{
    issueSchema.findById(req.params.id).then((issue)=>{
        console.log(issue)
        res.render('issues/issue', { issue })
    });
});




issueRouter.post('/new', (req, res)=>{
    issueSchema.create(req.body).then(()=>{
        res.redirect('/')
    });
});



issueRouter.get('/:issueID/edit', (req, res)=>{
    issueSchema.findById(req.params.id).then((issue)=>{
        res.render('issues/newIssueForm', { issue })
    });
});




module.exports = issueRouter;