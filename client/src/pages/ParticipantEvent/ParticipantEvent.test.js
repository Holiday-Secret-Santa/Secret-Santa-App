import React from "react";
import { render } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import ParticipantEvent from "./ParticipantEvent";
import { useAuth0 } from "@auth0/auth0-react";
import { StaticRouter } from "react-router";

jest.mock("./../../actions/graphql.api");

jest.mock("@auth0/auth0-react");
useAuth0.mockReturnValue({
  user: jest.fn(),
  getAccessTokenSilently: jest.fn(),
});

// mvp test scenario for participant event page
test("renders participant event page", () => {
  const { getByTestId } = render(
    <StaticRouter location="participant">
      <ParticipantEvent match={{ params: { id: 1 } }} />
    </StaticRouter>
  );
  // userEvent.click(getByTestId("delete-gift-btn-1"));
});
