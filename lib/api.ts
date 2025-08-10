import axios from "axios";
import type { Note } from "../types/note";

const BASE_URL = "https://notehub-public.goit.study/api/notes";

const token = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export interface FetchNotesParams {
  page?: number;
  perPage?: number;
  search?: string;
}

export interface FetchNotesResponse {
  data: Note[];
  totalPages: number;
  page: number;
  perPage: number;
}

export interface CreateNoteData {
  title: string;
  content: string;
  tag: Note["tag"];
}

interface NotesApiResponse {
  notes: Note[];
  totalPages: number;
}

export const fetchNotes = async (
  params: FetchNotesParams = {}
): Promise<FetchNotesResponse> => {
  const { page = 1, perPage = 12, search = "" } = params;

  const response = await instance.get<NotesApiResponse>("/", {
    params: {
      page,
      perPage,
      ...(search !== "" && { search: search }),
    },
  });
  const raw = response.data;

  return {
    page,
    perPage,
    data: raw.notes,
    totalPages: raw.totalPages,
  };
};

export const createNote = async (noteData: CreateNoteData): Promise<Note> => {
  const response = await instance.post<Note>("/", noteData);
  return response.data;
};

export const deleteNote = async (noteId: string): Promise<Note> => {
  const response = await instance.delete<Note>(`/${noteId}`);
  return response.data;
};

export const fetchNoteById = async (id: string) => {
  const response = await instance.get<Note>(`/${id}`);
  return response.data;
};
