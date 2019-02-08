# Why

> This is to demonstrate how to integrate a Forge Viewer PWA ([Progressive Web App](https://developers.google.com/web/progressive-web-apps/) that enables Forge Viewer to run offline) into a Xamarin PWA (Xamarin Forms published to [WebAssembly](https://developer.mozilla.org/en-US/docs/WebAssembly) that runs in browsers). Such a Progress Web approach makes near native, pre-installed user experience possible across diverse devices and platforms, with a view to mitigate the limitations of Forge Viewer being WebGL based (H5 implementation only) and reliant on server-side dependencies requiring Internet access.

## Guiding Concepts/Principles

- Progressive Web App:
- Service Worker and Cache API with Forge Viewer:
- WebAssembly:

# What

Either component is self-contained and can be integrated or operate separately on their own.

- `./node`: Sample Forge Viewer PWA and Node.js backend to host and serve access tokens. See README [here](./node/).
- `./vs`: Xamarian Forms and WebAssembly publisher. See README [here](./vs/).

# How

- Use (modern) browser native Service Worker and Cache API to cache upon initialization all contents and dependencies to achieve pre-installed user experience. Read up on this [blog](https://forge.autodesk.com/blog/disconnected-workflows) for more about using Service Worker and Cache API with Forge Viewer.
- Serve the app statically with your fave web server. Visit the URL in a Progressive Web App aware mobile browser which will prompt to save a shortcut to the home screen. Launch the app with the shortcut for native-app experience.
- Build the rest of your app with Xamarin.Forms for unified cross device/platform experience. Then publish to app stores and also as WebAssembly module for your PWA release to make installation an URL away!

# Prerequisites

- Visual Studio 2017 or above
- Node.js
- [Modern browser supportive of Service Worker and Cache API](https://jakearchibald.github.io/isserviceworkerready/)

# Credits
Bryan Huang<br/>
[Autoesk Forge](https://forge.autoesk.com) Partner Development






