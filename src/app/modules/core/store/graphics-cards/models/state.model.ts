import { GraphicsCardI } from "@shared/models/graphicsCards.model";

export interface AppState {
  graphicsCards: GraphicsCardI[],
  isLoading:string[],
}
