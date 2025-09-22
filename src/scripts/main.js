'use strict';

document.addEventListener("DOMContentLoaded", () => {
  const table = document.querySelector("table");
  const thead = table.querySelector("thead tr");
  const tbody = table.querySelector("tbody");
  const tfoot = table.querySelector("tfoot tr");

  // Index of the column we want to clone (Position = 1)
  const cloneIndex = 1;
  // Insert before last column (Salary = last)
  const insertIndex = thead.children.length - 1;

  // Clone header cell
  const newHeadCell = thead.children[cloneIndex].cloneNode(true);
  thead.insertBefore(newHeadCell, thead.children[insertIndex]);

  // Clone each row cell in tbody
  tbody.querySelectorAll("tr").forEach(row => {
    const newCell = row.children[cloneIndex].cloneNode(true);
    row.insertBefore(newCell, row.children[insertIndex]);
  });

  // Clone footer cell
  const newFootCell = tfoot.children[cloneIndex].cloneNode(true);
  tfoot.insertBefore(newFootCell, tfoot.children[insertIndex]);
});
