import React from 'react';

const rows = [
  ['Data Structure (ICE-2201)', 'hd3dxkbc', 'Sec A + Sec B', ''],
  ['Data Structure Laboratory (ICE-2202)', 'zenvhz4v', 'Sec A + Sec B', ''],
  ['Database Management System (ICE-2203)', 'tfsljq6t', 'Sec A + Sec B', 'Classroom Link'],
  ['Database Management System Laboratory (ICE2204)', 'p34wdvew', 'Sec A + Sec B', 'Classroom Link'],
];

export default function CoursesTable() {
  return (
    <div id="courses" className="table-card elevated">
      <table className="styled-table">
        <thead>
          <tr>
            <th>COURSE NAME</th>
            <th>CLASSROOM CODE</th>
            <th>SECTION</th>
            <th>GOOGLE CLASSROOM LINK</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td>{r[0]}</td>
              <td>{r[1]}</td>
              <td>{r[2]}</td>
              <td>{r[3] ? <a className="link">{r[3]}</a> : ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
