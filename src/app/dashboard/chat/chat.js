import "./chat.scss";

const Chat = () => {
  return <div className="chat-container">Chat Module</div>;
};

export default {
  routeProps: {
    path: "/dashboard/chat",
    component: Chat,
  },
  name: "Chat",
};
