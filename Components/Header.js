//will create the header for my app
import React from 'react'

class Header extends React.Component {

    render() {
        return(
            <div>
                <img id='poke-image' src={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png'} />
                <br />
            </div>
        )
    }
}
export default Header