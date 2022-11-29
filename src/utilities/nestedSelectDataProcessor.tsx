const formatData = (rawData: any, formattedData: any = { items: {} }) => {
  for (const [key, value] of Object.entries(rawData)) {
    formattedData.items[key] = {
      index: key,
      canMove: false,
      hasChildren: value !== null,
      children: value !== null ? Object.keys(value as object) : undefined,
      data: key,
      canRename: false,
    };

    if (value !== null) {
      formatData(value, formattedData);
    }
  }
  return formattedData;
};

export default formatData;
