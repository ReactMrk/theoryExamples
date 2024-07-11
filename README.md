Create and push a new branch using **git checkout -b kata-2-your-name** and **git push -u origin kata-2-your-name**

# **Client management with react and hooks**

The idea of our company is to create a large application to manage clients. Therefore, Client management, from the first session, has been redeveloped using React due to its scalability.

Use correct node version: **nvm use**

Install dependencies: **npm install**

Run app: **npm run dev**

**Tip:** Take a look at App.css file, the styles needed for these exercises are already done

**Exercise 1.**

The client management app is not working. The client list is not being updated when a new client is added. However, when the website is reloaded, all clients are displayed correctly. Do you know why?

The principal engineer tells you to fix the issue by creating a context for the entire app and saving the list of clients into this context. It's not a problem that clients are lost when wesite is reloaded because in a future an API will be used to get them.


**Exercise 2.**

Even tough, Client management is working now, an improvement has been required. Once a client is added to the list, the fields are not cleaned.

The principal engineer tells you to fix the issue using useReduce, in order to avoid a set of functions, that modify the state, being triggered in a row.

Principal engineer would like to avoid this bad practise:<br />
**setName(''); <br />
setEmail(''); <br />
setPhone(''); <br />
setAddress(''); <br />**

Could you also create a clear button?

**Exercise 3.**

After some time on production, a new requirement has been requested. When agent adds a new client and the list of clients is large, there is no feedback, so agents are not sure if the client has been added correclty until they scroll down the entire list.

To do this improvement, principal engineer suggested you to create a new component with a use effect that displays an alert on the top of the list when a new client is added. The alert should be displayed for 2 seconds.

**Extra:** principal engineer saids that this hook maybe needed for other components. Once this effect is working, could you refactor it to be a custom hook?

