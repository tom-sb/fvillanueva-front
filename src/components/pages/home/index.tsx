import { Base, Main } from '../../templates/base';
import HomeView from './home-view';

export default function Home() {
  return (
    <Base>
      <Main>
        <HomeView />
      </Main>
    </Base>
  );
}
