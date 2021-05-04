import { Episode } from '../../Models/Episode'
import { Play } from '../../Models/Play'

export interface PlayerState {
  queue: Play[]
  mini: boolean
  volume: number
  playing: boolean
  loadingPlayingQueue: boolean
  loadedPlayingQueue: boolean
  speed: number
}

export const initialPlayerState: PlayerState = {
  queue: [],
  mini: false,
  volume: 0.5,
  playing: false,
  loadedPlayingQueue: false,
  loadingPlayingQueue: false,
  speed: 1
}
