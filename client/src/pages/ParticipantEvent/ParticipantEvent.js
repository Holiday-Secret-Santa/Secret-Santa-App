import React, { useEffect, useState } from "react";
import { Row, Button, Tooltip, notification } from "antd";
import { GiftTwoTone, DeleteTwoTone } from "@ant-design/icons";
import DetailCard from "../../components/DetailCard/DetailCard";
import ResponsiveColumn from "./../../components/ResponsiveColumn";
import TableComp from "./../../components/Table";
import {
	getParticipantByEventIdAndEmail,
	getGiftByParticipantId,
	deleteGift,
	getEventByEventId,
} from "./../../actions/graphql.api";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import "./style.css";

const getDummyItems = (size) => {
	var itemsArray = [];

	for (let i = 0; i < size; i++) {
		itemsArray.push({
			id: i,
			description: `item ${i}`,
			price: 32,
			link: 'http:"www.example.html"',
		});
	}
	return itemsArray;
};

const getMySecretSantaItems = () => {
	return getDummyItems(8);
};

const customColor = "#D62828";

const getColumns = (
	showDeleteAction,
	getAccessTokenSilently,
	onDeleteSuccess,
	showDeleteError
) => {
	const columns = [
		{
			title: "Wish List Items",
			dataIndex: "description",
			key: "description",
			align: "center",
		},
		{
			title: "Price",
			dataIndex: "price",
			key: "price",
			responsive: ["md"],
			align: "center",
		},
		{
			title: "Purchase Gift Here",
			dataIndex: "link",
			key: "link",
			responsive: ["lg"],
			align: "center",
		},
	];

	if (showDeleteAction) {
		columns.push({
			title: "",
			dataIndex: "",
			key: "action",
			render: (record) => (
				<Tooltip title="Delete Gift Item">
					<Button
						type="text"
						data-testid={`delete-gift-btn-${record.id}`}
						onClick={() =>
							deleteGift(
								record.id,
								getAccessTokenSilently(),
								onDeleteSuccess,
								showDeleteError
							)
						}
						icon={
							<DeleteTwoTone
								twoToneColor={customColor}
								style={{ fontSize: 24 }}
							/>
						}
					/>
				</Tooltip>
			),
		});
	}

	return columns;
};

const MyGiftListAddButton = ({ link }) => {
	return (
		<Row justify="end">
			<Tooltip title="Add Gift Item">
				<Link to={link}>
					<Button
						shape="circle"
						size="large"
						type="text"
						icon={
							<GiftTwoTone
								twoToneColor={customColor}
								style={{ fontSize: 48 }}
							/>
						}
						style={{ width: 80, height: 80 }}
					></Button>
				</Link>
			</Tooltip>
		</Row>
	);
};

const EventCard = ({ description, date, start_time, location }) => {
	return (
		<DetailCard
			title={description}
			date={date}
			startTime={start_time}
			location={location}
		/>
	);
};

const showError = (error) => {
	notification.error({
		message: "Error",
		description: "Unable to load participant due to error: " + error,
	});
};

const giftError = (error) => {
	notification.error({
		message: "Gift Error",
		description: "Unable to load gifts due to error: " + error,
	});
};

const onDeleteShowError = (error) => {
	notification.error({
		message: "Delete Failed",
		description: "Unable to delete gift due to error: " + error,
	});
};

const onDeleteShowSuccess = () => {
	notification.success({
		message: "Gift Deleted",
		description: "Gift was successfully deleted",
	});
};

const ParticipantEvent = (props) => {
	// const eventId = props.match.params.id;
	const eventId = parseInt(props.match.params.id);
	const { user, getAccessTokenSilently } = useAuth0();
	const { email } = user;
	const [participantId, setParticipantId] = useState(null);
	const [wishList, setWishList] = useState([]);
	const [deleteState, setDeleteState] = useState(false);
	const [eventData, setEventData] = useState({});

	useEffect(() => {
		getParticipantByEventIdAndEmail(
			parseInt(eventId),
			email,
			getAccessTokenSilently(),
			(data) => setParticipantId(data.getParticipantByEventIdAndEmail.id),
			showError
		);
	}, [eventId, email, getAccessTokenSilently, participantId]);

	// develop useEffect hook to call getGiftByParticipantId

	useEffect(() => {
		if (participantId)
			getGiftByParticipantId(
				parseInt(participantId),
				getAccessTokenSilently(),
				(data) => setWishList(data.getGiftByParticipantId),
				giftError
			);
	}, [getAccessTokenSilently, participantId, deleteState]);

	const onDeleteSuccess = () => {
		onDeleteShowSuccess();
		setDeleteState(!deleteState);
	};

	// render event info on participant view
	useEffect(() => {
		getEventByEventId(
			eventId,
			getAccessTokenSilently(),
			(d) => setEventData(d.getEvent),
			showError
		);
	}, [getAccessTokenSilently, eventId]);

	return (
		<>
			<Row gutter={[30, 30]} style={{ padding: 20 }}>
				<ResponsiveColumn lg={6}>
					<EventCard
						description={eventData.description}
						date={eventData.date}
						start_time={eventData.start_time}
						location={eventData.location}
					/>
				</ResponsiveColumn>
				<ResponsiveColumn lg={18}>
					<TableComp
						title={() => "You are the Secret Santa for ... "}
						dataSource={getMySecretSantaItems()}
						columns={getColumns(false)}
					/>
					<MyGiftListAddButton
						link={`/events/${eventId}/participant/${participantId}/addgift`}
					/>
					<TableComp
						title={() => "Create Your Gift List for Your Secret Santa!"}
						dataSource={wishList}
						columns={getColumns(
							true,
							getAccessTokenSilently,
							onDeleteSuccess,
							onDeleteShowError
						)}
					/>
				</ResponsiveColumn>
			</Row>
		</>
	);
};

export default ParticipantEvent;
