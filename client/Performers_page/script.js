async function loadTable() {
  const endpoint = '../api/performers';
  const request = await fetch(endpoint);
  const performers = await request.json();

  async function injectTable() {
    const html = performers.map((performer) => `
                    <tr>
                        <td>${performer.artist_first_name} ${performer.artist_last_name}</td>
                        <td>${performer.country_of_origin}</td> 
                        <td>${performer.gender}</td> 
                    </tr>`).join('');
    return html;
  }

  const table = document.querySelector('.table');
  table.innerHTML = await injectTable();
}
window.onload = loadTable;