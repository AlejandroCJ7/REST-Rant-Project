const React = require ('react')
const Def = require ('./default')

function error404 () {
    return (
        <def>
            <main>
                <h1>404: SORRY PAGE NOT FOUND!</h1>
                <p>Oops, sorry, we cant find this page!!</p>
                <img src="public/images/minion.jpg" alt='Minion'/>
                <div>
                photo by <a href='https://unsplash.com/@alison_wang'>Alison Wang</a> on <a href='https://unsplash.com/photos/mou0S7ViElQ'>UnSplash</a>
                </div>

            </main>
        </def>
    )
}

            
module.exports = error404