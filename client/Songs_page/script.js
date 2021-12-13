async function loadTable() {
  const endpoint = '../api/songs';
  const request = await fetch(endpoint);
  const songs = await request.json();

  async function injectTable() {
    const html = songs.map((song) => `
                      <tr>
                          <td>${song.track_name}</td>
                          <td>${song.track_duration}</td>
                          <td>${song.explicit}</td> 
                      </tr>`).join('');
    return html;
  }

  const table = document.querySelector('.table');
  table.innerHTML = await injectTable();
}
window.onload = loadTable;