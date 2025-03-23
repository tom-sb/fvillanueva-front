import NewsView from './news-view';
import { Base, Main } from '../../templates/base';

export default function News() {
  return (
    <Base>
      <Main>
        <NewsView />
      </Main>
    </Base>
  );
}
