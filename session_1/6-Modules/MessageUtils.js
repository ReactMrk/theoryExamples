// Exporting individually
export const getMessageInfo = (message) => {
  return message.from + '\t ' + message.sentDate.toLocaleDateString() + ': ' + message.subject;
}

export const filterTodaysMessages = (messageList) => {
  const today = new Date('2025-01-01');
  return messageList.filter( m =>
    m.sentDate.getDate() === today.getDate() &&
    m.sentDate.getMonth() === today.getMonth() &&
    m.sentDate.getFullYear() === today.getFullYear() );
}