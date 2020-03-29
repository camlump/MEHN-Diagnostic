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

issueRouter.post('/', (req, res)=>{
    issueSchema.create(req.body).then(()=>{
        res.redirect('/')
    });
});


issueRouter.get('/:id', (req, res)=>{
    issueSchema.findById(req.params.id).then(issue =>{
        console.log(issue)
        res.render('issues/issue', { issue });
    });
});

issueRouter.get('/:id/edit', (req, res)=>{
    issueSchema.findById(req.params.id).then(issue =>{
        res.render('issues/editIssueForm', { issue })
     });
});


issueRouter.delete('/:id', (req, res)=>{
    issueSchema.findByIdAndDelete(req.params.id).then(()=>{
        res.redirect('/')
    })
})


issueRouter.put('/:id', (req, res)=>{
    issueSchema.findByIdAndUpdate(req.params.id, req.body).then(issue=>{
        res.redirect('/' + issue.id);
    });
});





module.exports = issueRouter;