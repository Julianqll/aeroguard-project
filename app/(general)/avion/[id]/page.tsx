"use client";
import AirplaneModelView from "../../../../components/AirplaneModelView/AirplaneModelView";

export default function AvionPage({ params }: { params: { id: string } }) {
    return (
        <AirplaneModelView id={params.id}/>
    );
  }