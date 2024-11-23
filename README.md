<div align="center">
  <img src="src/assets/mascot-1.png" width="128" height="128" alt="">

Go Phanpy: Claromes private single-user instance
===
</div>

A minimalistic and opinionated GoToSocial web client, forked from [Phanpy](https://github.com/cheeaun/phanpy) and styled with the [Dracula](https://github.com/dracula/dracula-theme) theme.

*Avatar by David Revoy, based on the sloth logo by Anna Abramek for GoToSocial.org.*

## Development

Prerequisites: Node.js 18+

- `npm install` - Install dependencies
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run fetch-instances` - Fetch instances list from [joinmastodon.org/servers](https://joinmastodon.org/servers), save it to `src/data/instances.json`
- `npm run sourcemap` - Run `source-map-explorer` on the production build

## Tech stack

- [Vite](https://vitejs.dev/) - Build tool
- [Preact](https://preactjs.com/) - UI library
- [Valtio](https://valtio.pmnd.rs/) - State management
- [React Router](https://reactrouter.com/) - Routing
- [masto.js](https://github.com/neet/masto.js/) - Mastodon API client
- [Iconify](https://iconify.design/) - Icon library
  - [MingCute icons](https://www.mingcute.com/)
- Vanilla CSS - _Yes, I'm old school._

Some of these may change in the future. The front-end world is ever-changing.

## Self-hosting

This is a **pure static web app**. You can host it anywhere you want.

Two ways (choose one):

### Easy way

Go to [Releases](https://github.com/cheeaun/phanpy/releases) and download the latest `phanpy-dist.zip` or `phanpy-dist.tar.gz`. It's pre-built so don't need to run any install/build commands. Extract it. Serve the folder of extracted files.

### Custom-build way

Requires [Node.js](https://nodejs.org/).

Download or `git clone` this repository. Use `production` branch for *stable* releases, `main` for *latest*. Build it by running `npm run build` (after `npm install`). Serve the `dist` folder.

Customization can be done by passing environment variables to the build command. Examples:

```bash
PHANPY_CLIENT_NAME="Phanpy Dev" \
    PHANPY_WEBSITE="https://dev.phanpy.social" \
    npm run build
```

```bash
PHANPY_DEFAULT_INSTANCE=hachyderm.io \
    PHANPY_DEFAULT_INSTANCE_REGISTRATION_URL=https://hachyderm.io/auth/sign_up \
    PHANPY_PRIVACY_POLICY_URL=https://hachyderm.io/privacy-policy \
    npm run build
```

It's also possible to set them in the `.env` file.

Available variables:

- `PHANPY_CLIENT_NAME` (optional, default: `Phanpy`) affects:
  - Web page title, shown in the browser window or tab title
  - App title, when installed as PWA, shown in the Home screen, macOS dock, Windows taskbar, etc
  - OpenGraph card title, when shared on social networks
  - Client name, when [registering the app for authentication](https://docs.joinmastodon.org/client/token/#app) and shown as client used on posts in some apps/clients
- `PHANPY_WEBSITE` (optional but recommended, default: `https://phanpy.social`) affects:
  - Canonical URL of the website
  - OpenGraph card URL, when shared on social networks
  - Root path for the OpenGraph card image
  - Client URL, when [registering the app for authentication](https://docs.joinmastodon.org/client/token/#app) and shown as client used on posts in some apps/clients
- `PHANPY_DEFAULT_INSTANCE` (optional, no defaults):
  - e.g. 'mastodon.social', without `https://`
  - Default instance for log-in
  - When logging in, the user will be redirected instantly to the instance's authentication page instead of having to manually type the instance URL and submit
- `PHANPY_DEFAULT_INSTANCE_REGISTRATION_URL` (optional, no defaults):
  - URL of the instance registration page
  - E.g. `https://mastodon.social/auth/sign_up`
- `PHANPY_PRIVACY_POLICY_URL` (optional, default to official instance's privacy policy):
  - URL of the privacy policy page
  - May specify the instance's own privacy policy
- `PHANPY_LINGVA_INSTANCES` (optional, space-separated list, default: `lingva.phanpy.social [...hard-coded list of fallback instances]`):
  - Specify a space-separated list of instances. First will be used as default before falling back to the subsequent instances. If there's only 1 instance, means no fallback.
  - May specify a self-hosted Lingva instance, powered by either [lingva-translate](https://github.com/thedaviddelta/lingva-translate) or [lingva-api](https://github.com/cheeaun/lingva-api)
  - List of fallback instances hard-coded in `/.env`
  - [↗️ List of lingva-translate instances](https://github.com/thedaviddelta/lingva-translate?tab=readme-ov-file#instances)
- `PHANPY_IMG_ALT_API_URL` (optional, no defaults):
  - API endpoint for self-hosted instance of [img-alt-api](https://github.com/cheeaun/img-alt-api).
  - If provided, a setting will appear for users to enable the image description generator in the composer. Disabled by default.
- `PHANPY_GIPHY_API_KEY` (optional, no defaults):
  - API key for [GIPHY](https://developers.giphy.com/). See [API docs](https://developers.giphy.com/docs/api/).
  - If provided, a setting will appear for users to enable the GIF picker in the composer. Disabled by default.
  - This is not self-hosted.

### Static site hosting

Try online search for "how to self-host static sites" as there are many ways to do it.

#### Lingva-translate or lingva-api hosting

See documentation for [lingva-translate](https://github.com/thedaviddelta/lingva-translate) or [lingva-api](https://github.com/cheeaun/lingva-api).

## License

[MIT](https://cheeaun.mit-license.org/).
