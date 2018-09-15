'use strict';

const MessageHistory = ({list}) => {
  if (list.length === 0) {
    return null;
  }

  const ChatItem = list.map(item => {
    const ChatMessage = item.type !== 'message' ?
      item.type === 'response' ? Response : Typing : 
        Message;
    return <ChatMessage key={item.id} from={item.from} message={item} />;
  });
  
  return <ul>{ChatItem}</ul>;
}

MessageHistory.defaultProps = {
  list: []
}