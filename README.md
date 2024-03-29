# Example-Vue-Dashboard

This example project demonstrates how to build a lean single-page dashboard using the Vue.js framework. It illustrates how individual widgets can dynamically load data via REST or Websockets. For the basic design, Bootstrap is used, which enables fast and responsive layouts.

## Features

- **Modern Design**: Crafted with [Bootstrap](https://getbootstrap.com/).
- **Responsive Layout**: Ensures compatibility across devices, from desktops to mobile devices.
- **App Routing**: Manages multiple dashboards and facilitates navigation within the application.
- **Dynamic Side Menu**: Automatically generates the side menu based on router configuration.
- **Data Updating**: Supports data polling via REST for continuous data updates and data synchronization via Websockets for real-time data feeds.
- **Foldable Menu Groups**: Enhances side menu navigability by allowing groups to be expanded or collapsed.
- **Back to Top Button**: Enables users to return to the top of the page with a single click, useful for long pages.

# Install VueCLI

To use this example, first make sure VueCLI is installed on your system. Install VueCLI globally by running the following command in a terminal:

```
npm install -g @vue/cli
```

# Project Setup

After installing VueCLI, you can set up the project. Open a terminal in the project directory and run the following command to install the necessary dependencies:

```
npm install
```

# Compile and Hot-Reload for Development

To start the dashboard in development mode with hot-reload, use:

```
npm run serve
```

This will start a local server where you can view the dashboard in your browser at http://localhost:8080. Changes to the code are automatically applied and immediately visible in the browser.

# Compile and Minify for Production

To prepare the dashboard for deployment in a production environment, use:

```
npm run build
```

Note that you may need to adjust the `publicPath` in `vue.config.js` depending on your environment. The current adjustment is made to display the app from a subfolder of the repository for demonstration purposes.
