const express = require('express');
const router = express.Router();
const formidableMiddleware = require('formidable');
const { where } = require('sequelize');
const model = require('../models/index.js');
const Post = model.post;
const Role = model.role_user;


// All
router.get('/api/posts', (request, response) => {
    Post.findAll().then(result => {
        response.status(200).json({data: result});
    }).catch(err => {
        console.error(err);
        throw err;
    });
});

// Get By ID
router.get('/api/posts/:id', (request, response) => {
    Post.findByPk(request.params.id).then(result => {
        if(result == null) {
            response.status(404).json({data: {}});
            return;
        }
        response.status(200).json({data: result});
    }).catch(err => {
        console.error(err);
        throw err;
    });
});

// Create
router.post('/api/posts', (request, response) => {
    const form = formidableMiddleware({ });

    form.parse(request, (err, fields, files) => {
        if (err) {
            next(err);
            return;
        };

        Post.create(fields).then(result => {
            response.status(201).json({
                message: "Created post successfully",
                payload: fields
            });
        });

    });
});

// Update
router.put('/api/posts/:id', (request, response) => {
    const form = formidableMiddleware({ });

    form.parse(request, (err, fields, files) => {
        if (err) {
            next(err);
            return;
        };

        Post.findByPk(request.params.id).then(result => {
            if(result == null) {
                response.status(404).json({data: {}});
                return;
            }

            Post.update(fields, {where: {id: request.params.id}}).then(result => {
                response.status(200).json({data: result});
            }).catch(err => {
                console.error(err);
                throw err;
            });
            
        }).catch(err => {
            console.error(err);
            throw err;
        });

    });
});

// Delete
router.delete('/api/posts/:id', (request, response) => {
    Post.findByPk(request.params.id).then(result => {
        if(result == null) {
            response.status(404).json({data: {}});
            return;
        }

        Post.destroy({where: {id: request.params.id}}).then(result => {
            response.status(204).json({data: {}});
        });
        
    }).catch(err => {
        console.error(err);
        throw err;
    });
});

// All Role
router.get('/api/role', (request, response) => {
    Role.findAll().then(result => {
        response.status(200).json({data: result});
    }).catch(err => {
        console.error(err);
        throw err;
    });
});

// Get By ID Role
router.get('/api/role/:id', (request, response) => {
    Role.findByPk(request.params.id).then(result => {
        if(result == null) {
            response.status(404).json({data: {}});
            return;
        }
        response.status(200).json({data: result});
    }).catch(err => {
        console.error(err);
        throw err;
    });
});

// Create Role
router.post('/api/role', (request, response) => {
    const form = formidableMiddleware({ });

    form.parse(request, (err, fields, files) => {
        if (err) {
            next(err);
            return;
        };

        Role.create(fields).then(result => {
            response.status(201).json({
                message: "Created post successfully",
                payload: fields
            });
        });

    });
});

// Update Role
router.put('/api/role/:id', (request, response) => {
    const form = formidableMiddleware({ });

    form.parse(request, (err, fields, files) => {
        if (err) {
            next(err);
            return;
        };

        Role.findByPk(request.params.id).then(result => {
            if(result == null) {
                response.status(404).json({data: {}});
                return;
            }

            Role.update(fields, {where: {id: request.params.id}}).then(result => {
                response.status(200).json({data: result});
            }).catch(err => {
                console.error(err);
                throw err;
            });
            
        }).catch(err => {
            console.error(err);
            throw err;
        });

    });
});

// Delete Role
router.delete('/api/role/:id', (request, response) => {
    Role.findByPk(request.params.id).then(result => {
        if(result == null) {
            response.status(404).json({data: {}});
            return;
        }

        Role.destroy({where: {id: request.params.id}}).then(result => {
            response.status(204).json({data: {}});
        });
        
    }).catch(err => {
        console.error(err);
        throw err;
    });
});

module.exports = router;