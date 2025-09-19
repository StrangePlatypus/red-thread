"use client";

import Input from "@/ui/input";
import Form from "next/form";
import { useEffect, useState } from "react";
import { Event } from "../events/types";
import Button from "@/ui/button";

export default function FormEvent() {
  const [loading, setLoading] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [newEvent, setNewEvent] = useState<Event>({
    id: Date.now().toString(),
    title: "",
    date: "",
    address: "",
    postalCode: "",
    city: "",
    description: "",
  });

  useEffect(() => {
    if (
      newEvent.title != "" ||
      newEvent.date != "" ||
      newEvent.address != "" ||
      newEvent.postalCode != "" ||
      newEvent.city != ""
    ) {
      setDisabled(false);
    }
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.currentTarget;
    setNewEvent({
      ...newEvent,
      [name]: value,
    });
  }

  function getEvents(): Event[] {
    const eventsJSON = sessionStorage.getItem("events");
    if (!eventsJSON) return [];

    return JSON.parse(eventsJSON) as Event[];
  }

  function onSubmit() {
    setLoading(true);
    const events = getEvents();
    setNewEvent({
      ...newEvent,
      id: Date.now().toString()
    })
    events.push(newEvent);
    sessionStorage.setItem("events", JSON.stringify(events));
    setNewEvent({
      id: "",
      title: "",
      date: "",
      address: "",
      postalCode: "",
      city: "",
      description: "",
    });
    setLoading(false);
  }

  return (
    <Form
      action=""
      onSubmit={onSubmit}
      className="flex flex-col w-full mx-auto gap-4"
    >
      <Input
        name="title"
        variant="primary"
        type="text"
        placeholder="Titre *"
        value={newEvent.title}
        onChange={handleChange}
        disabled={loading}
        required
      />
      <Input
        name="date"
        variant="primary"
        type="date"
        value={newEvent.date}
        onChange={handleChange}
        disabled={loading}
        required
      />
      <Input
        name="address"
        variant="primary"
        type="text"
        placeholder="Adresse *"
        value={newEvent.address}
        onChange={handleChange}
        disabled={loading}
        required
      />
      <Input
        name="postalCode"
        variant="primary"
        type="text"
        maxLength={5}
        placeholder="Code Postal *"
        value={newEvent.postalCode}
        onChange={handleChange}
        disabled={loading}
        required
      />
      <Input
        name="city"
        variant="primary"
        type="text"
        placeholder="Ville *"
        value={newEvent.city}
        onChange={handleChange}
        disabled={loading}
        required
      />
      <textarea
        className="py-2 px-4 rounded-sm border border-gray-100 hover:border-(--red) bg-white text-black w-full min-h-25 max-h-50 resize-none"
        name="description"
        aria-label="message"
        placeholder="Description de l'évènement"
        value={newEvent.description}
        onChange={handleChange}
        disabled={loading}
      />
      <Button
        type="submit"
        disabled={disabled || loading}
        loading={loading}
        variant="primary"
        position="right"
      >
        Valider
      </Button>
    </Form>
  );
}
