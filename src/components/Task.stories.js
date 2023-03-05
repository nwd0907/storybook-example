import Task from "./Task";

export default {
  component: Task,
  title: "Task",
};

const Template = (args) => <Task {...args} />;

const args = {
  task: {
    id: "1",
    title: "Default 컴포넌트입니다",
    state: "TASK_INBOX",
  },
};

export const Default = Template.bind({});
Default.args = {
  ...args,
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...args.task,
    state: "TASK_PINNED",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...args.task,
    state: "TASK_ARCHIVED",
  },
};
