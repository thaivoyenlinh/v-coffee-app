import { Input, Form } from "antd";

interface IProps {
  formItem?: boolean;
  [key: string]: any;
}

const TextInput = ({ formItem = true, ...rest }: IProps) => {
  return formItem ? (
    <Form.Item>
      <Input {...rest} />
    </Form.Item>
  ) : (
    <Input {...rest} />
  );
};

export default TextInput;
