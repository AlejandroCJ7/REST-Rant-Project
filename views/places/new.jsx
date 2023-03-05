const React = require('react')
const Def = require('../default')

function new_form ({ message }) {
  let error = ""  
  if (message) {
    error = (
      <h4 className="alert alert-danger">
      { message }
      </h4>
    )
  }
  
  return (
        <Def>
          <main>
            <h1>Add a New Place</h1>
            { message}
            <form method="POST" action="/places">
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
                    value={new Date().getFullYear()} /> 
                </div>
                <input className="btn btn-primary" type="submit" value="update place" />
                </form>
          </main>
    </Def>
    )
}

module.exports = new_form
