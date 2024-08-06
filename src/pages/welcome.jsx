import './welcome.css';

import logo from '../assets/mascot-2.png';

import Link from '../components/link';
import states from '../utils/states';
import useTitle from '../utils/useTitle';

const {
  PHANPY_DEFAULT_INSTANCE: DEFAULT_INSTANCE,
  PHANPY_WEBSITE: WEBSITE,
  PHANPY_PRIVACY_POLICY_URL: PRIVACY_POLICY_URL,
  PHANPY_DEFAULT_INSTANCE_REGISTRATION_URL: DEFAULT_INSTANCE_REGISTRATION_URL,
} = import.meta.env;
const appSite = WEBSITE
  ? WEBSITE.replace(/https?:\/\//g, '').replace(/\/$/, '')
  : null;
const appVersion = __BUILD_TIME__
  ? `${__BUILD_TIME__.slice(0, 10).replace(/-/g, '.')}${
      __COMMIT_HASH__ ? `.${__COMMIT_HASH__}` : ''
    }`
  : null;

function Welcome() {
  useTitle(null, ['/', '/welcome']);
  return (
    <main id="welcome">
      <div class="hero-container">
        <div class="hero-content">
          <h1>
            <img src={logo} alt="" width="200" />
          </h1>
          <p>
            <Link
              to={
                DEFAULT_INSTANCE
                  ? `/login?instance=${DEFAULT_INSTANCE}&submit=1`
                  : '/login'
              }
              class="button"
            >
              {DEFAULT_INSTANCE ? 'Log in' : 'Log in'}
            </Link>
          </p>
          {DEFAULT_INSTANCE && DEFAULT_INSTANCE_REGISTRATION_URL && (
            <p>
              <a href={DEFAULT_INSTANCE_REGISTRATION_URL} class="button plain5">
                Sign up
              </a>
            </p>
          )}
        </div>
        {(appSite || appVersion) && (
          <p class="app-site-version">
            <small>
              {appSite} {appVersion}
            </small>
            <br />
            <small>
              Avatar by david revoy, based on the sloth logo by Anna Abramek for
              GoToSocial.org
            </small>
          </p>
        )}
        <p>
          <a href="https://github.com/cheeaun/phanpy" target="_blank">
            Built with Phanpy
          </a>{' '}
          by{' '}
          <a
            href="https://go.claromes.com/@claromes"
            target="_blank"
            onClick={(e) => {
              e.preventDefault();
              states.showAccount = 'claromes@go.claromes.com';
            }}
          >
            @claromes
          </a>
          .{' '}
          <a href={PRIVACY_POLICY_URL} target="_blank">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </main>
  );
}

export default Welcome;
