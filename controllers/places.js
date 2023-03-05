const router = require("express").Router();
const db = require("../models");

router.get("/new", (req, res) => {
    res.render("places/new");
});

router.post("/", (req, res) => {
  db.Place.create(req.body)
    .then (() => {
      res.redirect ("/places");
    })
    .catch((err) => {
      if (err && err.name == "ValidationError") {
        let message = "Validation Error: ";
        for (var field in err.errors) {
          message += '${field) was ${err.errors[field].value}. ';
          message += '$(err.errors[field].message}';
       }  
      res.render ("places/new", { message });
    } else {
      res.render("error404");
    }
  });
});  
  
router.get("/", (req, res) => {
    db.Place.find()
      .then((places) => {
        res.render("places/index", { places });
      })
      .catch ((err) => {
        console.log(err);
        res.render ("Error");
      });
});
  router.get ("/:id/edit", (req, res) => {
      db.Place.findById(req.params.id)
        .then((place) => {
          res.render('places/edit', { place });
        })
        .catch((err) => {
          console.log(err);
          res.render('Error');
        });
      });
      
      
      router.get('/:id', (req, res) => {
        db.Place.findById(req.params.id)
        .populate('comments')
        .then((place) => {
          console.log(place.comments);
          res.render('places/show', { place });
        })
        .catch((err) => {
          console.log(err);
          res.render('Error');
        });
      });

      router.put('/:id', (req, res) => {
        db.Place.findByIdAndUpdate({_id: req.params.id }, req.body)
        .then(() => {
          res.redirect('/places/$(req.params.id)');
        })
        .catch((err) => {
          console.log(err);
          res.render('Error');
        });
      });

      router.delete('/:id', (req, res) => {
        db.Place.fiindByIdAndDelete(req.params.id)
        .then(() => {
          res.status(303). redirect('/places');
        })
        .catch((err) => {
          cocnsole.log(err);
          res.render('Error');
        });
      });

      router.post("/:[d/comment", (req, res) => {
        console.log (req. body);
        reg.body.rant = reg.body.rant ? true : false;
        db.Place.findById (req.params.id)
          .then((place) => {
           db.Comment.create(req.body)
              .then((comment) => {
                place.comments.push(comment.id);
                place.save().then(() => {
                  res.redirect('/places/${reg-params.id}');
              });
            })
              .catch((err) => {
                res.render("error404");
              });
          })    
        .catch((err) => {
          res.render("error404");
        });
      });
        router.delete("/id/comment/:rantId",(req,res) => {
          db. Comment. findByIdAndDelete(req.params.rantId)
        .then(() => {
        res.redirect('places/${req-params.Id}');
        })
        .catch((err) => {
        console.log( "PLACE", err);
        res.render("Error");
        });
      });
        // TODO BUG FIX ROUTE
        router.delete("/:id/coment/:commentId", async (req,res) => {
        try {
        await db.Comment.findByIdAndDelete(req.params.commentId);
        let place = await db.Place.findById(req.params.id);
        place.comments.pull('${req.parans.commenti}');
        place.save();
        res.status(410).redirect('/places/$(req.params.id}');
        } catch (err) {
          console.log('err', err);
          res.status(404).render('error404');
        }
      });

      module.exports = router;