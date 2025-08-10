"use client";

import { fetchNoteById } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import css from "./NoteDetails.module.css";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const NoteDetailsClients = () => {
  const { id } = useParams<{ id: string }>();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const {
    data: note,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading, please wait...</p>;
  if (error || !note) return <p>Something went wrong.</p>;

  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{note.title}</h2>
        </div>
        {isClient && (
          <p className={css.date}>
            {new Date(note.createdAt).toLocaleDateString()}{" "}
            {new Date(note.createdAt).toLocaleTimeString()}
          </p>
        )}
      </div>
    </div>
  );
};

export default NoteDetailsClients;
