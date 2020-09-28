import React from "react";
import { Row, Form, message } from "antd";
import { FormInputText, FormInputNumber } from "./../../components/FormInput";
import ResponsiveColumn from "./../../components/ResponsiveColumn";
import { AddButton } from "./../../components/Button";
import { GraphQLClient, gql } from "graphql-request";
import { useAuth0 } from "@auth0/auth0-react";
import "./style.css";


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

// Creates the Add Gift Pages
const AddGift = (props) => {
  const [form] = Form.useForm();
  const { user } = useAuth0();
  const { user_id } = user ? user : {};

  const success = () => {
    message.success({
      content: "Gift has been added to your wish list",
      className: "gift-add-success",
      style: {
        marginTop: "30vh",
      },
    });
  };

  const onFinish = (values) => {
    async function postGift() {
      const endpoint = "/graphql";

      const graphQLClient = new GraphQLClient(endpoint, {
        headers: {
          authorization: "Bearer MY_TOKEN",
        },
      });

      const mutation = gql`
				mutation CreateGift($input: InputGift!) {
					createGift(input: $input) {
						id
					}
				}
      `;
      
      const variables = {
        input: {
          description: values.description,
          link: values.url,
          price: values.price,
          ParticipantId: user_id
        },
      };

      const data = await graphQLClient.request(mutation, variables);

      console.log(JSON.stringify(data, undefined, 2));
    
    }

    postGift().catch((error) => console.error(error));
    success();
    form.resetFields();
  };

  return (
    <Row gutter={[30, 30]} style={{ padding: 20 }} className="addGiftForm">
      <ResponsiveColumn lg={24}>
        <Form form={form} onFinish={onFinish} name="nest-messages">
          <h1>Add Gift Ideas</h1>
          {/* Input for gift description*/}
          <FormInputText
            name="description"
            label="Description"
            rules={descriptionFieldRules}
          />
          <FormInputText name="url" label="Link" rules={giftLinkRules} />
          <FormInputNumber name="price" label="Price" rules={giftPriceRules} />
          <AddButton htmlType="submit" text="Add Gift" />
        </Form>
      </ResponsiveColumn>
    </Row>
  );
};

export default AddGift;
