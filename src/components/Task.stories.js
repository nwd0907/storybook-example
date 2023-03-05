import Task from "./Task";

export default {
  component: Task,
  title: "입력하세요",
};

const Template = (args) => () => <Task {...args} />;

const args = {
  task: {
    id: "1",
    title: "Default 컴포넌트입니다",
    state: "TASK_INBOX",
  },
};

export const Default = Template({
  ...args,
});

export const Pinned = Template({
  task: {
    ...args.task,
    state: "TASK_PINNED",
  },
});

export const Archived = Template({
  task: {
    ...args.task,
    state: "TASK_ARCHIVED",
  },
});
