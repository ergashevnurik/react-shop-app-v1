import React from 'react'

export default function Header(props) {
    const {countCartItems} = props
    return (
        <header className="row block center">
                <div>
                <a href="/">
                    <h1>MENZ</h1>
                </a>
                </div>
                <div>
                    <a href="/cart">
                        Cart {' '}
                        {countCartItems ? (
                            <button className="badge" className="btn btn-danger">{countCartItems}</button>
                        ) : ('')
                    }
                    </a>{' '}
                    <a href="/signin">Sign in</a>
                </div>
        </header>
    )
}