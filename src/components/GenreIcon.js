import Card from "./UI/Card";
import "./GenreIcon.css";

const GenreIcon  = (props) => {
return (
    <Card className="genre-icon">
      <img src={props.icon} alt={""}/> 
    </Card>
)
}

export default GenreIcon;