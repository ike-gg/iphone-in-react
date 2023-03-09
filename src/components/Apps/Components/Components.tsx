import { interfaceActions } from "@/app/interface";
import { notificationActions } from "@/app/notification";
import AppLayout from "@/components/Interface/AppView/AppLayout";
import Card from "@/components/Interface/Components/Card";
import Input from "@/components/Interface/Components/Input";
import Switch from "@/components/Interface/Components/Switch";
import Title from "@/components/Interface/Components/Title";
import Tooltip from "@/components/Interface/Components/Tooltip";
import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";

const Components = () => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(interfaceActions.changeStatusBarColor("dark"));
  }, [dispatch]);

  const triggerNotifi = () => {
    dispatch(
      notificationActions.new({
        icon: "calendar",
        message:
          "this is example notification to present how it looks alive 🧍‍♂️🧍‍♂️🧍‍♂️🧍‍♂️🧍‍♂️🧍‍♂️🧍‍♂️🧍‍♂️🧍‍♂️🧍‍♂️🧍‍♂️🧍‍♂️🧍‍♂️🧍‍♂️🧍‍♂️🧍‍♂️🧍‍♂️🧍‍♂️🧍‍♂️🧍‍♂️🧍‍♂️🧍‍♂️🧍‍♂️🧍‍♂️🧍‍♂️🧍‍♂️🧍‍♂️🧍‍♂️🧍‍♂️🧍‍♂️",
        title: "New episode of The Office just landed! 🧍‍♂️",
      })
    );
  };

  return (
    <AppLayout>
      <Title key="title">Title component</Title>
      <Card onClick={() => console.log("clicked")}>Card component</Card>
      <Tooltip>Tooltip component</Tooltip>
      <Card>
        <div className="flex justify-between items-center">
          <p>Toggle switch</p>
          <Switch isActive={false} />
        </div>
      </Card>
      <Card>
        <p>this</p>
        <p>is</p>
        <p>splitted</p>
        <p>card component</p>
      </Card>
      <Tooltip>Trigger example notification</Tooltip>
      <Card onClick={triggerNotifi}>Trigger notification</Card>
      <Tooltip>Input type text component</Tooltip>
      <Input placeholder="Input title of notification" type="text" />
    </AppLayout>
  );
};

export default Components;
