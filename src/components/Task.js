export default function Task({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}) {
  return (
    <div className="list-item">
      <input type="text" />
    </div>
  );
}