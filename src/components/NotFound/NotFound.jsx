import { Link, MainForm, Oops, PageMk, Wrapper } from './NotFound.styled';
import img from '../../servises/269-2694820_career-icon-oops-error-message-404.png';

const NotFoundPage = () => {
  return (
    <MainForm>
      <Wrapper>
        <img src={img} alt="img" />
        <h2>
          <PageMk>Сторінка не знайдена!</PageMk>
        </h2>
        <Link to="/">Повернутись на головну</Link>
      </Wrapper>
    </MainForm>
  );
};

export default NotFoundPage;
