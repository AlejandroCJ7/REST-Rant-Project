const { setDefaultResultOrder } = require('dns');
const db = require('../models');



async function seed () {

    let place = await db.place.findOne({ name: 'H-Thai-ML'});

    let comment = await db.comment.create({
        author: 'Fanished Fran',
        rant: false,
        stars: 5.0,
        content: 'wow, simply amazing highly recommended!',
        });


place.comments.push(comment.id);

await place.save();

process.exit();
    }

    seed();