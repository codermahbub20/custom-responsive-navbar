/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'; 

const Nav = ({route}) => {
  
    return (
        <div>
            <li className="mr-10 hover:bg-yellow-300">
                <a href="{rote.path}">{route.name}</a>
            </li>
        </div>
    );
};

Nav.PropTypes = {
    route: PropTypes.object,
}

export default Nav;