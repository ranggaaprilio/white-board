"use client";
import { useQuery } from "convex/react";

import { api } from "@/convex/_generated/api";
import { EmptySearch } from "./empty-search";
import { EmptyFavorites } from "./empty-favorites";

// import { BoardCard } from "./board-card";
import { EmptyBoards } from "./empty-boards";
// import { NewBoardButton } from "./new-board-button";

import PulseLoader from "react-spinners/PulseLoader";



interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}



export const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = useQuery(api.boards.get, {
    orgId,
    ...query,
  });

  if (data === undefined) {
    return (
      <div className="flex justify-center items-center h-full">
        <PulseLoader 
        color="#36d7b7"
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"/>
      </div>
    );
  }

  if (!data?.length && query.search) {
    return <EmptySearch />;
  }

  if (!data?.length && query.favorites) {
    return <EmptyFavorites />;
  }

  if (!data?.length) {
    return <EmptyBoards />;
  }

  return <div>{JSON.stringify(data)}</div>;
};
