# Description

> Sample Xamarin Forms published to WebAassembly as a PWA for pre-installed, near native app experience by simply browsing to an URL in a modern PWA capable/aware browser.

# Getting Started

## Prerequisites
- Visual Studio 2017 with Xamarin Development enabled
- [Modern browser](https://jakearchibald.github.io/isserviceworkerready/)

## Usage
- Clone this repo and open the solution in `./vs` on Visual Studio
- Restore the NuGet depenedencies
- Set up environment:
![](https://user-images.githubusercontent.com/10786558/52549480-4d21ee80-2e0e-11e9-9d7a-4fba723ede3d.PNG)

- Design your app. Can use the Xamarin Form Previewer:
![](https://user-images.githubusercontent.com/10786558/52549469-3f6c6900-2e0e-11e9-9c66-673bf2a9f835.PNG)


# Further Considerations

- Embed the Viewer PWA in your Xamarin native app. Both WebView(Android) and WkWebView(iOS) support the Service Worker API so it's possible to wrap your PWA in a WebView - with the exception that the cache is not shared by the native browsers.


# Trouble-shooting

- Use Xamarin.Forms 2.5.x to avoid assembly missing errors.
