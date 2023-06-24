import { useNavigate } from 'react-router-dom';
import { Link, MainForm, PageMk, Wrapper } from './NotFound.styled';
import img from '../../servises/269-2694820_career-icon-oops-error-message-404.png';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const hadleClick = () => navigate('/', { replace: true });
    

  return (
    <MainForm>
      <Wrapper>
        <img src={img} alt="img" />
        <h2>
          <PageMk>Сторінка не знайдена!</PageMk>
        </h2>
        <Link onClick={hadleClick}>Go to main</Link>
      </Wrapper>
    </MainForm>
  );
};

export default NotFoundPage;
