
const React = require('react')

const Def = require('./Default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="public/images/healthy-bowl.jpg" alt='Healthy Bowl'/>
                </div>
                photo by <a href='https://unsplash.com/@pwign'>Anh Nguyen</a> on <a href='https://unsplash.com/photos/kcA-c3f_3FE'>UnSplash</a>
                <a href="/places"><button className="btn-primary">Places Page</button></a>

            </main>
        </Def>
    )
}

module.exports = home