import { of } from "rxjs";
import { graphicsCardsMock } from "./graphics-cards-mock";

export const graphicsCardsServiceMock = () => ({
  getAll: () => of(graphicsCardsMock())
})
