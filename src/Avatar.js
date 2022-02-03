const Avatar = (props) => {
    return (
        <img style={{width: props.width, borderRadius: props.borderRadius, height: props.height}} alt= {props.alt} src= {props.src}></img>
    )
   
}

export default Avatar;