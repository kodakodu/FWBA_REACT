import React from 'react'

import MiniDrawer from './MiniDrawer'

const Layout = props => {
    return (
        <div>
            <MiniDrawer>
                { props.children }
            </MiniDrawer>
        </div>
    )
}

export default Layout