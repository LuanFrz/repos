const arrangeTable = tableItem => {
  const table = document.getElementsByClassName(tableItem)[0];
  if (table) {
    if (table.children.length === 2) {
      table.children[0].style.height = table.offsetWidth - 16 + 'px';
      table.children[0].children[0].style.height =
        table.offsetWidth - 16 + 'px';
      table.children[1].style.height = table.offsetWidth - 16 + 'px';
      table.children[1].children[0].style.height =
        table.offsetWidth - 16 + 'px';
      table.children[2].style.height = table.offsetWidth - 16 + 'px';
      table.children[2].children[0].style.height =
        table.offsetWidth - 16 + 'px';
      table.children[3].style.height = table.offsetWidth - 16 + 'px';
      table.children[3].children[0].style.height =
        table.offsetWidth - 16 + 'px';
    } else if (table.children.length === 3) {
      table.children[1].style.height = (table.offsetWidth - 16) / 2 + 'px';
      table.children[1].children[0].style.height =
        (table.offsetWidth - 16) / 2 + 'px';
      table.children[2].style.height = (table.offsetWidth - 16) / 2 + 'px';
      table.children[2].children[0].style.height =
        (table.offsetWidth - 16) / 2 + 'px';
    } else if (table.children.length === 4) {
      table.children[0].style.height = (table.offsetWidth - 16) / 2 + 'px';
      table.children[0].children[0].style.height =
        (table.offsetWidth - 16) / 2 + 'px';
      table.children[1].style.height = (table.offsetWidth - 16) / 2 + 'px';
      table.children[1].children[0].style.height =
        (table.offsetWidth - 16) / 2 + 'px';
      table.children[2].style.height = (table.offsetWidth - 16) / 2 + 'px';
      table.children[2].children[0].style.height =
        (table.offsetWidth - 16) / 2 + 'px';
      table.children[3].style.height = (table.offsetWidth - 16) / 2 + 'px';
      table.children[3].children[0].style.height =
        (table.offsetWidth - 16) / 2 + 'px';
    } else if (table.children.length >= 5) {
      table.children[0].style.height = (table.offsetWidth - 16) / 2 + 'px';
      table.children[0].children[0].style.height =
        (table.offsetWidth - 16) / 2 + 'px';
      table.children[1].style.height = (table.offsetWidth - 16) / 2 + 'px';
      table.children[1].children[0].style.height =
        (table.offsetWidth - 16) / 2 + 'px';
      table.children[2].style.height = (table.offsetWidth - 24) / 3 + 'px';
      table.children[2].children[0].style.height =
        (table.offsetWidth - 24) / 3 + 'px';
      table.children[3].style.height = (table.offsetWidth - 24) / 3 + 'px';
      table.children[3].children[0].style.height =
        (table.offsetWidth - 24) / 3 + 'px';
      table.children[4].style.height = (table.offsetWidth - 24) / 3 + 'px';
      table.children[4].children[0].style.height =
        (table.offsetWidth - 24) / 3 + 'px';
    }
  }
};
