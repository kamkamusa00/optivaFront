export function arrayToRecord(arr: any[]): Record<any, any> {
  return arr.reduce((result: Record<any, any>, item) => {
    result[item.id] = item;
    return result;
  }, []);
}

export function cloneRecord(record:Record<any,any>) {
  let newRecord:Record<any,any> =[];
  for (const property in record) {
    newRecord[property]= {...record[property]};
  }
  return newRecord;
}

export function addArrayToRecord(
  record: Record<any, any>,
  arr: any[]
): Record<any, any> {
  arr.forEach((item) => {
    record[item.id] = item;
  });
  return record;
}
