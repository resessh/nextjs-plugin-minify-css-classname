import cssStyles from './index.module.css';
import scssStyles from './index.module.scss';
import sassStyles from './index.module.sass';

export default function IndexPage() {
  return (
    <main>
      <div className={cssStyles.hello} id="test-css">
        module.css
      </div>
      <div className={scssStyles.hello} id="test-scss">
        module.scss
      </div>
      <div className={sassStyles.hello} id="test-sass">
        module.sass
      </div>
    </main>
  );
}
