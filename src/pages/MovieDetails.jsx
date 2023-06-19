import { useParams } from "react-router-dom";

const MovieDetails = ({id}) => {
     const { id } = useParams();
    return <div>
        <button>Go back</button>
        <img src="" alt="" />
        <p></p>

  </div>;
};

export default MovieDetails;
