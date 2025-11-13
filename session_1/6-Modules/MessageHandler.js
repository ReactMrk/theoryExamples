// Importing in another module:
import { getMessageInfo, filterTodaysMessages } from './MessageUtils.js'
// Importing WELCOME_MESSAGE with an alias:
import { NO_MESSAGES, WELCOME_MESSAGE as WELCOME} from "./Constants.js";

const showMessagesFromToday = (allMessages) => {
  const todaysMessages = filterTodaysMessages(allMessages);

  console.log(WELCOME);
  if(todaysMessages.length > 0)
    todaysMessages.forEach((message) => console.log(getMessageInfo(message)));
  else
    console.log(NO_MESSAGES);
}

const messageList = [
  { from: 'Jordi', sentDate: new Date('2025-01-09'), subject: 'Great news!' },
  { from: 'Ana', sentDate: new Date('2025-01-11'), subject: 'An important update' },
  { from: 'Albert', sentDate: new Date('2025-01-11'), subject: 'New dog!' },
]

showMessagesFromToday(messageList);