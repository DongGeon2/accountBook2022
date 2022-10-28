export function sortingByDate(arr: any[]) {
    let sortedArr = arr.sort(
      (a, b) =>
        Number(a.createDate.substring(0, 10).replace(/-/g, "")) -
        Number(b.createDate.substring(0, 10).replace(/-/g, ""))
    );
    return sortedArr as any[];
  }