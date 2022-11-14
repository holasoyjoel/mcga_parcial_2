import style from  './Footer.module.css';

const Footer = ()=>{
    return(
        <div className={`
            ${style.bg_uai}
            ${style.color_ligth}
            ${style.text_align_center}
            ${style.position_absolute}
        `}>
            <h1>Footer</h1>
        </div>
    );
}

export default Footer;