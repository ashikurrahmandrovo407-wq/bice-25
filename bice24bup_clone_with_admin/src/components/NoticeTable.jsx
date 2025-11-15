import React from 'react';

const notices = [
  ['2025-07-12', 'SEMESTER FINAL EXAMINATION (JANUARY-JUNE 2025)'],
  ['2025-03-09', 'ICE 2103 Classroom Code'],
  ['2025-03-04', 'Class Schedule For Ramadan'],
  ['2025-03-03', 'Academic Calendar 2025'],
  ['2025-03-02', 'Academic Guideline 3rd Semester'],
];

export default function NoticeTable() {
  return (
    <div className="table-card elevated">
      <table className="styled-table">
        <thead>
          <tr>
            <th>PUBLISH DATE</th>
            <th>TITLE</th>
            <th>VIEW</th>
          </tr>
        </thead>
        <tbody>
          {notices.map((n, i) => (
            <tr key={i} data-anim="row-fade">
              <td>{n[0]}</td>
              <td>{n[1]}</td>
              <td><a className="link">View</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
