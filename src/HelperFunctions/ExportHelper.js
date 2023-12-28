import ExcelJS from "exceljs";

export const excelGenerator = (sheetName, fileName, columns, data) => {
  const workbook = new ExcelJS.Workbook();

  const worksheet = workbook.addWorksheet(sheetName);

  worksheet.addRow(columns?.map((item) => item));

  data.forEach((item) => {
    let row = columns?.map((col) => item[col]);
    worksheet.addRow(row);
  });

  workbook.xlsx.writeBuffer().then((buffer) => {
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${fileName}.xlsx` || "data.xlsx";
    link.click();
    URL.revokeObjectURL(url);
  });
};
