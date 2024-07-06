import React from 'react'
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { fetchNotifications } from '../../Http/Get';

const NotificationWrapper = styled.div`
  padding: 16px;
  border-radius: 8px;
  color: #fff;
  /* background-color: #f9f9f9; */
`;

const Notification = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["notifications"],
    queryFn: fetchNotifications,
    staleTime: 5000,
    onSuccess: (data) => {
      console.log("Notification");
      console.log(data);
    },
  });

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isError) {
    content = <h1>{error.message}</h1>;
  } else {
    content = (
      <ul>
        {data.map((notification) => (
          <li key={notification.id}>{notification}</li>
        ))}
      </ul>
    );
  }

  return (
    <NotificationWrapper>
      {content}
    </NotificationWrapper>
  );
}

export default Notification;
