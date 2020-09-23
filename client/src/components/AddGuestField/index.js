import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const CreateNameFields = (key, fieldData, name, fieldKey, children) => {
  return (
    <Form.Item
      key={key}
      {...fieldData}
      name={name}
      fieldKey={fieldKey}
      rules={[{ required: true, message: "Please enter first and last name" }]}
    >
      {children}
    </Form.Item>
  );
};

const AddGuestField = () => {
  return (
    <Form.List name="guests">
      {(fields, { add, remove }) => {
        return (
          <div>
            {fields.map((field) => (
              <Space
                key={field.key}
                style={{ display: "flex", marginBottom: 8 }}
                align="start"
              >
                {CreateNameFields(
                  2,
                  field,
                  [field.name, "first"],
                  [field.fieldKey, "first"],
                  <Input placeholder="First Name" />
                )}

                {CreateNameFields(
                  3,
                  field,
                  [field.name, "last"],
                  [field.fieldKey, "last"],
                  <Input placeholder="Last Name" />
                )}

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
