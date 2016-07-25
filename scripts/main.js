import React from 'react'
import {render} from 'react-dom'
import {Router, Route, History} from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import h from './helpers'

class App extends React.Component {
    constructor () {
        super()
    }

    render () {
        return (
            <div className='catch-of-the-day'>
                <div className='menu'>
                    <Header tagline='Fresh Seafood Market' />
                </div>
                <Order />
                <Inventory />
            </div>
        )
    }
}

class Header extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <header className='top'>
                <h1>Catch
                <span className='ofThe'>
                    <span className='of'>of</span>
                    <span className='the'>the</span>
                </span>
                Day</h1>
                <h3 className='tagline'><span>{this.props.tagline}</span></h3>
            </header>
        )
    }
}

class Order extends React.Component {
    constructor () {
        super()
    }

    render () {
        return (
            <h2>order</h2>
        )
    }
}

class Inventory extends React.Component {
    constructor () {
        super()
    }

    render () {
        return (
            <h2>inventory</h2>
        )
    }
}

let StorePicker = React.createClass({
    mixins : [History],

    goToStore : function(e) {
        e.preventDefault()

        let storeId = this.refs.storeId.value
        this.history.pushState(null, `store/${storeId}`)
    },

    render : function() {
        return (
            <form className='store-selector' onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>
                <input type='text' ref='storeId' defaultValue={h.getFunName()} required />
                <input type='submit' />
            </form>
        )
    }
})

class NotFound extends React.Component {
    constructor () {
        super()
    }

    render () {
        return (
            <h1>Not found</h1>
        )
    }
}

const routes = (
    <Router history={createBrowserHistory()}>
        <Route path='/' component={StorePicker} />
        <Route path='store/:storeId' component={App} />
        <Route path='*' component={NotFound} />
    </Router>
)

render(routes, document.getElementById('main'))
