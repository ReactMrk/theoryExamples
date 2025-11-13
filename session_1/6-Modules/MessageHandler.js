// Named import and importing using an alias:
import { getMessageInfo, filterTodaysMessages as filterToday} from './MessageUtils.js'
// Importing everything with *:
import * as CONSTANTS from "./Constants.js";

const showMessagesFromToday = (allMessages) => {
  const todaysMessages = filterToday(allMessages);

  console.log(CONSTANTS.WELCOME_MESSAGE);
  if(todaysMessages.length > 0)
    todaysMessages.forEach((message) => console.log(getMessageInfo(message)));
  else
    console.log(CONSTANTS.NO_MESSAGES);
}

const messageList = [
  { from: 'Jordi', sentDate: new Date('2025-01-09'), subject: 'Great news!' },
  { from: 'Ana', sentDate: new Date('2025-01-11'), subject: 'An important update' },
  { from: 'Albert', sentDate: new Date('2025-01-11'), subject: 'New dog!' },
]

showMessagesFromToday(messageList);