# Countdown-Menubar-Example
# [.\__.]

##About
Countdown app living in menubar. Tested on OS X 10.11.2.

I start this project simply because I need something to remind myself that something is going to happen on winter 2016 and I want to get my notes app done with full Markdown support before them:
> For now Alternote expands some of Markdown entities to rich text. We’re planning to support full Markdown syntax, including code snippets and tables, in version 2.0 (expected to release in Winter 2016).

##Built with great Open Source softwares
* [menubar](https://github.com/maxogden/menubar)
* [Electron](https://github.com/atom/electron)
* [React](https://github.com/facebook/react)
* [Pikaday](https://github.com/dbushell/Pikaday)

##Run
    git clone https://github.com/tinirlove/Countdown-Menubar-Example.git
    npm install Countdown-Menubar-Example
    watchify -t [ babelify --presets [ react ] ] main.jsx -o bundle.js
    npm start

##TODO
* Auto resize window when new item is added
* Simpler date picker for `<input type="date">`
* Persistent Storage
* Icon
* Color Scheme
* Account Sync
* Export
