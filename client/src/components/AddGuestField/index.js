import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const AddGuestField = () => {
  return(
    <Form.List name="guests">
      {(fields, { add, remove }) => {
        return (
          <div>
            {fields.map(field => (
              <Space key={field.key} style={{ display: "flex", marginBottom: 8 }} align="start">
                <Form.Item
                  {...field}
                  name={[field.name, "first"]}
                  fieldKey={[field.fieldKey, "first"]}
                  rules={[{ required: true, message: "Missing first name" }]}
                >
                  <Input placeholder="First Name" />
                </Form.Item>
                <Form.Item
                  {...field}
                  name={[field.name, "last"]}
                  fieldKey={[field.fieldKey, "last"]}
                  rules={[{ required: true, message: "Missing last name" }]}
                >
                  <Input placeholder="Last Name" />
                </Form.Item>

                <MinusCircleOutlined
                  onClick={() => {
                    remove(field.name);
                  }}
                />
              </Space>
            ))}

            <Form.Item>
              <Button
                type="dashed"
                onClick={() => {
                  add();
                }}
                block
              >
                <PlusOutlined /> Add Guest
              </Button>
            </Form.Item>
          </div>
        );
      }}
    </Form.List>
  );
};

export default AddGuestField;