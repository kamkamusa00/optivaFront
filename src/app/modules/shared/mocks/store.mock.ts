import { of } from 'rxjs';
import { graphicsCardsMock } from './graphics-cards-mock';

const storeData = {
  graphicsCards: graphicsCardsMock(),
  isLoading: [''],
};

export const storeMock = () => ({
  // How we did it before
  select: (callback: (store: any) => any) => {
    if (typeof callback === 'string') {
      return of(storeData[callback]);
    } else {
      return of(callback(storeData));
    }
  },
  dispatch: () => '',
});
