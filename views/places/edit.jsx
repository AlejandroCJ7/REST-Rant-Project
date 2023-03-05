const React = require('react')
const Def = require('../default.jsx')

function edit_form ({ place }) {
    return (
        <def>
          <main>
            <h1>Edit a Place</h1>
                <form method="POST" action={'/places/${place._id}?_method-PUT'}>
                <div className="form-group">
                  <label htmlFor="name">Place Name</label>
                  <input className="form-control" id="name" name="name" defaultvalue={place.name} required /> 
                </div>
                <div className="form-group">
                  <label htmlFor="pic"Place Picture></label>
                  <input className="form-control" id="pic" name="pic" defaultvalue={place.pic} /> 
                </div>
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input className="form-control" id="city" name="city" defaultvalue={place.city}/> 
                </div>
                <div className="form-group">
                  <label htmlFor="state">state</label>
                  <input className="form-control" id="state" name="state" defaultvalue={place.state}/> 
                </div>
                <div className="form-group">
                  <label htmlFor="cuisines">cuisines</label>
                  <input className="form-control" id="cuisines" name="cuisines" defaultvalue={place.cuisines} required /> 
                </div>
                <div className="form-group col-sm-4">
                  <label htmlFor="founded">founded year</label>
                  <input 
                    type="number"
                    className="form-control" 
                    id="founded" 
                    name="founded" 
                    defaultvalue={place.founded} /> 
                </div>
                <input className="btn btn-primary" type="submit" value="update place" />
                </form>
          </main>
        </def>
    )
}

module.exports = edit_form
