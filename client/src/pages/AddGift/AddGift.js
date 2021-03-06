import React, { useState } from "react";
import { Row, Form, notification, Layout } from "antd";
import { FormInputText, FormInputNumber } from "./../../components/FormInput";
import ResponsiveColumn from "./../../components/ResponsiveColumn";
import { AddButton } from "./../../components/Button";
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect } from "react-router";
import "./style.css";
import { createGift } from "../../actions/graphql.api";

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 14 },
};

const tailLayout = {
  wrapperCol: {
    offset: 5,
    span: 10,
  },
};

const descriptionFieldRules = [
  { required: true, message: "please enter gift description" },
];

const giftLinkRules = [
  { required: true, message: "please enter link to gift" },
];

const giftPriceRules = [
  {
    required: true,
    type: "number",
    min: 1,
    max: 100,
    message: "please enter price between $1 and $100",
  },
];

const success = (eventId, setNextUrl, setGiftCreated) => {
  notification.success({
    message: "Gift Added",
    description: "Gift has been added to your wish list",
  });
  setNextUrl(`/events/${eventId}/participant`);
  setGiftCreated(true);
};

const showError = (error) => {
  notification.error({
    message: "Error",
    description: "Unable to add your gift due to error: " + error,
  });
};

// Creates the Add Gift Pages
const AddGift = (props) => {
  const { getAccessTokenSilently } = useAuth0();
  const [form] = Form.useForm();
  const eventId = props.match.params.id;
  const participantId = props.match.params.participantid;
  const [giftCreated, setGiftCreated] = useState(false);
  const [nextUrl, setNextUrl] = useState("");

  const onSuccess = () => success(eventId, setNextUrl, setGiftCreated);

  const onFinish = (values) => {
    createGift(
      values.description,
      values.url,
      values.price,
      getAccessTokenSilently(),
      parseInt(participantId),
      onSuccess,
      showError
    );

    form.resetFields();
  };

  return (
    <Layout className="bgWrapper">
      {giftCreated && <Redirect to={nextUrl} />}
      <Row gutter={[30, 30]} style={{ padding: 20 }} className="addGiftForm">
        <ResponsiveColumn lg={24}>
          <Form {...layout} form={form} onFinish={onFinish} name="nest-messages">
            <h1 className="add-gift-header">Add Gift Ideas</h1>
            {/* Input for gift description*/}
            <FormInputText
              name="description"
              label="Description"
              rules={descriptionFieldRules}
            />
            <FormInputText name="url" label="Link" rules={giftLinkRules} />
            <FormInputNumber
              name="price"
              label="Price"
              rules={giftPriceRules}
            />
            <Form.Item {...tailLayout} className="form-item-button">
              <AddButton htmlType="submit" text="Add Gift" />
            </Form.Item>
            
          </Form>
        </ResponsiveColumn>
      </Row>
    </Layout>
  );
};

export default AddGift;
