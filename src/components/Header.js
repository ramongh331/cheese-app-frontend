import { Link } from "react-router-dom"

export default function Header (props) {
const headerStyle = {
display: "flex",
height: "3rem",
backgroundColor: "black",
alignItems: "center"
}

const textStyle = {
marginLeft: "2rem",
color: "white",
cursor:"pointer"
}

const linkStyle = {
  textDecoration: "none"  
}

    return (
    <div style={headerStyle}>
        <Link to="/" style={linkStyle}>
        <h2 style={textStyle}>Home</h2>
        </Link>
    </div>
    )
}