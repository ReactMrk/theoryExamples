// Named import and importing using an alias:
import { getMessageInfo, filterTodaysMessages as filterToday } from './MessageUtils.js'
// Importing everything with *:
import * as CONSTANTS from "./Constants.js";
// Importing a default export, which doesn't need '{ }' and we can use any name:
import messages from "./MessageList.js";

const showMessagesFromToday = (allMessages) => {
  const todaysMessages = filterToday(allMessages);

  console.log(CONSTANTS.WELCOME_MESSAGE);
  if(todaysMessages.length > 0)
    todaysMessages.forEach((message) => console.log(getMessageInfo(message)));
  else
    console.log(CONSTANTS.NO_MESSAGES);
}

showMessagesFromToday(messages());