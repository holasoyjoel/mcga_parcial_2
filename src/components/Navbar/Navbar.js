import {
    Link,
} from 'react-router-dom';

import style from './Navbar.module.css';

const Navbar = ()=>{
    const links = [
        {
            url:"/",
            text:"Home"
        },
        {
            url:"/recursos",
            text:"Recursos"
        },
        {
            url:"/about",
            text:"About"
        },
    ]
    return(
            <ul className={`
                    ${style.align_item_center} 
                    ${style.display_flex} 
                    ${style.height_100}
                    ${style.justify_content_space_around} 
                    ${style.list_style_none} 
                 `}
            >
                {
                    links.map((link , index) =>{
                        return( 
                            <Link 
                                to={link.url} 
                                key={index} 
                                className={`
                                    ${style.align_item_center}
                                    ${style.bg_uai}     
                                    ${style.bold}
                                    ${style.color_ligth} 
                                    ${style.display_flex}
                                    ${style.height_100}
                                    ${style.justify_content_center}
                                    ${style.padding_2}
                                    ${style.text_decoration_none} 
                                    ${style.text_align_center}
                                    ${style.width_100}
                                    `}>
                                    {link.text}
                            </Link>
                        )
                    })
                }
            </ul>
    );
}

export default Navbar;