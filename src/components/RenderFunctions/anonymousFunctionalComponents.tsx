import type { FunctionalComponent } from "vue";

type FComponentProps = {
  message: string;
};

type Events = {
  sendMessage(message: string): void;
};

const FComponent: FunctionalComponent<FComponentProps, Events> = (props, context) => {
  return (
    <button onClick={() => context.emit("sendMessage", props.message)}>  {props.message}  </button>
  );
};

FComponent.props = {
  message: {
    type: String,
    required: true
  }
};

FComponent.emits = {
  sendMessage: (value) => typeof value === "string"
};
