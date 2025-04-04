import ContactUsView from './contact-us-view';
import { Base, Main } from '../../templates/base';

export default function News() {
  return (
    <Base>
      <Main>
        <ContactUsView />
      </Main>
    </Base>
  );
}
