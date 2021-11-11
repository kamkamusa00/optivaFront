/* eslint-disable @typescript-eslint/no-explicit-any */
interface ObjectWithId{
  [key:string]:any;
  id:number;
}

export function trackById(index: number, item: ObjectWithId): number {
  return item.id;
}
