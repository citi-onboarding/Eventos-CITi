const path = require('path');
const keystone = require('keystone');
const cors = require('cors');

const Post = keystone.list('Posts');
const Events = keystone.list('Events');

const BlogPost = keystone.list('BlogPost');

const Mission = keystone.list('WhyWeDoIt');

const Banner = keystone.list('Banner');

module.exports = (app) => {
    app.use(cors());

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    app.get('/api/posts', (req, res) => {
        Post.model.find((err, data) => {
            if (err) {
                res.status(500).send('DB Error');
            } else {
                res.send(data);
            }
        });
    });

    app.get('/api/events', (req, res) => {
        Events.model.find((err, data) => {
            if (err) {
                res.status(500).send('DB Error');
            } else {
                res.send(data);
            }
        });
    });

    app.get('/api/blogpost', (req, res) => {
        BlogPost.model.find((err, data) => {
            if (err) {
                res.status(500).send('DB Error');
            } else {
                res.send(data);
            }
        });
    });



    app.get('/api/why-we-do-it', (req, res) => {
        Mission.model.find((err, data) => {
            if (err) {
                res.status(500).send('DB Error');
            } else {
                res.send(data);
            }
        });
    });

    app.get('/api/banner', (req, res) => {
        Banner.model.find((err, data) => {
            if (err) {
                res.status(500).send('DB Error');
            } else {
                res.send(data);
            }
        });
    });

    app.post('/api/subscription', async(req, res) => {
        try {
            const { name, email, subject, message } = req.body;

            const body = `
        Nome: ${name}
        Email: ${email}
        Mensagem: ${message}
      `;


            res.status(200).send('Everything went good');
        } catch (error) {
            res.status(500).send('Something went wrong');
            console.log(error);
        }
    });

    app.get('*', (req, res) => {
        res.redirect('/');
    });
};