const Notice = ({ backgroundColor, message }: any) => (
  <div
    style={{ backgroundColor: backgroundColor }}
    className="text-center py-2"
  >
    <p style={{ color: message.color }}>{message.content}</p>
  </div>
);

export default Notice;
