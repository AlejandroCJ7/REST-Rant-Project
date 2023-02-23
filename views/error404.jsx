const React = require ('react')
const Def = require ('./default')

function error404 () {
    return (
        <def>
            <main>
                <h1>404: SORRY PAGE NOT FOUND!</h1>
                <p>Oops, sorry, we cant find this page!!</p>
            </main>
        </def>
    )
}

module.exports = error404