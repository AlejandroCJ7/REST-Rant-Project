const React = require('react')
const Def = require('../default')

function show ({ place }) {
    let comments = (
        <h3 className='inactive'> No comments yet!</h3>
    )
    let rating = (
        <h3 className='inactive'>Not yet rated!</h3>

    )

    if (place.comments.length) {
        let sumRating= place.comments.reduce((total, comment) => {
            return total + comment.stars
        }, 0)
        let averageRating = Math.round(sumRatings / place.comments.length)
        let stars = ''
        for (let i=0; i < averageRating; i++){
            stars+=''
        }
        rating = (
            <h3>
                { stars }
            </h3>
        )
        comments = place.comments.map((c, index) => {
            return (
                <div key={index}>
                    <h2 className='rant mt-2'>
                    { c.rant ? 'rant! ' : 'rave!'}
                    </h2>
                    <h4> {c.content}</h4>
                    <h3>
                        <strong>- { c.author }</strong>
                    </h3>
                    <h4>Rating: { c.stars }</h4>
                    <form action={'/places/${ place._id }/comment/${ c._id }?_method=DELETE'} method='POST'>
                        <input className='mb-2 btn btn-danger' type='submit' value='delete' />
                    </form>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <div className='row'>
                    <div className='col-sm-6'>
                        <img src={place.pic} alt={place.name} />
                        <h3>
                            Located in {place.city}, {place.state}
                        </h3>
                    </div>
                </div>
                <div className='col-sm-6'>
                    <h2>description</h2>
                    <h3>
                        {place.showEstablished()}
                    </h3>
                    <h2>rating</h2>
                    { rating }
                    <h4>
                        serving {place.cuisines}
                    </h4>
                    <a href={'/places/${place._id}/edit'} className='btn btn-warning'>
                        edit</a>
                    <form method='POST' action={'/places/${place._id}?_method=DELETE'}>
                        <button type='submit' className='btn btn-danger'>
                            delete
                        </button>
                    </form>
                </div>
                <div>
                    <form className='row justfiy-content-md-center' action={'/places/${ place._id }/comment'} method='POST'>
                        <div className='form-group col-md-4 mt-2'>
                            <label htmlFor='author'>Name</label>
                            <input className='form-control' type='text' id='author' name='author' placeholder='name here!'/>
                        </div>
                        <div className='form-group col-md-4 mt-2'>
                            <label htmlFor='author'>rating</label>
                            <input className='form-control' type='range' step='0.5' min='1' max='5' id='stars' name='stars'/>
                        </div>
                        <div className='form-group col-md-4 mt-2'>
                            <label htmlFor='rant'>is this a rant?</label>
                            <input type='checkbox' id='rant' name='rant'/>
                        </div>
                        <div className='form-group col-md-4 mt-2'>
                            <label htmlFor='content'>comment:</label>
                            <textarea className='form-control' type='text' id='content' name='content' placeholder='i love this place!'/>
                            <button className='btn btn-primary mt-2' type='submit'>Submit</button>
                        </div>
                    
                    </form>
                </div>
            </main>
        </Def>
    )};

        module.exports = show
    