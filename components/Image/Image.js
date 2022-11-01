const Image = (props) => {
    const { id = "", alt = "", src = "" } = props;
    return <img className="className" id={id} src={src} alt={alt} {...props} />;
};
export default Image;
