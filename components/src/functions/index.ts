import axios from 'axios';
import React from 'react';
import { PlayerInfo, Scorers, ScorersResponse } from '../interfaces';

export const filterPlayersArr = (str: string, players: Scorers[]) => {
  return players.filter(({ player }) =>
    player.name.toLowerCase().includes(str.toLowerCase())
  );
};

export const fetchAllPlayers = async (
  setServerError: React.Dispatch<React.SetStateAction<boolean>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  limit = 100
): Promise<Scorers[]> => {
  setLoading(true);
  try {
    const response = await axios.get<ScorersResponse>(
      `/api/competitions/PL/scorers?limit=${limit}`
    );
    setLoading(false);
    return response.data.scorers;
  } catch (error) {
    setServerError(true);
    setLoading(false);
    return [];
  }
};

export const fetchPlayerById = async (
  id: number,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
): Promise<PlayerInfo | null> => {
  try {
    const response = await axios.get(`/api/players/${id}`);
    setLoading(false);
    return response.data;
  } catch (error) {
    setLoading(false);
    return null;
  }
};
