# Description

> Sample Forge Viewer PWA to visualize a model based on its `urn`, with all its contents and dependencies and cached upon initialization to achieve pre-installed, near native user experience.

# Getting Started

## Prerequisites
- Node.js
- [Modern browser](https://jakearchibald.github.io/isserviceworkerready/)

## Usage
- Clone this repo and navigate to `./node`
- Install the dependencies:

  ```
  npm install
  ```

- Set up environment:

  ```
  export FORGE_CLIENT_ID = 'Your Forge app Client ID'
  export FORGE_CLIENT_SECRET = 'Your Forge app Client Secret'
  export FORGE_URN = 'ObjectID of your model, no base64 encoding required'
  ```

- Run the server:


  ```
  npm start
  ```

- Test in your browser on mobile and desktop devices. You might need to serve the app in a SSL/TLS(https) context to comply with browser level security measures:

![](https://user-images.githubusercontent.com/10786558/52549857-4b592a80-2e10-11e9-9c2a-aa45e92929b9.PNG)

- If a manifest is provided in the header your PWA aware browser might prompt to save a shortcut, so the native app experience is complete:
![](https://user-images.githubusercontent.com/10786558/52549456-3085b680-2e0e-11e9-8753-53a0a6c746bc.png)
![](https://user-images.githubusercontent.com/10786558/52549486-5448fc80-2e0e-11e9-95d2-0dde7c1d6f32.png)

# Further Considerations

-
-


# Trouble-shooting

- To unregister the service worker for trouble shooting purposes, use below in the browser console (for mobile devices use remote platform specific debugging options):

  ```
  navigator.serviceWorker.getRegistrations().then(registrations => registrations.find(r=>r.active.scriptURL=='http://url/to/your/script').unregister())
  ```


- Your browser might refuse to execute the Service Worker if the app is served in an unsafe conext (http). Run a local https enabled server, deploy the app to a https enabled server (e.g. Heroku/AWS/Azure etc) or use a channeling service such as `ngrok`.
