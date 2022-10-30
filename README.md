# Solar Game Client

Websocket server here (eventually)
Renderer here (eventually)

<br>
<br>

# Commands

- `npm start`
  Start development server.
  <br>
- `npm test`
  Run \*.test.js files via Jest.
  <br>
- `npm run build`
  Minimize/build a deployment version.
  <br>
- `npm run eject`
  Removes the training wheels and gives you config access to bootstrap tools. (Lets try not to use this if we can help it)

<br>
<br>

# Features / TODO

### **_[DONE] : Functional components, core design_**

Easier to use than classes, more features, cleaner code, easy context, easy hooks, more modern. Almost a requirement.

<br>

### **_[DONE] : EventContext w/ Context API_**

A low footprint event manager to allow communication between UI components. The game client needs minimal interactivity between buttons to toggle visibility or send action intent to the server. These async event dispatches provide a secure way to interact while keeping the components compartmentalized.

<br>

### **_[TODO] : FocusContext_**

UI design for games requires a certain orchestration of what buttons do in certain circumstances. Are we focused on the game client? Are other windows open? Should we be chatting instead of moving left? When do we want to actually accept specific inputs? Centralizing this context will remove a lot of headache.

<br>

### **_[TODO] : WebGL / Canvas Renderer_**

This will be an insanely complex aspect. Likely will start with some boilerplate cubes and squares.

<br>

### **_[TODO] : WebSocket Client_**

Server <--> Client communication, player authentication, game data, the usual. Not much to say here.

<br>

### **_[TODO] : WebGL / Canvas Splash screen "Peeker"_**

A minimal version of the Game canvas that renders intriquing scenes from the game. (Builds by top scoring players, random planet environments, etc.)

<br>

### **_TODO : Finishing styles and GUI components_**

Touch up and polish.
